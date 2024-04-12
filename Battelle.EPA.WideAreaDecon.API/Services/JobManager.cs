using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Models.Job;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario;
using Battelle.EPA.WideAreaDecon.Model.Interface;
using Battelle.RiskAssessment.Common.Statistics;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    /// <summary>
    /// <inheritdoc cref="IJobManager"/>
    /// </summary>
    public class JobManager : IJobManager
    {
        private List<JobRequest> AllJobs { get; }
        private ConcurrentQueue<JobRequest> Queued { get; }
        private JobRequest Running { get; set; }
        private ConcurrentBag<JobRequest> Finished { get; }

        private CancellationTokenSource cancelCancellationTokenSource;

        private readonly IEventModelRunner _eventModelRunner;
        private readonly IScenarioModelRunner _scenarioModelRunner;
        private readonly IJobStatusUpdater _statusUpdater;
        private readonly IJobProgressUpdater _progressUpdater;

        /// <summary>
        /// Constructs a job manager responsible for running jobs
        /// </summary>
        public JobManager(IEventModelRunner eventModelRunner,
            IScenarioModelRunner scenarioModelRunner,
            IJobProgressUpdater jobProgressUpdater,
            IJobStatusUpdater jobStatusUpdater)
        {
            _eventModelRunner = eventModelRunner;
            _scenarioModelRunner = scenarioModelRunner;
            _statusUpdater = jobStatusUpdater;
            _progressUpdater = jobProgressUpdater;

            AllJobs = new List<JobRequest>();
            Queued = new ConcurrentQueue<JobRequest>();
            Running = null;
            Finished = new ConcurrentBag<JobRequest>();

            RunNextJob();
        }

        /// <summary>
        /// <inheritdoc cref="IJobManager.AddToQueue"/>
        /// </summary>
        public async Task AddToQueue(JobRequest job)
        {
            AllJobs.Add(job);

            // allows for frontend to join hub group
            await Task.Delay(1000);

            await _statusUpdater.UpdateJobStatus(job, JobStatus.Queued);

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

        private Task ConvertAndExecuteJob() => Task.Run(async () =>
            {
                await _statusUpdater.UpdateJobStatus(Running, JobStatus.Running);
                _progressUpdater.UpdateJobProgress(Running, 0.0);
                var progressIncrement = 1.0 / Running.NumberRealizations * 100;

                try
                {
                    // Set seeds using values from job
                    LibraryInfo.SetSeed(Running.Seed1, Running.Seed2);

                    UniformDistribution dist = new UniformDistribution(1, long.MaxValue);

                    var seeds = new Tuple<ulong, ulong>[Running.NumberRealizations];

                    for (int i = 0; i < Running.NumberRealizations; i++)
                    {
                        seeds[i] = new Tuple<ulong, ulong>(Convert.ToUInt64(dist.Draw()), Convert.ToUInt64(dist.Draw()));
                    }

                    var extentOfContaminationParameters = Running.DefineScenario.Filters
                        .First(f => f.Name == ExtentOfContamination.SheetName).Parameters;
                    var contaminationDefinition = extentOfContaminationParameters.First(p => p.MetaData.Name == ParameterNames.ContaminationDefinition) as ContaminationDefinition
                      ?? throw new NullReferenceException($"{ParameterNames.ContaminationDefinition} parameter is null");

                    var scenarioCreator = new ScenarioCreator(
                        contaminationDefinition.AreaContaminated,
                        extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.CityBlockSizeName) as EnumeratedParameter<DecontaminationElement>,
                        extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.BuildingSizeName) as EnumeratedParameter<BuildingCategory>,
                        contaminationDefinition.BuildingAreasInPlume,
                        contaminationDefinition.Loading,
                        extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.IndoorBuildingBreakoutName) as EnumeratedFraction<BuildingCategory>,
                        extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.IndoorSurfaceBreakoutName) as EnumeratedFraction<SurfaceType>,
                        extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.OutdoorSurfaceBreakoutName) as EnumeratedFraction<SurfaceType>,
                        extentOfContaminationParameters.First(p => p.MetaData.Name == ExtentOfContamination.UndergroundSurfaceBreakoutName) as EnumeratedFraction<SurfaceType>,
                        Running.DefinitionMode);

                    var scenarios = new List<ScenarioRealization>();

                    for (int r = 0; r < Running.NumberRealizations; r++)
                    {
                        scenarios.Add(scenarioCreator.CreateRealizationScenario());
                    }

                    var results = new List<JobResults>();

                    for (int s = 0; s < scenarios.Count; s++)
                    {
                        LibraryInfo.SetSeed(seeds[s].Item1, seeds[s].Item2);

                        var realizationResults = new JobResults()
                        {
                            ScenarioResults = new ScenarioTypeResults()
                            {
                                IndoorResults = new Dictionary<BuildingCategory, BuildingCategoryResults>(),
                                OutdoorResults = new ScenarioRealizationResults(),
                                UndergroundResults = new ScenarioRealizationResults()
                            },
                            EventResults = new EventResults()
                        };


                        // RUN INDOOR WITH MULTIPLE BUILDINGS
                        // Loop through each building category to run the model building by building
                        // within each category. The category buildings will be aggregated at the end
                        foreach (BuildingCategory category in scenarios[s].IndoorBuildingsContaminated.Keys.ToList())
                        {
                            // Create a list that will hold the results for each building in the category
                            var buildingCategoryResultsByBuilding = new SegmentResults()
                            {
                                Results = new List<ScenarioRealizationResults>()
                            };

                            // Looping through the buildings within each category
                            if (scenarios[s].IndoorBuildingsContaminated[category].Count > 0)
                            {
                                foreach (var building in scenarios[s].IndoorBuildingsContaminated[category])
                                {
                                    // Run scenario model for the building
                                    var buildingResults = _scenarioModelRunner
                                        .RunScenarioModel(Running.ModifyParameter, DecontaminationElement.Indoor, building);

                                    // Store the results in the building results list
                                    buildingCategoryResultsByBuilding.Results.Add(buildingResults);
                                }
                            }

                            // Creating a list where all of the areas for each building will be stored
                            var buildingAreasForCategory = new List<double>();

                            // Loop through each individual building within the building category
                            foreach (var building in scenarios[s].IndoorBuildingsContaminated[category])
                            {
                                // Sum the area for all surfaces within that building to get the
                                // total area of the individual building
                                var area = 0.0;

                                foreach (var surface in building.Keys.ToList())
                                {
                                    area += building[surface].AreaContaminated;
                                }

                                buildingAreasForCategory.Add(area);
                            }

                            // Aggregate the list of building results for the current building category
                            // and store the summed results, the number of buildings, and the areas of each of the 
                            // buildings in the building category results object that we will then place in the 
                            // dictionary for the corresponding building category key
                            var categoryBuildingCount = buildingCategoryResultsByBuilding.Results.Count();

                            var buildingCategoryResults = categoryBuildingCount > 0
                                ? new BuildingCategoryResults()
                                {
                                    RealizationResults = buildingCategoryResultsByBuilding.SumResults(),
                                    BuildingCount = categoryBuildingCount,
                                    BuildingAreas = buildingAreasForCategory
                                }
                                : null;

                            realizationResults.ScenarioResults.IndoorResults.Add(category, buildingCategoryResults);
                        }

                        if (realizationResults.ScenarioResults.IndoorResults.Count == 0)
                        {
                            realizationResults.ScenarioResults.IndoorResults = null;
                        }

                        //RUN OUTDOOR SCENARIO
                        if (scenarios[s].OutdoorAreasContaminated.Count > 0)
                        {
                            var outdoorSegmentResults = new SegmentResults()
                            {
                                Results = new List<ScenarioRealizationResults>()
                            };

                            foreach (var outdoorSegment in scenarios[s].OutdoorAreasContaminated)
                            {
                                var segmentResults = _scenarioModelRunner
                                    .RunScenarioModel(Running.ModifyParameter, DecontaminationElement.Outdoor, outdoorSegment);
                                outdoorSegmentResults.Results.Add(segmentResults);
                            }

                            realizationResults.ScenarioResults.OutdoorResults = outdoorSegmentResults.SumResults();
                        }
                        else
                        {
                            realizationResults.ScenarioResults.OutdoorResults = null;
                        }

                        //RUN UNDERGROUND SCENARIO
                        if (scenarios[s].UndergroundBuildingsContaminated.Count > 0)
                        {
                            var undergroundSegmentResults = new SegmentResults()
                            {
                                Results = new List<ScenarioRealizationResults>()
                            };

                            foreach (var undergroundSegment in scenarios[s].UndergroundBuildingsContaminated)
                            {
                                var segmentResults = _scenarioModelRunner
                                    .RunScenarioModel(Running.ModifyParameter, DecontaminationElement.Underground, undergroundSegment);
                                undergroundSegmentResults.Results.Add(segmentResults);
                            }

                            realizationResults.ScenarioResults.UndergroundResults = undergroundSegmentResults.SumResults();
                        }
                        else
                        {
                            realizationResults.ScenarioResults.UndergroundResults = null;
                        }

                        //RUN EVENT-SPECIFIC MODELS
                        realizationResults.EventResults = _eventModelRunner.RunEventModel(
                            realizationResults.ScenarioResults.IndoorResults,
                            realizationResults.ScenarioResults.OutdoorResults,
                            realizationResults.ScenarioResults.UndergroundResults,
                            Running.ModifyParameter);

                        //Store results for realization
                        results.Add(realizationResults);

                        //Update job progress
                        _progressUpdater.UpdateJobProgress(Running, Running.Progress + progressIncrement);

                        //Cancel job if requested
                        cancelCancellationTokenSource.Token.ThrowIfCancellationRequested();
                    }

                    //Store results of model in job
                    Running.Results = results;

                    await _statusUpdater.UpdateJobStatus(Running, JobStatus.Completed);
                    _progressUpdater.UpdateJobProgress(Running, 100.0);
                }
                catch (OperationCanceledException e)
                {
                    // Job was cancelled
                    Console.WriteLine(e);
                    await _statusUpdater.UpdateJobStatus(Running, JobStatus.Cancelled);
                }
                catch (Exception e)
                {
                    Console.Error.WriteLine(e);
                    // TODO display error on front end?
                    await _statusUpdater.UpdateJobStatus(Running, JobStatus.Error);
                }
                finally
                {
                    cancelCancellationTokenSource.Dispose();
                }

                Finished.Add(Running);
                Running = null;
            });

        /// <summary>
        /// <inheritdoc cref="IJobManager.GetStatus(Guid)"/>
        /// </summary>
        public JobStatus GetStatus(Guid id) => GetJob(id)?.Status ?? JobStatus.Unknown;

        /// <summary>
        /// <inheritdoc cref="IJobManager.GetJob"/>
        /// </summary>
        public JobRequest GetJob(Guid id) => AllJobs.FirstOrDefault(request => request.Id == id);

        /// <summary>
        /// <inheritdoc cref="IJobManager.CancelJob"/>
        /// </summary>
        public void CancelJob()
        {
            if (Running != null && !cancelCancellationTokenSource.IsCancellationRequested)
            {
                cancelCancellationTokenSource.Cancel();
            }
        }

        //public bool UpdateJob(JobRequest newJob)
        //{
        //    var old = AllJobs.FirstOrDefault(request => request.Id == newJob.Id);
        //    if (old == null)
        //    {
        //        return false;
        //    }
        //    old = newJob;
        //    return true;
        //}
    }
}