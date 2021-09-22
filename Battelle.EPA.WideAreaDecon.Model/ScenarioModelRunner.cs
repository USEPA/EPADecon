using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class ScenarioModelRunner
    {
        private readonly ParameterList _scenarioParameters;
        private readonly DecontaminationElement _element;
        private readonly Dictionary<SurfaceType, ContaminationInformation> _buildingDetails;

        public ScenarioModelRunner(
            ParameterList scenarioParameters,
            DecontaminationElement element,
            Dictionary<SurfaceType, ContaminationInformation> buildingDetails)
        {
            _scenarioParameters = scenarioParameters;
            _element = element;
            _buildingDetails = buildingDetails;
        }

        public ScenarioRealizationResults RunScenarioModel()
        {
            var parameterManager = new ScenarioParameterManager(
                _scenarioParameters.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Source Reduction").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Decontamination").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Clearance Sampling").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Waste Sampling").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Efficacy").Parameters,
                _scenarioParameters.Filters.First(f => f.Name == "Incident Command").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Cost per Parameter").Filters,
                _scenarioParameters.Filters.First(f => f.Name == "Decontamination Treatment Methods by Surface").Parameters);

            var calculatorManager = parameterManager.RedrawParameters(_buildingDetails, _element);

            var resultsCalculator = parameterManager.SetDrawnParameters(calculatorManager);

            return resultsCalculator.CalculateScenarioResults(parameterManager, calculatorManager, _buildingDetails, _element);
        }
    }
}
