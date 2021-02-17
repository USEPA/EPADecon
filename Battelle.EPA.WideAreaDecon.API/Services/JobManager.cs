﻿using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.API.Models.Job;
using Battelle.EPA.WideAreaDecon.API.Hubs;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.Model;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Microsoft.AspNetCore.SignalR;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    public class JobManager : IJobManager
    {
        private List<JobRequest> AllJobs { get; }
        private ConcurrentQueue<JobRequest> Queued { get; }
        private JobRequest Running { get; set; }
        private ConcurrentBag<JobRequest> Finished { get; }

        private CancellationTokenSource cancelCancellationTokenSource;

        private JobStatusUpdater _statusUpdater;

        public JobManager(IHubContext<JobStatusHub, IJobStatusHub> hub)
        {
            AllJobs = new List<JobRequest>();
            Queued = new ConcurrentQueue<JobRequest>();
            Running = null;
            Finished = new ConcurrentBag<JobRequest>();
            _statusUpdater = new JobStatusUpdater(hub);
            RunNextJob();
        }

        public void AddToQueue(JobRequest job)
        {
            AllJobs.Add(job);

            _statusUpdater.UpdateJobStatus(job, JobStatus.Queued);

            Queued.Enqueue(job);
        }


        private void RunNextJob()
        {
            if (Queued.IsEmpty)
            {
                Task.Run(() =>
                {
                    Task.Delay(500);
                    RunNextJob();
                });
                return;
            }

            cancelCancellationTokenSource = new CancellationTokenSource();
            if (Running != null)
            {
                throw new ApplicationException($"Trying to run new job while currently running job {Running.Id}");
            }
            if (!Queued.TryDequeue(out var newRun))
            {
                throw new ApplicationException($"Error trying to dequeue"); //TODO:: add more information to be helpful
            }

            Running = newRun;

            Task.Run(ConvertAndExecuteJob, cancelCancellationTokenSource.Token).ContinueWith(task => RunNextJob());

        }

        private Task ConvertAndExecuteJob() => Task.Run(() =>
            {
                _statusUpdater.UpdateJobStatus(Running, JobStatus.Running);

                var extentOfContaminationParameters = Running.DefineScenario.Filters
                    .First(f => f.Name == "Extent of Contamination").Parameters;

                var scenarioCreator = new ScenarioCreator(
                    extentOfContaminationParameters.First(p => p.MetaData.Name == "Area Contaminated") as EnumeratedParameter<DecontaminationPhase>,
                    extentOfContaminationParameters.First(p => p.MetaData.Name == "Loading") as EnumeratedParameter<DecontaminationPhase>,
                    extentOfContaminationParameters.First(p => p.MetaData.Name == "Indoor Contamination Breakout") as EnumeratedFraction<BuildingCategory>,
                    extentOfContaminationParameters.First(p => p.MetaData.Name == "Indoor Surface Type Breakout") as EnumeratedFraction<SurfaceType>,
                    extentOfContaminationParameters.First(p => p.MetaData.Name == "Outdoor Surface Type Breakout") as EnumeratedFraction<SurfaceType>,
                    extentOfContaminationParameters.First(p => p.MetaData.Name == "Underground Surface Type Breakout") as EnumeratedFraction<SurfaceType>);

                var scenarios = new List<ScenarioRealization>();

                for (int r = 0; r < Running.NumberRealizations; r++)
                {
                    scenarios.Add(scenarioCreator.CreateRealizationScenario());
                }

                var parameterManager = new ParameterManager(
                    Running.ModifyParameter.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                    Running.ModifyParameter.Filters.First(f => f.Name == "Source Reduction").Filters,
                    Running.ModifyParameter.Filters.First(f => f.Name == "Decontamination").Filters,
                    Running.ModifyParameter.Filters.First(f => f.Name == "Efficacy").Parameters,
                    Running.ModifyParameter.Filters.First(f => f.Name == "Other").Filters,
                    Running.ModifyParameter.Filters.First(f => f.Name == "Incident Command").Filters,
                    Running.ModifyParameter.Filters.First(f => f.Name == "Cost per Parameter").Filters);

                for (int s = 0; s < scenarios.Count(); s++)
                {
                    // Indoor scenarios
                    for (int i = 0; i < scenarios[s].IndoorBuildingsContaminated.Length; i++)
                    {
                        var indoorCalculatorManager = new CalculatorManager(
                            parameterManager.SetCharacterizationSamplingParameters(),
                            parameterManager.SetSourceReductionParameters(scenarios[s].IndoorBuildingsContaminated[i]),
                            parameterManager.SetDecontaminationParameters(scenarios[s].IndoorBuildingsContaminated[i]),
                            parameterManager.SetIncidentCommandParameters(),
                            parameterManager.SetOtherParameters(),
                            parameterManager.SetCostParameters());

                        var indoorCalculatorCreator = indoorCalculatorManager.CreateCalculatorFactories();

                        var indoorModelRun = indoorCalculatorCreator.GetCalculators();

                        var indoorResults = indoorModelRun.CalculateCost(
                            indoorCalculatorManager, 
                            scenarios[s].IndoorBuildingsContaminated[i]);
                    }

                    // Outdoor scenarios
                    var outdoorCalculatorManager = new CalculatorManager(
                        parameterManager.SetCharacterizationSamplingParameters(),
                        parameterManager.SetSourceReductionParameters(scenarios[s].OutdoorAreasContaminated),
                        parameterManager.SetDecontaminationParameters(scenarios[s].OutdoorAreasContaminated),
                        parameterManager.SetIncidentCommandParameters(),
                        parameterManager.SetOtherParameters(),
                        parameterManager.SetCostParameters());

                    var outdoorCalculatorCreator = outdoorCalculatorManager.CreateCalculatorFactories();

                    var outdoorModelRun = outdoorCalculatorCreator.GetCalculators();

                    var outdoorResults = outdoorModelRun.CalculateCost(
                        outdoorCalculatorManager,
                        scenarios[s].OutdoorAreasContaminated);

                    // Underground scenarios
                    var undergroundCalculatorManager = new CalculatorManager(
                        parameterManager.SetCharacterizationSamplingParameters(),
                        parameterManager.SetSourceReductionParameters(scenarios[s].UndergroundBuildingsContaminated),
                        parameterManager.SetDecontaminationParameters(scenarios[s].UndergroundBuildingsContaminated),
                        parameterManager.SetIncidentCommandParameters(),
                        parameterManager.SetOtherParameters(),
                        parameterManager.SetCostParameters());

                    var undergroundCalculatorCreator = undergroundCalculatorManager.CreateCalculatorFactories();

                    var undergroundModelRun = undergroundCalculatorCreator.GetCalculators();

                    var undergroundResults = undergroundModelRun.CalculateCost(
                        undergroundCalculatorManager,
                        scenarios[s].UndergroundBuildingsContaminated);
                }

                //TODO:: Store results of model in job
                _statusUpdater.UpdateJobStatus(Running, JobStatus.Completed);
                Finished.Add(Running);
                Running = null;
            });

        public JobStatus GetStatus(Guid id) => GetJob(id)?.Status ?? JobStatus.Unknown;

        public JobRequest GetJob(Guid id) => AllJobs.FirstOrDefault(request => request.Id == id);

        public bool UpdateJob(JobRequest newJob)
        {
            var old = AllJobs.FirstOrDefault(request => request.Id == newJob.Id);
            if (old == null)
            {
                return false;
            }
            old = newJob;
            return true;
        }
    }
}