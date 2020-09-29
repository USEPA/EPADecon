using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class SuppliesCostCalculatorTests
    {
        private AnalysisQuantCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new AnalysisQuantCostCalculator(10.0, 20.0, 15.0, 5.0, 10.0, 16.0);
        }

        [Test]
        public void CalculateAnalysisQuantCost()
        {
            Assert.AreEqual(30.0, Calculator.CalculateAnalysisQuantCost(), 1e-6, "Incorrect cost calculated");
        }
    }
}