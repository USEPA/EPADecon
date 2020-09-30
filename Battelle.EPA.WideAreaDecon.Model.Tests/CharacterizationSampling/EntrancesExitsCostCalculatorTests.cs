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
            Calculator = new EntrancesExitsCostCalculator(5.0, { 2.0, 4.0, 6.0, 2.0}, 5.0, 10.0, { 1.0, 1.5, 2.0, 2.5});
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((1564), Calculator.CalculateEntrancesExitsCost({ 2.0, 4.0, 2.0, 6.0}), 1e-6, "Incorrect labor cost calculated");
        }
    }
}