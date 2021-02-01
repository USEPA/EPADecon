using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays);
        public double CalculateLaborDays(double personnelRoundTripDays);
    }
}