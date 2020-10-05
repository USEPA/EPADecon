namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ILaborCostCalculator
    {
        public double CalculateOnSiteDays(double SAToBeSourceReduced, double PersonnelRoundTripDays);
        public double CalculateLaborCost(double SAToBeSourceReduced, double PersonnelRoundTripDays);
    }
}