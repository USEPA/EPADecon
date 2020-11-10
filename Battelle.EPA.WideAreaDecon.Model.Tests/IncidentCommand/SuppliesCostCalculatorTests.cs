using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    internal class MockLaborCostCalculator : ILaborCostCalculator
    {
        public double CalculateOnSiteDays(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted)
        {
            return 29.0934736019902;
        }

        public double CalculateLaborCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted)
        {
            return 345759.426454131;
        }
    }

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
                suppliesCostPerDay,
                new MockLaborCostCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var _numberTeams = 4.0;
            var saToBeSourceReduced = 8000.0;
            var roundtripDays = 2.0;
            var _surfaceAreaToBeWiped = 500.0;
            var _surfaceAreaToBeHepa = 500.0;
            var numberLabs = 3;
            var sampleTimeTransmitted = 24.0;

            Assert.AreEqual(36148.69913742,
                Calculator.CalculateSuppliesCost(_numberTeams, saToBeSourceReduced, roundtripDays, _surfaceAreaToBeHepa,
                    _surfaceAreaToBeWiped, numberLabs, sampleTimeTransmitted),
                1e-6, "Incorrect cost calculated");
        }
    }
}