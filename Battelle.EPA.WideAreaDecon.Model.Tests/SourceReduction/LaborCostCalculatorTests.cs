using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new LaborCostCalculator(5.0, 10.0, { 2.0, 4.0, 6.0, 2.0 }, {8.0, 9.0,10.0,8.0}, 0.25);
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((81500), Calculator.CalculateLaborCost(5.0, 100.0, 10.0), 1e-6, "Incorrect labor cost calculated");
        }
    }
}