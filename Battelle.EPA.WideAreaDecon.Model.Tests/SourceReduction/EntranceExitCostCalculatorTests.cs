
using System;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class EntranceExitCostCalculatorTests
    {
        private EntranceExitCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.333 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 3.0 },
                { PersonnelLevel.PL4, 0.67 }
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
            throw new NotImplementedException();
            //Calculator = new EntranceExitCostCalculator(
            //    personnelReqPerTeam,
            //    respiratorsPerPerson,
            //    costPerRespirator,
            //    costPerPpe,
            //    new MockEntExitLaborCostCalculator()
            //);
        }

        [Test]
        public void CalculateCost()
        {
            var ppeEachLevelPerTeam = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 0.0 },
                { PpeLevel.B, 3.0 },
                { PpeLevel.C, 3.0 },
                { PpeLevel.D, 0.0 }
            };
            var _numberTeams = 4.0;
            var saToBeSourceReduced = 8000.0;
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