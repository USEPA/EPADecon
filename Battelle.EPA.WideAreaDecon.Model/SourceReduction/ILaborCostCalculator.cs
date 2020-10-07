namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double personnelRoundTripDays, double saToBeSourceReduced,
            double costPerTonRemoved);

        public double CalculateLaborDays(double personnelRoundTripDays, double saToBeSourceReduced);
    }
}