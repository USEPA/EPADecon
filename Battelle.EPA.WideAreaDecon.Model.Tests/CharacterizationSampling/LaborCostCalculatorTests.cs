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
            double numTeams = 4.0;
            double[] personnelRequiredPerTeam = { 0.3, 0.0, 1.0, 2.0, 2.0 };
            double personnelOverhead = 0.5;
            double entriesPerTeam = 4.0;
            double hoursEntering = 1.0;
            double hoursExiting = 1.0;
            double[] personnelHourlyRate = { 150.0, 90.0, 110.0, 130.0, 190.0 };
            Calculator = new LaborCostCalculator(numTeams, personnelRequiredPerTeam, personnelOverhead, entriesPerTeam, hoursEntering, hoursExiting, personnelHourlyRate);
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