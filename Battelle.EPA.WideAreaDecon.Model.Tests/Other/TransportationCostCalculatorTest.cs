using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Other;
using TransportationCostCalculator = Battelle.EPA.WideAreaDecon.Model.Other.TransportationCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Other
{
    class TransportationCostCalculatorTest
    {
        private TransportationCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double personnelPerRentalCar = 3.0;
            double rentalCarCostPerDay = 225.0;
            double perDiemCostPerDay = 250.0;
            Calculator = new TransportationCostCalculator(
                personnelPerRentalCar,
                rentalCarCostPerDay,
                perDiemCostPerDay
                );
        }

        [Test]
        public void CalculateCost()
        {
            double[] personnelAvailableByType = { 4.0, 0.0, 15.0, 30.0, 20.0 };
            double roundtripDays = 2.0;
            double costPerRoundTripTicket = 350.0;
            double totalOnSiteDays = 5.41948604071361;

            Assert.AreEqual((35854.8715101784), Calculator.CalculateTransportationCost(personnelAvailableByType, roundtripDays, costPerRoundTripTicket, totalOnSiteDays), 1e-6, "Incorrect cost calculated");
        }
    }
}
