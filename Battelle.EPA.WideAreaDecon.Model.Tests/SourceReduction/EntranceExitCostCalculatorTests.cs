
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
                costPerPpe
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
            var workDays = 1.019638794335;
            Assert.AreEqual(11234.2033887326,
                Calculator.CalculateEntranceExitCost(workDays, _numberTeams, ppeEachLevelPerTeam), 1e-6,
                "Incorrect cost calculated");
        }
    }
}