namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double SAToBeSourceReduced, double PersonnelRoundTripDays);
    }
}