namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ILaborCostCalculator
    {
        public double CalculateOnSiteDays(double saToBeSourceReduced, double personnelRoundTripDays);
        public double CalculateLaborCost(double saToBeSourceReduced, double personnelRoundTripDays);
    }
}