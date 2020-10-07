using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class EntranceExitCostCalculatorTests
    {
        private EntranceExitCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var numTeams = 4.0;
            double[] personnelReqPerTeam = {0.333, 0.0, 1.0, 3.0, 0.67};
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            double[] costPerPpe = {3322.0, 3023.8, 1897.68, 260.09};
            Calculator = new EntranceExitCostCalculator(
                numTeams,
                personnelReqPerTeam,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                new MockEntExitLaborCostCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var saToBeSourceReduced = 8000.0;
            double[] ppeEachLevelPerTeam = {0.0, 3.0, 3.0, 0.0};

            Assert.AreEqual(196406.287704968,
                Calculator.CalculateEntranceExitCost(saToBeSourceReduced, ppeEachLevelPerTeam), 1e-6,
                "Incorrect cost calculated");
        }

        private class MockEntExitLaborCostCalculator : IEntExitLaborCostCalculator
        {
            public double CalculateEntExitLaborCost(double saToBeSourceReduced)
            {
                return 132585.671704968;
            }
        }
    }
}