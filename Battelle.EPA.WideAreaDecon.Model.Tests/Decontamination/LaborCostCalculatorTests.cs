using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double[] arr1 = { 2.0, 4.0, 6.0, 2.0 };
            double[] arr2 = { 2.0, 5.0, 3.0, 4.0 };
            double[] arr3 = { 1.0, 0.5, 0.25, 0.25 };
            Calculator = new LaborCostCalculator(5.0, arr1, arr2, 10.0, arr3);
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((34000.0), Calculator.CalculateLaborCost(5.0), 1e-6, "Incorrect cost calculated");
        }
    }
}