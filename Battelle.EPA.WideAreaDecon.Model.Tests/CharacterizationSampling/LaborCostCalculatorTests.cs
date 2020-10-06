using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using LaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.LaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    class MockSuppliesCostCalculator : ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost() => 3610.12;

        public double CalculateWorkDays() => 0.840930863;
    }
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double numTeams = 4.0;
            double[] personnelRequiredPerTeam = { 0.3, 0.0, 1.0, 2.0, 2.0 };
            double personnelOverhead = 0.5;
            double entriesPerTeam = 4.0;
            double hoursEntering = 1.0;
            double hoursExiting = 1.0;
            double[] personnelHourlyRate = { 150.0, 90.0, 110.0, 130.0, 190.0 };
            Calculator = new LaborCostCalculator(
                numTeams, 
                personnelRequiredPerTeam, 
                personnelOverhead, 
                entriesPerTeam, 
                hoursEntering, 
                hoursExiting, 
                personnelHourlyRate,
                new MockSuppliesCostCalculator()
                );
        }

        [Test]
        public void CalculateCost()
        {
            double roundtripDays = 2.0;

            Assert.AreEqual((84993.2811), Calculator.CalculateLaborCost(roundtripDays), 1e-4, "Incorrect labor cost calculated");
            Assert.AreEqual((21393.2811), Calculator.CalculateEntExitLaborCost(), 1e-4, "Incorrect ent/exit labor cost calculated");
            Assert.AreEqual((3.340930863), Calculator.CalculateLaborDays(roundtripDays), 1e-4, "Incorrect labor days calculated");
        }
    }
}