using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Interface;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class ScenarioModelRunner : IScenarioModelRunner
    {
        private readonly IResultsCalculator _resultsCalculator;
        private readonly ICalculatorManager _calculatorManager;

        public ScenarioModelRunner(
            IResultsCalculator resultsCalculator,
            ICalculatorManager calculatorManager)
        {
            _resultsCalculator = resultsCalculator;
            _calculatorManager = calculatorManager;
        }

        public Dictionary<BuildingCategory, ScenarioRealizationResults> RunScenarioModel(
            ParameterList scenarioParameters,
            DecontaminationElement element,
            Dictionary<BuildingCategory, Dictionary<SurfaceType, ContaminationInformation>> contaminationAreaByBuildingCategory)
        {
            var parameterManager = new ScenarioParameterManager(
                _calculatorManager,
                scenarioParameters);

            return _resultsCalculator.CalculateScenarioResults(
                contaminationAreaByBuildingCategory,
                parameterManager,
                element);
        }

        public ScenarioRealizationResults RunScenarioModel(
            ParameterList scenarioParameters,
            DecontaminationElement element,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var parameterManager = new ScenarioParameterManager(
                _calculatorManager,
                scenarioParameters);

            return _resultsCalculator.CalculateScenarioResults(
                areaContaminated,
                parameterManager,
                element);
        }
    }
}
