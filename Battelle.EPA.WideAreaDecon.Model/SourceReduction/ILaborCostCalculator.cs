namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double PersonnelRoundTripDays, double SAToBeSourceReduced, double CostPerTonRemoved);
        public double CalculateLaborDays(double PersonnelRoundTripDays, double SAToBeSourceReduced);
    }
}