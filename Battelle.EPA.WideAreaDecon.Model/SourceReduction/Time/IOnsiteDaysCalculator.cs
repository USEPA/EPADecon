using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time
{
    public interface IOnsiteDaysCalculator
    {
        public double CalculateOnsiteDays(double workDays);
    }
}
