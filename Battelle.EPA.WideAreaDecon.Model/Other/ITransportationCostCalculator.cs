namespace Battelle.EPA.WideAreaDecon.Model.Other
{
    public interface ITransportationCostCalculator
    {
        public double CalculateTransportationCost(double[] personnelAvailableByType, double costPerRoundTripTicket,
            double totalOnSiteDays);
    }
}