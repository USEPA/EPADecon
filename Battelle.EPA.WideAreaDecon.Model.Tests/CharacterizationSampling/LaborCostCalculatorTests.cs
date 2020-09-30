using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new LaborCostCalculator(5.0, { 4.0, 6.0, 5.0, 4.0 }, 10, 2, .5, .5, { 10.0, 8.0, 15.0, 20.0});
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((149040.0), Calculator.CalculateLaborCost(5), 1e-6, "Incorrect labor cost calculated");
            Assert.AreEqual((729.0), Calculator.CalculateEntExitLaborCost(), 1e-6, "Incorrect ent/exit labor cost calculated");
            Assert.AreEqual((46/3), Calculator.CalculateLaborDays(5), 1e-6, "Incorrect labor days calculated");
        }
    }
}