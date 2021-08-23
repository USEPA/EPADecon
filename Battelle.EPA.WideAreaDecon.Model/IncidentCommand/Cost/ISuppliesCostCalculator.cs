using System;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double onSiteDays);
    }
}