using NUnit.Framework;
using System;
using System.Linq;
using AnalysisQuantCostCalculator = Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.AnalysisQuantCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class AnalysisQuantCostCalculatorTests
    {
        private AnalysisQuantCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double surfaceAreaPerWipe = 4.64515;
            double surfaceAreaPerHepa = 9.2903;
            double surfaceAreaToBeWiped = 500.0;
            double surfaceAreaToBeHepa = 500.0;
            double costPerWipeAnalysis = 520.0;
            double costPerHepaAnalysis = 290.0;
            Calculator = new AnalysisQuantCostCalculator(
                surfaceAreaPerWipe, 
                surfaceAreaPerHepa, 
                surfaceAreaToBeWiped, 
                surfaceAreaToBeHepa, 
                costPerWipeAnalysis, 
                costPerHepaAnalysis
                );
        }

        [Test]
        public void CalculateAnalysisQuantCost()
        {
            Assert.AreEqual(71580.035, Calculator.CalculateAnalysisQuantCost(), 1e-2, "Incorrect cost calculated");
        }
    }
}