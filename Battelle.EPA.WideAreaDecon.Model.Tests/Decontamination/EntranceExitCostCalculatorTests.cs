using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using EntranceExitCostCalculator = Battelle.EPA.WideAreaDecon.Model.Decontamination.EntranceExitCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    class MockEntExitLaborCostCalculator : IEntExitLaborCostCalculator
    {
        public double CalculateEntExitLaborCost() => 38700.0;
    }
    public class EntranceExitCostCalculatorTests
    {
        private EntranceExitCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double numTeams = 2.0;
            double[] personnelReqPerTeam = { 0.3, 0.0, 0.0, 5.0, 2.0 };
            double respiratorsPerPerson = 1.0;
            double costPerRespirator = 238.0;
            double[] costPerPPE = { 3322.0, 3023.8, 1897.68, 260.09 };
            Calculator = new EntranceExitCostCalculator(
                numTeams,
                personnelReqPerTeam,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPPE,
                new MockEntExitLaborCostCalculator()
                );
        }

        [Test]
        public void CalculateCost()
        {
            double[] PPE_PerLevelPerTeam = { 0.0, 4.0, 4.0, 0.0 };

            Assert.AreEqual((81546.64), Calculator.CalculateEntranceExitCost(PPE_PerLevelPerTeam), 1e-6, "Incorrect cost calculated");
        }
    }
}