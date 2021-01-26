﻿using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.API.Models.Job;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.Model;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    public class JobManager : IJobManager
    {
        private List<JobRequest> AllJobs { get; }
        private ConcurrentQueue<JobRequest> Queued { get; }
        private JobRequest Running { get; set; }
        private ConcurrentBag<JobRequest> Finished { get; }

        private CancellationTokenSource cancelCancellationTokenSource;

        public JobManager()
        {
            AllJobs = new List<JobRequest>();
            Queued = new ConcurrentQueue<JobRequest>();
            Running = null;
            Finished = new ConcurrentBag<JobRequest>();
            RunNextJob();
        }

        public void AddToQueue(JobRequest job)
        {
            job.Status = JobStatus.Queued;
            AllJobs.Add(job);
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
            if(!Queued.TryDequeue(out var newRun))
            {
                throw new ApplicationException($"Error trying to dequeue"); //TODO:: add more information to be helpful
            }

            Running = newRun;

            Task.Run(ConvertAndExecuteJob, cancelCancellationTokenSource.Token).ContinueWith(task => RunNextJob());

        }

        private Task ConvertAndExecuteJob() => Task.Run(() =>
            {
                //TODO:: Convert to format known by model

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

                // Construct calculators
                var csParameters = new CharacterizationSamplingParameters(
                    Running.ModifyParameter.Filters.First(f => f.Name == "Characterization Sampling").Filters);
                var srParameters = new SourceReductionParameters(
                    Running.ModifyParameter.Filters.First(f => f.Name == "Source Reduction").Filters);
                var dcParameters = new DecontaminationParameters(
                    Running.ModifyParameter.Filters.First(f => f.Name == "Decontamination").Filters, 
                    Running.ModifyParameter.Filters.First(f => f.Name == "Efficacy").Filters);
                var icParameters = new IncidentCommandParameters(
                    Running.ModifyParameter.Filters.First(f => f.Name == "Incident Command").Filters);
                var otParameters = new OtherParameters(
                    Running.ModifyParameter.Filters.First(f => f.Name == "Other").Filters);
                var cParameters = new CostParameters(
                    Running.ModifyParameter.Filters.First(f => f.Name == "Cost per Parameter").Filters);

                ParameterArrayCharacterizationSamplingCalculatorFactory csCalculatorFactory = 
                new ParameterArrayCharacterizationSamplingCalculatorFactory(csParameters, cParameters);

                ParameterArraySourceReductionCalculatorFactory srCalculatorFactory = 
                new ParameterArraySourceReductionCalculatorFactory(srParameters, cParameters);

                ParameterArrayDecontaminationCalculatorFactory dcCalculatorFactory = 
                new ParameterArrayDecontaminationCalculatorFactory(dcParameters, cParameters);

                ParameterArrayOtherCalculatorFactory otCalculatorFactory = 
                new ParameterArrayOtherCalculatorFactory(otParameters, cParameters);

                ParameterArrayIncidentCommandCalculatorFactory icCalculatorFactory = 
                new ParameterArrayIncidentCommandCalculatorFactory(
                    icParameters, 
                    cParameters,
                    csCalculatorFactory,
                    srCalculatorFactory,
                    dcCalculatorFactory);

                var calculatorCreator = new CalculatorCreator(
                    csCalculatorFactory,
                    srCalculatorFactory,
                    dcCalculatorFactory,
                    otCalculatorFactory,
                    icCalculatorFactory);

                //TODO:: Run model
                ScenarioManager scenarioDetails = new ScenarioManager(
                    Running.DefineScenario,
                    Running.ModifyParameter);

                Running.Results = scenarioDetails.ExecuteScenario();

                //TODO:: Store results of model in job
                Running.Status = JobStatus.Completed;
                Finished.Add(Running);
                Running = null;
            });

        public JobStatus GetStatus(Guid id) => GetJob(id)?.Status ?? JobStatus.Unknown;

        public JobRequest GetJob(Guid id) => AllJobs.FirstOrDefault(request => request.Id == id);
    }
}