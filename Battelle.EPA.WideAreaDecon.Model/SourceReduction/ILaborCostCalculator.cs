namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced,
            double costPerTonRemoved);

        public double CalculateLaborDays(double workDays, double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced);
    }
}