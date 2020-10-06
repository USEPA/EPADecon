namespace Battelle.EPA.WideAreaDecon.Model.Other
{
    public interface ITransportationCostCalculator
    {
        public double CalculateTransportationCost(double[] PersonnelAvailableByType, double CostPerRoundTripTicket, double TotalOnSiteDays);
    }
}