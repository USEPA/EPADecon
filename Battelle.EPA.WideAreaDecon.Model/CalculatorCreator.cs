using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class CalculatorCreator
    {
        public Services.ICharacterizationSamplingCalculatorFactory _characterizationSamplingFactory { get; set; }
        public Services.ISourceReductionCalculatorFactory _sourceReductionFactory { get; set; }
        public Services.IDecontaminationCalculatorFactory _decontaminationFactory { get; set; }
        public Services.IIncidentCommandCalculatorFactory _incidentCommandFactory { get; set; }
        public Services.IOtherCalculatorFactory _otherFactory { get; set; }

        public ResultsCalculator GetCalculators()
        {
            return new ResultsCalculator()
            {
                _characterizationSamplingCostCalculator = _characterizationSamplingFactory.GetCalculator(),
                _sourceReductionCostCalculator = _sourceReductionFactory.GetCalculator(),
                _decontaminationCostCalculator = _decontaminationFactory.GetCalculator(),
                _incidentCommandCostCalculator = _incidentCommandFactory.GetCalculator()
            };
        }
    }
}
