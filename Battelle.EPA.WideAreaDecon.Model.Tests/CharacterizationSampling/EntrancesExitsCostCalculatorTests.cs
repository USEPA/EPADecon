using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class EntrancesExitsCostCalculatorTests
    {
        private EntrancesExitsCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double[] arr1 = { 2.0, 4.0, 6.0, 2.0 };
            double[] arr2 = { 1.0, 1.5, 2.0, 2.5 };
            Calculator = new EntrancesExitsCostCalculator(5.0, arr1, 5.0, 10.0, arr2);
        }

        [Test]
        public void CalculateCost()
        {
            double[] arr1 = { 2.0, 4.0, 6.0, 2.0 };
            Assert.AreEqual((1564), Calculator.CalculateEntrancesExitsCost(arr1), 1e-6, "Incorrect labor cost calculated");
        }
    }
}