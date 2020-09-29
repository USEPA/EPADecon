using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new SuppliesCostCalculator(4.0, 10.0, 15.0,  );
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual(30.0, Calculator.CalculateSuppliesCost(1), 1e-6, "Incorrect cost calculated");
        }
    }
}