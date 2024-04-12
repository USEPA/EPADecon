using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Time
{
    public interface IOnsiteDaysCalculator
    {
        public double CalculateOnsiteDays(double workDays);
    }
}
