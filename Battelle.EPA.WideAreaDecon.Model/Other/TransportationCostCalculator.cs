using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Other
{
    public class TransportationCostCalculator
    {
        private readonly double _perDiemCostPerDay;
        private readonly double _personnelPerRentalCar;
        private readonly double _rentalCarCostPerDay;

        public TransportationCostCalculator(
            double personnelPerRentalCar,
            double rentalCarCostPerDay,
            double perDiemCostPerDay)
        {
            _personnelPerRentalCar = personnelPerRentalCar;
            _rentalCarCostPerDay = rentalCarCostPerDay;
            _perDiemCostPerDay = perDiemCostPerDay;
        }

        public double CalculateTransportationCost(double[] personnelAvailableByType, double personnelRoundTripDays,
            double costPerRoundTripTicket, double totalOnSiteDays)
        {
            var totalPersonnel = personnelAvailableByType.Sum();

            return totalPersonnel / _personnelPerRentalCar * _rentalCarCostPerDay * personnelRoundTripDays +
                totalPersonnel * costPerRoundTripTicket + totalOnSiteDays * _perDiemCostPerDay;
        }
    }
}