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
            Calculator = new EntranceExitCostCalculator(5.0, { 2.0, 4.0, 6.0, 2.0 }, 2.0, 5.0, { 2.0, 5.0, 3.0, 4.0});
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((13600), Calculator.CalculateEntranceExitCost({ 1.0, 2.0, 4.0, 2.0}), 1e-6, "Incorrect cost calculated");
        }
    }
}