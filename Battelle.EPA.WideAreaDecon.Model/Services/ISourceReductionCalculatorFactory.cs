using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    interface ISourceReductionCalculatorFactory
    {
        SourceReduction.SourceReductionCostCalculator GetCalculator();
    }
}
