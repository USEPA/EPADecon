using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
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
            var sampleTimeTransmitted =24.0;

            Assert.AreEqual(22886.2482445587, Calculator.CalculateSuppliesCost( _numberTeams,  saToBeSourceReduced,  roundtripDays,_surfaceAreaToBeHepa, _surfaceAreaToBeWiped, numberLabs, sampleTimeTransmitted),
                1e-6, "Incorrect cost calculated");
        }

        private class MockLaborCostCalculator : ILaborCostCalculator
        {
            public double CalculateOnSiteDays(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _surfaceAreaToBeHepa,double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted)
            {
                return 18.4194860407136;
            }

            public double CalculateLaborCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _surfaceAreaToBeHepa,double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted)
            {
                return 227064.684772735;
            }
        }
    }
}