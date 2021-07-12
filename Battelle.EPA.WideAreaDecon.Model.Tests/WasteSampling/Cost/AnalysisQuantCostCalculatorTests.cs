﻿using System.Collections.Generic;
using System;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.WasteSampling.Cost
{
    public class AnalysisQuantCostCalculatorTests
    {
        private AnalysisQuantityCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWasteSample = 4.64515;
            var volumePerWasteSample = 10.0;
            var costPerWasteSampleAnalysis = 520.0;
            var solidWastePerSurfaceArea = 2.0;
            var liquidWastePerSurfaceArea = 5.0;

            Calculator = new AnalysisQuantityCostCalculator(
                surfaceAreaPerWasteSample,
                volumePerWasteSample,
                costPerWasteSampleAnalysis,
                solidWastePerSurfaceArea,
                liquidWastePerSurfaceArea
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
            
            Assert.AreEqual(502125.367318601, Calculator.CalculateAnalysisQuantityCost(fractionSampled, areaContaminated), 1e-2, "Incorrect cost calculated");
        }
    }
}