using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;
using EntExitLaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.SourceReduction.EntExitLaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class EntExitLaborCostCalculatorTests
    {
        class MockWorkDaysCalculator : IWorkDaysCalculator
        {
            public double CalculateWorkDays(double SAToBeSourceReduced) => 4.078555177;
        }
        private EntExitLaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double teamsRequired = 4.0;
            double[] personnelPerTeam = { 0.333, 0.0, 1.0, 3.0, 0.67 };
            double[] personnelHourlyRate = { 150.0, 90.0, 110.0, 130.0, 190.0 };
            double numEntriesPerTeamPerDay = 3.0;
            double massPerSA = 7.4;
            double hoursPerEntryPerTeam = 2.0;
            double hoursPerExitPerTeam = 2.0;
            Calculator = new EntExitLaborCostCalculator(
                teamsRequired,
                personnelPerTeam,
                personnelHourlyRate,
                numEntriesPerTeamPerDay,
                massPerSA,
                hoursPerEntryPerTeam,
                hoursPerExitPerTeam,
                new MockWorkDaysCalculator()
                );
        }

        [Test]
        public void CalculateCost()
        {
            double SAToBeSourceReduced = 8000.0;

            Assert.AreEqual((132585.671704968), Calculator.CalculateEntExitLaborCost(SAToBeSourceReduced), 1e-3, "Incorrect cost calculated");
        }
    }
}