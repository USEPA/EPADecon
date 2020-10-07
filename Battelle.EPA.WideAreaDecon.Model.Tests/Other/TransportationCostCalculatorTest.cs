using Battelle.EPA.WideAreaDecon.Model.Other;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Other
{
    internal class TransportationCostCalculatorTest
    {
        private TransportationCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var personnelPerRentalCar = 3.0;
            var rentalCarCostPerDay = 225.0;
            var perDiemCostPerDay = 250.0;
            Calculator = new TransportationCostCalculator(
                personnelPerRentalCar,
                rentalCarCostPerDay,
                perDiemCostPerDay
            );
        }

        [Test]
        public void CalculateCost()
        {
            double[] personnelAvailableByType = {4.0, 0.0, 15.0, 30.0, 20.0};
            var roundtripDays = 2.0;
            var costPerRoundTripTicket = 350.0;
            var totalOnSiteDays = 5.41948604071361;

            Assert.AreEqual(35854.8715101784,
                Calculator.CalculateTransportationCost(personnelAvailableByType, roundtripDays, costPerRoundTripTicket,
                    totalOnSiteDays), 1e-6, "Incorrect cost calculated");
        }
    }
}