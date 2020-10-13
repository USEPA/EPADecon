using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class EntExitLaborCostCalculatorTests
    {
        private EntExitLaborCostCalculator Calculator { get; set; }

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
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 150.0 },
                { PersonnelLevel.PL1, 90.0 },
                { PersonnelLevel.PL2, 110.0 },
                { PersonnelLevel.PL3, 130.0 },
                { PersonnelLevel.PL4, 190.0 }
            };
            var workDaysPerAppMethod = new Dictionary<ApplicationMethodType, double>()
            {
                { ApplicationMethodType.AMT1, 1.0 },
                { ApplicationMethodType.AMT2, 2.0 }
            };
            var numEntriesPerTeamPerDay = 2.0;
            var hoursPerEntryPerTeam = 1.5;
            var hoursPerExitPerTeam = 1.5;
            Calculator = new EntExitLaborCostCalculator(
                personnelReqPerTeam,
                numEntriesPerTeamPerDay,
                hoursPerEntryPerTeam,
                hoursPerExitPerTeam,
                personnelHourlyRate,
                workDaysPerAppMethod);
        }

        [Test]
        public void CalculateCost()
        {
            var _numberTeams= 2.0;
            Assert.AreEqual(38700.0, Calculator.CalculateEntExitLaborCost(_numberTeams), 1e-6, "Incorrect cost calculated");
        }
    }
}