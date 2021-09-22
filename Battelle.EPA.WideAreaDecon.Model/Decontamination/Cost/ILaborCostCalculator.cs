using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double onsiteDays, double numberTeams);
    }
}