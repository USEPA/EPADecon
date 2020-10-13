using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class EntranceExitCostCalculatorTests
    {
        private EntranceExitCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            
            Dictionary<PersonnelLevel, double> personnelReqPerTeam = {0.333, 0.0, 1.0, 3.0, 0.67};
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            Dictionary<PpeLevel, double> costPerPpe = {3322.0, 3023.8, 1897.68, 260.09};
            Calculator = new EntranceExitCostCalculator(
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
            var _numberTeams = 4.0;
            var saToBeSourceReduced = 8000.0;
            Dictionary<PpeLevel, double> ppeEachLevelPerTeam = {0.0, 3.0, 3.0, 0.0};

            Assert.AreEqual(196406.287704968,
                Calculator.CalculateEntranceExitCost( _numberTeams,  saToBeSourceReduced,  ppeEachLevelPerTeam), 1e-6,
                "Incorrect cost calculated");
        }

        private class MockEntExitLaborCostCalculator : IEntExitLaborCostCalculator
        {
            public double CalculateEntExitLaborCost(double _numberTeams, double saToBeSourceReduced)
            {
                return 132585.671704968;
            }
        }
    }
}