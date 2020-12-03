using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.Model.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model
{
    /// <summary>
    /// Sets up and manages scenario execution
    /// </summary>
    class ScenarioManager
    {
        private readonly Dictionary<string, IParameter> _scenarioDefinition;
        private readonly Dictionary<string, IParameter> _scenarioParameters;
        private readonly Services.ICharacterizationSamplingCalculatorFactory _characterizationSamplingFactory;
        public ScenarioManager(Dictionary<string, IParameter> scenarioDefinition, Dictionary<string, IParameter> scenarioParameters)
        {
            _scenarioDefinition = scenarioDefinition;
            _scenarioParameters = scenarioParameters;
            _characterizationSamplingFactory = new Services.ParameterArrayCharacterizationSamplingCalculatorFactory(_scenarioParameters);
        }


        public object ExecuteScenario()
        {
            // Take scenario definition and construct scenario

            // Take scenario parameters and construct calculators

            var cs = _characterizationSamplingFactory.GetCalculator();


            // Hook up and execute calculator to create results

            // Return results

            throw new NotImplementedException();
        }
    }
}
