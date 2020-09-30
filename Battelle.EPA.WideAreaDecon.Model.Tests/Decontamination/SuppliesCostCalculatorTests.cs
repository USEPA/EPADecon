using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new SuppliesCostCalculator(5.0, 7.5, 1.0, { 2.0, 5.0, 3.0, 4.0});
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((82.5), Calculator.CalculateSuppliesCost(15.0, { 0, 0, 0, 0}, true), 1e-6, "Incorrect cost calculated(fogging)");
            Assert.AreEqual((20.0), Calculator.CalculateSuppliesCost(0.0, { 0.75, 0.125, 0.125, 0.0}, false), 1e-6, "Incorrect cost calculated(surface)");
        }
    }
}