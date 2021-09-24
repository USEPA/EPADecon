using System;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time
{
    public interface ILaborDaysCalculator
    {
        public double CalculateLaborDays(double numberTeams, double massToBeSourceReduced, double area);
    }
}
