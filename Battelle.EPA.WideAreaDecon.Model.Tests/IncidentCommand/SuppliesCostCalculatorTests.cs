using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    internal class MockLaborCostCalculator : ILaborCostCalculator
    {
        public double CalculateOnSiteDays(double workDaysCS, double workDaysSR, double workDaysDC, double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated, 
            int numberLabs, double sampleTimeTransmitted)
        {
            return 29.0934736019902;
        }

        public double CalculateLaborCost(double onSiteDays)
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
                suppliesCostPerDay
            );
        }

        [Test]
        public void CalculateCost()
        {
            var onSiteDays = 29.0037294602509;

            Assert.AreEqual(36037.1918618207, Calculator.CalculateSuppliesCost(onSiteDays), 1e-6, "Incorrect cost calculated");
        }
    }
}