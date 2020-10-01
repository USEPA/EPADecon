using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class EntranceExitCostCalculatorTests
    {
        private EntranceExitCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double[] arr1 = { 2.0, 4.0, 6.0, 2.0 };
            double[] arr2 = { 2.0, 5.0, 3.0, 4.0 };
            Calculator = new EntranceExitCostCalculator(5.0, arr1, 2.0, 5.0, arr2);
        }

        [Test]
        public void CalculateCost()
        {
            double[] arr1 = { 1.0, 2.0, 4.0, 2.0 };
            Assert.AreEqual((13600), Calculator.CalculateEntranceExitCost(arr1), 1e-6, "Incorrect cost calculated");
        }
    }
}