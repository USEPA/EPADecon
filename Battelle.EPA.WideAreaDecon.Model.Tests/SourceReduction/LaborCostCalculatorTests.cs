using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    internal class MockWorkDaysCalculator : IWorkDaysCalculator
    {
        public double CalculateWorkDays(double _numberTeams, double saToBeSourceReduced)
        {
            return 4.07855517733999;
        }
    }

    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var teamsRequired = 4.0;
            var personnelOverhead = 0.0;
            double[] personnelPerTeam = {0.333, 0.0, 1.0, 3.0, 0.67};
            double[] personnelHourlyRate = {150.0, 90.0, 110.0, 130.0, 190.0};
            var massPerSa = 7.4;
            Calculator = new LaborCostCalculator(
                teamsRequired,
                personnelOverhead,
                personnelPerTeam,
                personnelHourlyRate,
                massPerSa,
                new MockWorkDaysCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var roundtripDays = 2.0;
            var saToBeSourceReduced = 8000.0;
            var costPerTonRemoved = 0.1;

            Assert.AreEqual(137654.447803312,
                Calculator.CalculateLaborCost(roundtripDays, saToBeSourceReduced, costPerTonRemoved), 1e-6,
                "Incorrect labor cost calculated");
            Assert.AreEqual(6.07855517733999, Calculator.CalculateLaborDays(roundtripDays, saToBeSourceReduced), 1e-6,
                "Incorrect labor days calculated");
        }
    }
}