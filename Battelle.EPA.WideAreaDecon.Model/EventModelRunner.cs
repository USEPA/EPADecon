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
            var phaseOnsiteDays = new Dictionary<PhaseCategory, double>
            {
                { PhaseCategory.CharacterizationSampling, _outdoorResults.totalCharacterizationSamplingResults.onSiteDays + _undergroundResults.totalCharacterizationSamplingResults.onSiteDays },
                { PhaseCategory.SourceReduction, _outdoorResults.sourceReductionResults.onSiteDays + _undergroundResults.sourceReductionResults.onSiteDays },
                { PhaseCategory.Decontamination, _outdoorResults.decontaminationResults.onSiteDays + _undergroundResults.decontaminationResults.onSiteDays },
                { PhaseCategory.IncidentCommand, _outdoorResults.incidentCommandResults.onSiteDays + _undergroundResults.incidentCommandResults.onSiteDays }
            };

            foreach (var building in _indoorResults.Keys.ToList())
            {
                phaseOnsiteDays[PhaseCategory.CharacterizationSampling] += _indoorResults[building].totalCharacterizationSamplingResults.onSiteDays;
                phaseOnsiteDays[PhaseCategory.SourceReduction] += _indoorResults[building].sourceReductionResults.onSiteDays;
                phaseOnsiteDays[PhaseCategory.Decontamination] += _indoorResults[building].decontaminationResults.onSiteDays;
                phaseOnsiteDays[PhaseCategory.IncidentCommand] += _indoorResults[building].incidentCommandResults.onSiteDays;
            }

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

            return resultsCalculator.CalculateEventResults(calculatorManager, _indoorResults, _outdoorResults, _undergroundResults);
        }
    }
}
