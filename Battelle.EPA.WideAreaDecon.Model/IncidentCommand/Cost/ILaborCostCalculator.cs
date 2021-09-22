using System;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double onSiteDays);
    }
}