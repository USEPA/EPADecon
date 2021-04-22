using System.Collections.Generic;
using System;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class AnalysisQuantCostCalculatorTests
    {
        private AnalysisQuantityCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepa = 9.2903;
            var costPerWipeAnalysis = 520.0;
            var costPerHepaAnalysis = 290.0;
            Calculator = new AnalysisQuantityCostCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                costPerWipeAnalysis,
                costPerHepaAnalysis
            );
        }

        [Test]
        public void CalculateCost()
        {
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }
            
            Assert.AreEqual(338525.128359687, Calculator.CalculateAnalysisQuantityCost(fractionSampledWipe, fractionSampledHepa, areaContaminated), 1e-2, "Incorrect cost calculated");
        }
    }
}