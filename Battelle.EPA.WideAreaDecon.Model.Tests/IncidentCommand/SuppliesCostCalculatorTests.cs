﻿using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using NUnit.Framework;
using SuppliesCostCalculator = Battelle.EPA.WideAreaDecon.Model.IncidentCommand.SuppliesCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    public class SuppliesCostCalculatorTests
    {
        class MockLaborCostCalculator : ILaborCostCalculator
        {
            public double CalculateOnSiteDays(double saToBeSourceReduced, double personnelRoundTripDays) => 18.4194860407136;
            
            public double CalculateLaborCost(double saToBeSourceReduced, double personnelRoundTripDays) => 227064.684772735;
        }
        private SuppliesCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double equipmentRentalCostPerDay = 235.42;
            double suppliesCostPerDay = 1007.082;
            Calculator = new SuppliesCostCalculator(
                equipmentRentalCostPerDay,
                suppliesCostPerDay,
                new MockLaborCostCalculator()
                );
        }

        [Test]
        public void CalculateCost()
        {
            double saToBeSourceReduced = 8000.0;
            double roundtripDays = 2.0;

            Assert.AreEqual((22886.2482445587), Calculator.CalculateSuppliesCost(saToBeSourceReduced, roundtripDays), 1e-6, "Incorrect cost calculated");
        }
    }
}