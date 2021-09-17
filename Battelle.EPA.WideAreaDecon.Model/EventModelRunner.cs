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

            var elementOnsiteDays = new Dictionary<ElementCategory, double>
            {
                { ElementCategory.CharacterizationSampling, scenarioResults.characterizationSamplingResults.onSiteDays },
                { ElementCategory.SourceReduction, scenarioResults.sourceReductionResults.onSiteDays },
                { ElementCategory.Decontamination, scenarioResults.decontaminationResults.onSiteDays },
                { ElementCategory.WasteSampling, scenarioResults.wasteSamplingResults.onSiteDays },
                { ElementCategory.IncidentCommand, scenarioResults.incidentCommandResults.onSiteDays }
            };

            var parameterManager = new EventParameterManager(
                _scenarioParameters.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Source Reduction").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Decontamination").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Waste Sampling").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Other").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Incident Command").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Cost per Parameter").Filters,
                elementOnsiteDays);

            var calculatorManager = parameterManager.RedrawParameters();

            var resultsCalculator = parameterManager.SetDrawnParameters(calculatorManager);

            return resultsCalculator.CalculateEventResults(calculatorManager, scenarioResults);
        }

        public ScenarioRealizationResults SumScenarioResults()
        {
            var realizationResults = new ScenarioRealizationResults()
            {
                characterizationSamplingResults = new GenericElementResults() { elementCost = 0.0, workDays = 0.0, onSiteDays = 0.0 },
                sourceReductionResults = new GenericElementResults() { elementCost = 0.0, workDays = 0.0, onSiteDays = 0.0 },
                decontaminationResults = new GenericElementResults() { elementCost = 0.0, workDays = 0.0, onSiteDays = 0.0 },
                wasteSamplingResults = new GenericElementResults() { elementCost = 0.0, workDays = 0.0, onSiteDays = 0.0 },
                incidentCommandResults = new IncidentCommandResults() { elementCost = 0.0, onSiteDays = 0.0 },
                generalResults = new GeneralResults() { areaContaminated = 0.0, decontaminationRounds = 0, totalCost = 0.0 }
            };

            var scenarioRunFlag = new Dictionary<DecontaminationElement, bool>
            {
                { DecontaminationElement.Indoor, true },
                { DecontaminationElement.Outdoor, true },
                { DecontaminationElement.Underground, true }
            };

            if (_indoorResults != null)
            {
                foreach (var building in _indoorResults.Values.ToList())
                {
                    AddResults(realizationResults, building);
                }

            } else
            {
                scenarioRunFlag[DecontaminationElement.Indoor] = false;
            }

            if (_outdoorResults != null)
            {
                AddResults(realizationResults, _outdoorResults);
            } else
            {
                scenarioRunFlag[DecontaminationElement.Outdoor] = false;
            }

            if (_undergroundResults != null)
            {
                AddResults(realizationResults, _undergroundResults);
            } else
            {
                scenarioRunFlag[DecontaminationElement.Underground] = false;
            }

            if (scenarioRunFlag.All(x => x.Value == false))
            {
                throw new ApplicationException("An indoor, outdoor, or underground scenario must be run");
            }

            return realizationResults;
        }

        private void AddResults(ScenarioRealizationResults summedResults, ScenarioRealizationResults originalResults)
        {
            summedResults.characterizationSamplingResults.workDays += originalResults.characterizationSamplingResults.workDays;
            summedResults.characterizationSamplingResults.onSiteDays += originalResults.characterizationSamplingResults.onSiteDays;
            summedResults.characterizationSamplingResults.elementCost += originalResults.characterizationSamplingResults.elementCost;

            summedResults.sourceReductionResults.workDays += originalResults.sourceReductionResults.workDays;
            summedResults.sourceReductionResults.onSiteDays += originalResults.sourceReductionResults.onSiteDays;
            summedResults.sourceReductionResults.elementCost += originalResults.sourceReductionResults.elementCost;

            summedResults.decontaminationResults.workDays += originalResults.decontaminationResults.workDays;
            summedResults.decontaminationResults.onSiteDays += originalResults.decontaminationResults.onSiteDays;
            summedResults.decontaminationResults.elementCost += originalResults.decontaminationResults.elementCost;

            summedResults.wasteSamplingResults.workDays += originalResults.wasteSamplingResults.workDays;
            summedResults.wasteSamplingResults.onSiteDays += originalResults.wasteSamplingResults.onSiteDays;
            summedResults.wasteSamplingResults.elementCost += originalResults.wasteSamplingResults.elementCost;

            summedResults.incidentCommandResults.onSiteDays += originalResults.incidentCommandResults.onSiteDays;
            summedResults.incidentCommandResults.elementCost += originalResults.incidentCommandResults.elementCost;

            summedResults.generalResults.totalCost += originalResults.generalResults.totalCost;
            summedResults.generalResults.areaContaminated += originalResults.generalResults.areaContaminated;
            summedResults.generalResults.decontaminationRounds += originalResults.generalResults.decontaminationRounds;
            summedResults.generalResults.solidWasteProduced += originalResults.generalResults.solidWasteProduced;
            summedResults.generalResults.aqueousWasteProduced += originalResults.generalResults.aqueousWasteProduced;
        }
    }
}
