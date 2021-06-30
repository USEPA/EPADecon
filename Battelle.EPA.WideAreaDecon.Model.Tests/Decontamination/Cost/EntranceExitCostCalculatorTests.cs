using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination.Cost
{
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
                { PpeLevel.A, 391.59 },
                { PpeLevel.B, 144.83 },
                { PpeLevel.C, 66.60 },
                { PpeLevel.D, 64.32 }
            };

            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            var numberEntriesPerTeamPerDay = 2.0;
            var prepTimeCost = 252.0;
            var deconLineCost = 697.0;

            Calculator = new EntranceExitCostCalculator(
                personnelReqPerTeam,
                numberEntriesPerTeamPerDay,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                prepTimeCost,
                deconLineCost
            );
        }

        [Test]
        public void CalculateCost()
        {
            var workdays = new Dictionary<ApplicationMethod, double>()
            {
                { ApplicationMethod.Fogging, 1.0 },
                { ApplicationMethod.Fumigation, 2.0 }
            };

            var decontaminationWorkdays = new List<Dictionary<ApplicationMethod, double>>();
            
            for (int i = 0; i < 4; i++)
            {
                decontaminationWorkdays.Add(workdays);
            }

            var ppePerLevelPerTeam = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 0.0 },
                { PpeLevel.B, 0.5 },
                { PpeLevel.C, 0.5 },
                { PpeLevel.D, 0.0 }
            };
            var numTeams = 2.0;
            
            Assert.AreEqual(15822.312, Calculator.CalculateEntranceExitCost(numTeams, ppePerLevelPerTeam, decontaminationWorkdays), 
                1e-6, "Incorrect cost calculated");
        }
    }
}