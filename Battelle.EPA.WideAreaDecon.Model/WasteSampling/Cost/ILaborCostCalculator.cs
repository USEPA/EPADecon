using System;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double onsiteDays, double numberTeams);
    }
}