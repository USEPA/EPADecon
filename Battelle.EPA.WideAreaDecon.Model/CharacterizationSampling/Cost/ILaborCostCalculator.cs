using System;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Cost
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double onsiteDays, double numberTeams);
    }
}