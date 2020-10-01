using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new SuppliesCostCalculator(3.0, 10.0);
        }

        [Test]
        public void CalculateCost()
        {
            Assert.AreEqual((1738.75), Calculator.CalculateSuppliesCost(100.0, 5.0), 1e-6, "Incorrect cost calculated");
        }
    }
}