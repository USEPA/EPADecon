using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class ExampleCostCalculatorTests
    {
        private ExampleCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            Calculator = new ExampleCostCalculator(10.0, 20.0);
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual(30.0, Calculator.CalculateCost(1), 1e-6, "Incorrect cost calculated");
        }
    }
}