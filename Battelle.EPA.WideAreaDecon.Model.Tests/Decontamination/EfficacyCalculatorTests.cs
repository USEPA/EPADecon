using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{

    public class EfficacyCalculatorTests
    {
        private EfficacyCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var efficacyValues = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.IndoorInterior, 0.2},
                { SurfaceType.IndoorExterior, 0.2},
                { SurfaceType.IndoorCeilings, 0.25},
                { SurfaceType.IndoorCarpet, 0.35},
                { SurfaceType.IndoorNonCarpet, 0.3},
                { SurfaceType.Hvac, 0.15 },
                { SurfaceType.IndoorMisc, 0.05},
                { SurfaceType.OutdoorExterior, 0.45},
                { SurfaceType.Pavement, 0.2},
                { SurfaceType.Roofing, 0.1},
                { SurfaceType.Water, 0.15},
                { SurfaceType.Soil, 0.25},
                { SurfaceType.OutdoorMisc, 0.2},
                { SurfaceType.UndergroundInterior, 0.05},
                { SurfaceType.UndergroundCeilings, 0.25},
                { SurfaceType.UndergroundCarpet, 0.3},
                { SurfaceType.UndergroundNonCarpet, 0.25},
                { SurfaceType.UndergroundMisc, 0.15}
            };
            Calculator = new EfficacyCalculator(
                efficacyValues
            );
        }

        [Test]
        public void CalculateCost()
        {
            double[] initialSporeLoading = { 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 };
            double[] newSporeLoading = { 0.8, 0.8, 0.75, 0.65, 0.7, 0.85, 0.95, 0.55, 0.8, 0.9, 0.85, 0.75, 0.8, 0.95, 0.75, 0.7, 0.75, 0.85 };

            Assert.AreEqual(newSporeLoading.Sum(), Calculator.CalculateEfficacy(initialSporeLoading).Sum(), 1e-6, "Incorrect cost calculated");

        }
    }
}