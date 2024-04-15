using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.WasteSampling.Cost
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var massPerWasteSample = 4.64515;
            var volumePerWasteSample = 10.0;
            var solidWastePerSurfaceArea = 2.0;
            var liquidWastePerSurfaceArea = 5.0;
            var costPerWasteSample = 19.0;

            Calculator = new SuppliesCostCalculator(
                massPerWasteSample,
                volumePerWasteSample,
                solidWastePerSurfaceArea,
                liquidWastePerSurfaceArea,
                costPerWasteSample
            );
        }

        [Test]
        public void CalculateCost()
        {
            var deconTreatments = 4;
            var fractionSampled = 0.3;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            };

            var costAndResourceResults = Calculator.CalculateSuppliesCost(deconTreatments, fractionSampled, areaContaminated);

            Assert.AreEqual(95475.1073700526, costAndResourceResults.WasteSamplingCost, 1e-6, "Incorrect cost calculated");

            Assert.AreEqual(2700, costAndResourceResults.TotalAqueousWasteSamples, 1e-6, "Incorrect number of liquid waste samples calculated");
            Assert.AreEqual(2326, costAndResourceResults.TotalSolidWasteSamples, 1e-6, "Incorrect number of solid waste samples calculated");
        }
    }
}