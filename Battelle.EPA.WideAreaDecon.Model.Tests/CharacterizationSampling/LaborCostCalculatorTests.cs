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
            double[] arr1 = { 4.0, 6.0, 5.0, 4.0 };
            double[] arr2 = { 10.0, 8.0, 15.0, 20.0 };
            Calculator = new LaborCostCalculator(5.0, arr1, 10, 2, .5, .5, arr2);
        }

        [Test]
        public void CalculateCost()
        {
            double[] arr1 = { 2.0, 4.0, 2.0, 6.0 };
            Assert.AreEqual((149040.0), Calculator.CalculateLaborCost(5), 1e-6, "Incorrect labor cost calculated");
            Assert.AreEqual((729.0), Calculator.CalculateEntExitLaborCost(), 1e-6, "Incorrect ent/exit labor cost calculated");
            Assert.AreEqual((46/3), Calculator.CalculateLaborDays(5), 1e-6, "Incorrect labor days calculated");
        }
    }
}