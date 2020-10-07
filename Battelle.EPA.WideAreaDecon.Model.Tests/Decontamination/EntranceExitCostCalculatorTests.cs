using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    internal class MockEntExitLaborCostCalculator : IEntExitLaborCostCalculator
    {
        public double CalculateEntExitLaborCost()
        {
            return 38700.0;
        }
    }

    public class EntranceExitCostCalculatorTests
    {
        private EntranceExitCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var numTeams = 2.0;
            double[] personnelReqPerTeam = {0.3, 0.0, 0.0, 5.0, 2.0};
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
            double[] ppePerLevelPerTeam = {0.0, 4.0, 4.0, 0.0};

            Assert.AreEqual(81546.64, Calculator.CalculateEntranceExitCost(ppePerLevelPerTeam), 1e-6,
                "Incorrect cost calculated");
        }
    }
}