using Battelle.EPA.WideAreaDecon.Model.Other;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

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
            var personnelAvailableByType = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 4.0 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 15.0 },
                { PersonnelLevel.PL3, 30.0 },
                { PersonnelLevel.PL4, 20.0 }
            };
            var roundtripDays = 2.0;
            var costPerRoundTripTicket = 350.0;
            var totalOnSiteDays = 71.6424319256773;

            //Assert.AreEqual(1270331.95071793,
            //    Calculator.CalculateTransportationCost(personnelAvailableByType, roundtripDays, costPerRoundTripTicket,
            //        totalOnSiteDays), 1e-6, "Incorrect cost calculated");
        }
    }
}