using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new SuppliesCostCalculator(5.0, 10.0, 15.0, 15.0, 10.0, 0.25, 0.5, 20.0, 1000.0, 1000.0);
        }

        [Test]
        public void CalculateAnalysisQuantCost()
        {
            Assert.AreEqual((185 / 3), Calculator.CalculateSuppliesCost(), 1e-6, "Incorrect supplies cost calculated");
            Assert.AreEqual((1 / 3), Calculator.CalculateWorkDays(), 1e-6, "Incorrect work days cost calculated");
        }
    }
}