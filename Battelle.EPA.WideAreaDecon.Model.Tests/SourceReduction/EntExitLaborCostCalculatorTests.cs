using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class EntExitLaborCostCalculatorTests
    {
        private EntExitLaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new EntExitLaborCostCalculator(5.0, { 2.0, 4.0, 6.0, 2.0 }, { 8.0, 9.0,10.0,8.0}, 2.0, 0.25, 1.0, 1.5);
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((2031.25), Calculator.CalculateEntExitLaborCost(100.0), 1e-6, "Incorrect cost calculated");
        }
    }
}