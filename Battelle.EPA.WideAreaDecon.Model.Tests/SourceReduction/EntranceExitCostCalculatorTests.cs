using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class EntranceExitCostCalculatorTests
    {
        private EntranceExitCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new EntranceExitCostCalculator(5.0, { 2.0, 4.0, 6.0, 2.0 }, 2.0, 5.0, { 2.0, 5.0, 3.0, 4.0});
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((2331.25), Calculator.CalculateEntranceExitCost(100.0, { 1.0, 2.0, 4.0, 2.0}), 1e-6, "Incorrect cost calculated");
        }
    }
}