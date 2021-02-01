using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
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
            var surfaceAreaToBeWiped = 500.0;
            var surfaceAreaToBeHepa = 500.0;
            
            //Assert.AreEqual(71580.035, Calculator.CalculateAnalysisQuantityCost(surfaceAreaToBeWiped, surfaceAreaToBeHepa ), 1e-2, "Incorrect cost calculated");
        }
    }
}