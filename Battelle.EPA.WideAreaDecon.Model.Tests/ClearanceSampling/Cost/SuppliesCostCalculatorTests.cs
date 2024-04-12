using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Cost;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.ClearanceSampling.Cost
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepaSock = 9.2903;
            var hepaSocksPerHrPerTeam = 6.0;
            var costPerWipe = 19.0;
            var costPerVacuum = 29.0;
            var hepaRentalCostPerDay = 15.0;

            Calculator = new SuppliesCostCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepaSock,
                hepaSocksPerHrPerTeam,
                costPerWipe,
                costPerVacuum,
                hepaRentalCostPerDay
            );
        }

        [Test]
        public void CalculateCost()
        {
            var numberTeams = 4.0;
            var fractionSampledWipe = 1.0 / 6.0;
            var fractionSampledHepa = 1.0 / 6.0;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            var costAndResourceResults = Calculator.CalculateSuppliesCost(numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated);

            Assert.AreEqual(10826.1439350721, costAndResourceResults.SamplingCost, 1e-6, "Incorrect supplies cost calculated");

            Assert.AreEqual(162, costAndResourceResults.TotalVacuumSamples, 1e-6, "Incorrect number of vacuum samples calculated");
            Assert.AreEqual(323, costAndResourceResults.TotalWipeSamples, 1e-6, "Incorrect number of wipe samples calculated");
        }
    }
}