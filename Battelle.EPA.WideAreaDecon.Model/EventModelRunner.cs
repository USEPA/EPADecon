using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class EventModelRunner
    {
        private readonly ParameterList _scenarioParameters;
        private readonly Dictionary<BuildingCategory, ScenarioRealizationResults> _indoorResults;
        private readonly ScenarioRealizationResults _outdoorResults;
        private readonly ScenarioRealizationResults _undergroundResults;

        public EventModelRunner(
            ParameterList scenarioParmeters,
            Dictionary<BuildingCategory, ScenarioRealizationResults> indoorResults,
            ScenarioRealizationResults outdoorResults,
            ScenarioRealizationResults undergroundResults)
        {
            _scenarioParameters = scenarioParmeters;
            _indoorResults = indoorResults;
            _outdoorResults = outdoorResults;
            _undergroundResults = undergroundResults;
        }

        public EventResults RunEventModel()
        {
            var scenarioResults = SumScenarioResults();

            var phaseOnsiteDays = new Dictionary<PhaseCategory, double>
            {
                { PhaseCategory.CharacterizationSampling, scenarioResults.totalCharacterizationSamplingResults.onSiteDays },
                { PhaseCategory.SourceReduction, scenarioResults.sourceReductionResults.onSiteDays },
                { PhaseCategory.Decontamination, scenarioResults.decontaminationResults.onSiteDays },
                { PhaseCategory.IncidentCommand, scenarioResults.incidentCommandResults.onSiteDays }
            };

            var parameterManager = new EventParameterManager(
                _scenarioParameters.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Source Reduction").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Decontamination").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Other").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Incident Command").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Cost per Parameter").Filters,
                phaseOnsiteDays);

            var calculatorManager = parameterManager.RedrawParameters();

            var resultsCalculator = parameterManager.SetDrawnParameters(calculatorManager);

            return resultsCalculator.CalculateEventResults(calculatorManager, scenarioResults);
        }

        public ScenarioRealizationResults SumScenarioResults()
        {
            var generic = new GenericPhaseResults()
            {
                phaseCost = 0.0,
                workDays = 0.0,
                onSiteDays = 0.0
            };

            var icResults = new IncidentCommandResults()
            {
                phaseCost = 0.0,
                onSiteDays = 0.0
            };

            var general = new GeneralResults()
            {
                areaContaminated = 0.0,
                decontaminationRounds = 0,
                totalCost = 0.0
            };

            var realizationResults = new ScenarioRealizationResults()
            {
                preDeconCharacterizationSamplingResults = generic,
                postDeconCharacterizationSamplingResults = generic,
                totalCharacterizationSamplingResults = generic,
                sourceReductionResults = generic,
                decontaminationResults = generic,
                incidentCommandResults = icResults,
                generalResults = general
            };

            var scenarioRunFlag = new Dictionary<DecontaminationPhase, bool>
            {
                { DecontaminationPhase.Indoor, true },
                { DecontaminationPhase.Outdoor, true },
                { DecontaminationPhase.Underground, true }
            };

            if (_indoorResults.Count > 0)
            {
                foreach (var building in _indoorResults.Values.ToList())
                {
                    realizationResults = AddResults(realizationResults, building);
                }

            } else
            {
                scenarioRunFlag[DecontaminationPhase.Indoor] = false;
            }

            try
            {
                realizationResults = AddResults(realizationResults, _outdoorResults);
            } catch (System.NullReferenceException) 
            {
                scenarioRunFlag[DecontaminationPhase.Outdoor] = false;
            }

            try
            {
                realizationResults = AddResults(realizationResults, _undergroundResults);
            } catch (System.NullReferenceException) 
            {
                scenarioRunFlag[DecontaminationPhase.Underground] = false;
            }

            if (scenarioRunFlag.All(x => x.Value == false))
            {
                throw new ApplicationException("An indoor, outdoor, or underground scenario must be run");
            }

            return realizationResults;
        }

        private ScenarioRealizationResults AddResults(ScenarioRealizationResults summedResults, ScenarioRealizationResults originalResults)
        {
            summedResults.preDeconCharacterizationSamplingResults.workDays += originalResults.preDeconCharacterizationSamplingResults.workDays;
            summedResults.preDeconCharacterizationSamplingResults.onSiteDays += originalResults.preDeconCharacterizationSamplingResults.onSiteDays;
            summedResults.preDeconCharacterizationSamplingResults.phaseCost += originalResults.preDeconCharacterizationSamplingResults.phaseCost;

            summedResults.postDeconCharacterizationSamplingResults.workDays += originalResults.postDeconCharacterizationSamplingResults.workDays;
            summedResults.postDeconCharacterizationSamplingResults.onSiteDays += originalResults.postDeconCharacterizationSamplingResults.onSiteDays;
            summedResults.postDeconCharacterizationSamplingResults.phaseCost += originalResults.postDeconCharacterizationSamplingResults.phaseCost;

            summedResults.totalCharacterizationSamplingResults.workDays += originalResults.totalCharacterizationSamplingResults.workDays;
            summedResults.totalCharacterizationSamplingResults.onSiteDays += originalResults.totalCharacterizationSamplingResults.onSiteDays;
            summedResults.totalCharacterizationSamplingResults.phaseCost += originalResults.totalCharacterizationSamplingResults.phaseCost;

            summedResults.sourceReductionResults.workDays += originalResults.sourceReductionResults.workDays;
            summedResults.sourceReductionResults.onSiteDays += originalResults.sourceReductionResults.onSiteDays;
            summedResults.sourceReductionResults.phaseCost += originalResults.sourceReductionResults.phaseCost;

            summedResults.decontaminationResults.workDays += originalResults.decontaminationResults.workDays;
            summedResults.decontaminationResults.onSiteDays += originalResults.decontaminationResults.onSiteDays;
            summedResults.decontaminationResults.phaseCost += originalResults.decontaminationResults.phaseCost;

            summedResults.incidentCommandResults.onSiteDays += originalResults.incidentCommandResults.onSiteDays;
            summedResults.incidentCommandResults.phaseCost += originalResults.incidentCommandResults.phaseCost;

            summedResults.generalResults.totalCost += originalResults.generalResults.totalCost;
            summedResults.generalResults.areaContaminated += originalResults.generalResults.areaContaminated;
            summedResults.generalResults.decontaminationRounds += originalResults.generalResults.decontaminationRounds;

            return summedResults;
        }
    }
}
