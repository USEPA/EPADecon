using System;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public interface IOnsiteDaysCalculator
    {
        public double CalculateOnsiteDays(double workDays);
    }
}
