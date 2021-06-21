using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class EntExitLaborCostCalculatorTests
    {
        private EntExitLaborCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var personnelPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.333 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 3.0 },
                { PersonnelLevel.PL4, 0.67 }
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 150.0 },
                { PersonnelLevel.PL1, 90.0 },
                { PersonnelLevel.PL2, 110.0 },
                { PersonnelLevel.PL3, 130.0 },
                { PersonnelLevel.PL4, 190.0 }
            };
            var numEntriesPerTeamPerDay = 3.0;
            var hoursPerEntryPerTeam = 2.0;
            var hoursPerExitPerTeam = 2.0;
            Calculator = new EntExitLaborCostCalculator(
                personnelPerTeam,
                personnelHourlyRate,
                numEntriesPerTeamPerDay,
                hoursPerEntryPerTeam,
                hoursPerExitPerTeam,
                new MockWorkDaysCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var workDays = 4.12953711705674;
            var numberTeams = 4.0;
            
            Assert.AreEqual(134242.99260128, Calculator.CalculateEntExitLaborCost(workDays, numberTeams), 1e-3,
                "Incorrect cost calculated");
        }
    }
}