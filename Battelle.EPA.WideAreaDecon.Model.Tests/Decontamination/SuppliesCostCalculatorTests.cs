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
            double[] arr1 = { 2.0, 5.0, 3.0, 4.0 };
            Calculator = new SuppliesCostCalculator(5.0, 7.5, 1.0, arr1);
        }

        [Test]
        public void CalculateCost()
        {
            double[] arr1 = { 0.75, 0.125, 0.125, 0.0 };
            Assert.AreEqual((82.5), Calculator.CalculateSuppliesCost(15.0, arr1, true), 1e-6, "Incorrect cost calculated(fogging)");
            Assert.AreEqual((20.0), Calculator.CalculateSuppliesCost(0.0, arr1, false), 1e-6, "Incorrect cost calculated(surface)");
        }
    }
}