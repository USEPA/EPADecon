using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class CalculatorManager
    {
        private readonly CharacterizationSamplingParameters _characterizationSamplingParameters;
        private readonly SourceReductionParameters _sourceReductionParameters;
        private readonly DecontaminationParameters _decontaminationParameters;
        private readonly IncidentCommandParameters _incidentCommandParameters;
        private readonly OtherParameters _otherParameters;
        private readonly CostParameters _costParameters;

        public CalculatorManager(
            CharacterizationSamplingParameters characterizationSamplingParameters,
            SourceReductionParameters sourceReductionParameters,
            DecontaminationParameters decontaminationParameters,
            IncidentCommandParameters incidentCommandParameters,
            OtherParameters otherParameters,
            CostParameters costParameters)
        {
            _characterizationSamplingParameters = characterizationSamplingParameters;
            _sourceReductionParameters = sourceReductionParameters;
            _decontaminationParameters = decontaminationParameters;
            _incidentCommandParameters = incidentCommandParameters;
            _otherParameters = otherParameters;
            _costParameters = costParameters;
        }

        public CalculatorCreator CreateCalculatorFactories()
        {
            var csCalculatorFactory = new ParameterArrayCharacterizationSamplingCalculatorFactory(
                _characterizationSamplingParameters,
                _costParameters);

            var srCalculatorFactory = new ParameterArraySourceReductionCalculatorFactory(
                _sourceReductionParameters,
                _costParameters);

            var dcCalculatorFactory = new ParameterArrayDecontaminationCalculatorFactory(
                _decontaminationParameters,
                _costParameters);

            var otCalculatorFactory = new ParameterArrayOtherCalculatorFactory(
                _otherParameters,
                _costParameters);

            var icCalculatorFactory = new ParameterArrayIncidentCommandCalculatorFactory(
                _characterizationSamplingParameters,
                _sourceReductionParameters,
                _decontaminationParameters,
                _otherParameters,
                _incidentCommandParameters,
                _costParameters,
                csCalculatorFactory,
                srCalculatorFactory,
                dcCalculatorFactory);

            return new CalculatorCreator(
                csCalculatorFactory,
                srCalculatorFactory,
                dcCalculatorFactory,
                otCalculatorFactory,
                icCalculatorFactory);
        }
    }
}
