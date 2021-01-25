using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class CalculatorCreator
    {
        private readonly Services.ICharacterizationSamplingCalculatorFactory _characterizationSamplingFactory;
        private readonly Services.ISourceReductionCalculatorFactory _sourceReductionFactory;
        private readonly Services.IDecontaminationCalculatorFactory _decontaminationFactory;
        private readonly Services.IOtherCalculatorFactory _otherFactory;
        private readonly Services.IIncidentCommandCalculatorFactory _incidentCommandFactory;

        public CalculatorCreator(
            Services.ParameterArrayCharacterizationSamplingCalculatorFactory csCalculatorFactory,
            Services.ParameterArraySourceReductionCalculatorFactory srCalculatorFactory,
            Services.ParameterArrayDecontaminationCalculatorFactory dcCalculatorFactory,
            Services.ParameterArrayOtherCalculatorFactory otCalculatorFactory,
            Services.ParameterArrayIncidentCommandCalculatorFactory icCalculatorFactory
            )
        {
            _characterizationSamplingFactory = csCalculatorFactory;
            _sourceReductionFactory = srCalculatorFactory;
            _decontaminationFactory = dcCalculatorFactory;
            _otherFactory = otCalculatorFactory;
            _incidentCommandFactory = icCalculatorFactory;
        }
    }
}
