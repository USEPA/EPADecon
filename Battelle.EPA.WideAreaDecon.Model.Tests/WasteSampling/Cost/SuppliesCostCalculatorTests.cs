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
            var surfaceAreaPerWasteSample = 4.64515;
            var volumePerWasteSample = 10.0;
            var solidWastePerSurfaceArea = 2.0;
            var liquidWastePerSurfaceArea = 5.0;
            var costPerWasteSample = 19.0;

            Calculator = new SuppliesCostCalculator(
                surfaceAreaPerWasteSample,
                volumePerWasteSample,
                solidWastePerSurfaceArea,
                liquidWastePerSurfaceArea,
                costPerWasteSample
            );
        }

        [Test]
        public void CalculateCost()
        {
            var fractionSampled = 0.3;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(18346.8884212566, Calculator.CalculateSuppliesCost(fractionSampled, areaContaminated), 1e-6,
                "Incorrect supplies cost calculated");
        }
    }
}