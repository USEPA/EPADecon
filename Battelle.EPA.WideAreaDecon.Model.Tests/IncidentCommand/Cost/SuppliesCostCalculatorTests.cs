using System;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand.Cost
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var equipmentRentalCostPerDay = 235.42;
            var suppliesCostPerDay = 1007.082;

            Calculator = new SuppliesCostCalculator(
                equipmentRentalCostPerDay,
                suppliesCostPerDay
            );
        }

        [Test]
        public void CalculateCost()
        {
            var onSiteDays = 71.6424319256773;

            Assert.AreEqual(89015.8649525179, Calculator.CalculateSuppliesCost(onSiteDays), 1e-6, "Incorrect cost calculated");
        }
    }
}