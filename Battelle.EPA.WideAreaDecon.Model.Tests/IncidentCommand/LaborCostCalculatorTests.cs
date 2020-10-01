using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new LaborCostCalculator({ 2.0, 4.0, 6.0, 2.0 }, 10.0, { 2.0, 5.0, 3.0, 4.0});

        }
        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((75550/3), Calculator.CalculateLaborCost(100, 5.0), 1e-6, "Incorrect Labor cost calculated");
        }
    }
}