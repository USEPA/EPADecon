using System;

namespace Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Cost
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double onsiteDays, double numberTeams);
    }
}