using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    internal class MockLaborCostCalculator : ILaborCostCalculator
    {
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            return 84993.28;
        }

        public double CalculateEntExitLaborCost(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            return 21393.28;
        }

        public double CalculateLaborDays(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            return 3.340930863;
        }
    }

    public class EntrancesExitsCostCalculatorTests
    {
        private EntrancesExitsCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var numTeams = 4.0;
            double[] personnelReqPerTeam = {0.3, 0.0, 1.0, 2.0, 2.0};
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            double[] costPerPpe = {3322.0, 3023.8, 1897.68, 260.09};
            Calculator = new EntrancesExitsCostCalculator(
                numTeams,
                personnelReqPerTeam,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                new MockLaborCostCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            double[] ppePerLevelPerTeam = {0.0, 3.0, 3.0, 0.0};
            Assert.AreEqual(85496.64, Calculator.CalculateEntrancesExitsCost(ppePerLevelPerTeam), 1e-6,
                "Incorrect labor cost calculated");
        }
    }
}