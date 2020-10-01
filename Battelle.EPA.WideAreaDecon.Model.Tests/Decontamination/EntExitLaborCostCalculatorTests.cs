using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
	public class EntExitLaborCostCalculatorTests
	{
        private EntExitLaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double[] arr1 = { 2.0, 4.0, 6.0, 2.0 };
            double[] arr2 = { 1.0, 4.0, 3.0, 1.0 };
            double[] arr3 = { 2.0, 5.0, 3.0, 4.0 };
            Calculator = new EntExitLaborCostCalculator(5.0, arr1, 2.0, 0.25, 1.0, 1.5, arr2, arr3);
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((13300), Calculator.CalculateEntExitLaborCost(), 1e-6, "Incorrect cost calculated");
        }
    }
}
