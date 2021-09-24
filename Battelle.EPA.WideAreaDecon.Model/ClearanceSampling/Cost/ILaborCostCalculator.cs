using System;

namespace Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Cost
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double onsiteDays, double numberTeams);
    }
}