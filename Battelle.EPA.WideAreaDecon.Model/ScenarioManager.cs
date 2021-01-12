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
        private readonly Services.ISourceReductionCalculatorFactory _sourceReductionFactory;
        private readonly Services.IDecontaminationCalculatorFactory _decontaminationFactory;
        private readonly Services.IOtherCalculatorFactory _otherFactory;
        private readonly Services.IIncidentCommandCalculatorFactory _incidentCommandFactory;
        public ScenarioManager(Dictionary<string, IParameter> scenarioDefinition, Dictionary<string, IParameter> scenarioParameters)
        {
            _scenarioDefinition = scenarioDefinition;
            _scenarioParameters = scenarioParameters;
            _characterizationSamplingFactory = new Services.ParameterArrayCharacterizationSamplingCalculatorFactory(_scenarioParameters);
            _sourceReductionFactory = new Services.ParameterArraySourceReductionCalculatorFactory(_scenarioParameters);
            _decontaminationFactory = new Services.ParameterArrayDecontaminationCalculatorFactory(_scenarioParameters);
            _otherFactory = new Services.ParameterArrayOtherCalculatorFactory(_scenarioParameters);
            _incidentCommandFactory = new Services.ParameterArrayIncidentCommandCalculatorFactory(_scenarioParameters);
        }


        public object ExecuteScenario()
        {
            // Take scenario definition and construct scenario

            // Take scenario parameters and construct calculators

            var cs = _characterizationSamplingFactory.GetCalculator();
            var sr = _sourceReductionFactory.GetCalculator();
            var dc = _decontaminationFactory.GetCalculator();
            var ot = _otherFactory.GetCalculator();
            var ic = _incidentCommandFactory.GetCalculator();


            // Hook up and execute calculator to create results



            // Return results

            throw new NotImplementedException();
        }
    }
}
