using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    internal class MockEntExitLaborCostCalculator : IEntExitLaborCostCalculator
    {
        public double CalculateEntExitLaborCost(double _numberTeams)
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
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.3 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 0.0 },
                { PersonnelLevel.PL3, 5.0 },
                { PersonnelLevel.PL4, 2.0 }
            };
            var costPerPpe = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 3322.0 },
                { PpeLevel.B, 3023.8 },
                { PpeLevel.C, 1897.68 },
                { PpeLevel.D, 260.09 }
            };
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
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
            var ppePerLevelPerTeam = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 0.0 },
                { PpeLevel.B, 4.0 },
                { PpeLevel.C, 4.0 },
                { PpeLevel.D, 0.0 }
            };
            var numTeams = 2.0;
            
            Assert.AreEqual(81546.64, Calculator.CalculateEntranceExitCost(numTeams, ppePerLevelPerTeam), 1e-6,
                "Incorrect cost calculated");
        }
    }
}