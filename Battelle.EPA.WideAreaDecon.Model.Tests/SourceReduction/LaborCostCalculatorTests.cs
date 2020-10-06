using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using LaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.SourceReduction.LaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    class MockWorkDaysCalculator : IWorkDaysCalculator
    {
        public double CalculateWorkDays(double SAToBeSourceReduced) => 4.07855517733999;
    }
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double teamsRequired = 4.0;
            double personnelOverhead = 0.0;
            double[] personnelPerTeam = { 0.333, 0.0, 1.0, 3.0, 0.67 };
            double[] personnelHourlyRate = { 150.0, 90.0, 110.0, 130.0, 190.0 };
            double massPerSA = 7.4;
            Calculator = new LaborCostCalculator(
                teamsRequired,
                personnelOverhead,
                personnelPerTeam,
                personnelHourlyRate,
                massPerSA,
                new MockWorkDaysCalculator()
                );
        }

        [Test]
        public void CalculateCost()
        {
            double roundtripDays = 2.0;
            double SAToBeSourceReduced = 8000.0;
            double CostPerTonRemoved = 0.1;

            Assert.AreEqual((137654.447803312), Calculator.CalculateLaborCost(roundtripDays, SAToBeSourceReduced, CostPerTonRemoved), 1e-6, "Incorrect labor cost calculated");
            Assert.AreEqual((6.07855517733999), Calculator.CalculateLaborDays(roundtripDays, SAToBeSourceReduced), 1e-6, "Incorrect labor days calculated");
        }
    }
}