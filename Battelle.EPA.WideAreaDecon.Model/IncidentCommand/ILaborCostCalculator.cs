namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ILaborCostCalculator
    {
        public double CalculateOnSiteDays(double _numberTeams, double saToBeSourceReduced, double personnelRoundTripDays, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);
        public double CalculateLaborCost(double _numberDays, double saToBeSourceReduced, double personnelRoundTripDays, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);
    }
}