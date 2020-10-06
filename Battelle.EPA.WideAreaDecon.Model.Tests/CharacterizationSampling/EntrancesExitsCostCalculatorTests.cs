using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using EntrancesExitsCostCalculator = Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.EntrancesExitsCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    class MockLaborCostCalculator : ILaborCostCalculator
    {
        public double CalculateLaborCost(double PersonnelRoundTripDays) => 84993.28;

        public double CalculateEntExitLaborCost() => 21393.28;

        public double CalculateLaborDays(double PersonnelRoundTripDays) => 3.340930863;
    }
    public class EntrancesExitsCostCalculatorTests
    {
        private EntrancesExitsCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double numTeams = 4.0;
            double[] personnelReqPerTeam = { 0.3, 0.0, 1.0, 2.0, 2.0 };
            double respiratorsPerPerson = 1.0;
            double costPerRespirator = 238.0;
            double[] costPerPPE = { 3322.0, 3023.8, 1897.68, 260.09 };
            Calculator = new EntrancesExitsCostCalculator(
                numTeams,
                personnelReqPerTeam,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPPE,
                new MockLaborCostCalculator()
                );
        }

        [Test]
        public void CalculateCost()
        {
            double[] PPE_PerLevelPerTeam = { 0.0, 3.0, 3.0, 0.0 };
            Assert.AreEqual((85496.64), Calculator.CalculateEntrancesExitsCost(PPE_PerLevelPerTeam), 1e-6, "Incorrect labor cost calculated");
        }
    }
}