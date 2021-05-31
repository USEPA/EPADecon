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
            var totalOnSiteDays = 65.7459835772646;

            Assert.AreEqual(34500.00,
                Calculator.CalculateTransportationCost(personnelAvailableByType, roundtripDays, costPerRoundTripTicket), 1e-6, "Incorrect transportation cost calculated");

            Assert.AreEqual(1134118.21670781,
                Calculator.CalculatePerDiem(personnelAvailableByType, totalOnSiteDays), 1e-6, "Incorrect per diem cost calculated");
        }
    }
}