using System;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time
{
    public interface IOnsiteDaysCalculator
    {
        public double CalculateOnSiteDays(double onsiteDaysCS, double onsiteDaysSR, double onsiteDaysDC);
    }
}
