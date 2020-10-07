using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using EntranceExitCostCalculator = Battelle.EPA.WideAreaDecon.Model.SourceReduction.EntranceExitCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class EntranceExitCostCalculatorTests
    {
        class MockEntExitLaborCostCalculator : IEntExitLaborCostCalculator
        {
            public double CalculateEntExitLaborCost(double saToBeSourceReduced) => 132585.671704968;
        }
        private EntranceExitCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double numTeams = 4.0;
            double[] personnelReqPerTeam = { 0.333, 0.0, 1.0, 3.0, 0.67 };
            double respiratorsPerPerson = 1.0;
            double costPerRespirator = 238.0;
            double[] costPerPpe = { 3322.0, 3023.8, 1897.68, 260.09 };
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
            double saToBeSourceReduced = 8000.0;
            double[] ppeEachLevelPerTeam = { 0.0, 3.0, 3.0, 0.0 };

            Assert.AreEqual((196406.287704968), Calculator.CalculateEntranceExitCost(saToBeSourceReduced, ppeEachLevelPerTeam), 1e-6, "Incorrect cost calculated");
        }
    }
}