
using System;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

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
                { PpeLevel.A, 391.59 },
                { PpeLevel.B, 144.83 },
                { PpeLevel.C, 66.60 },
                { PpeLevel.D, 64.32 }
            };
            var numberEntriesPerTeamPerDay = 3.0;
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            Calculator = new EntranceExitCostCalculator(
                personnelReqPerTeam,
                numberEntriesPerTeamPerDay,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                new MockEntExitLaborCostCalculator(),
                new MockWorkDaysCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var ppeEachLevelPerTeam = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 0.0 },
                { PpeLevel.B, 0.5 },
                { PpeLevel.C, 0.5 },
                { PpeLevel.D, 0.0 }
            };
            var _numberTeams = 4.0;
            var workDays = 2.75302474470449;
            Assert.AreEqual(111730.822350432,
                Calculator.CalculateEntranceExitCost(workDays, _numberTeams, ppeEachLevelPerTeam), 1e-6,
                "Incorrect cost calculated");
        }

        private class MockEntExitLaborCostCalculator : IEntExitLaborCostCalculator
        {
            public double CalculateEntExitLaborCost(double workDays, double _numberTeams)
            {
                return 89495.3284008536;
            }
        }
    }
}