using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;
using System.Collections.Generic;

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
            var numberTeams = 4.0;
            var saToBeSourceReduced = 8000.0;
            
            Assert.AreEqual(132585.671704968, Calculator.CalculateEntExitLaborCost(numberTeams, saToBeSourceReduced ), 1e-3,
                "Incorrect cost calculated");
        }

        private class MockWorkDaysCalculator : IWorkDaysCalculator
        {
            public double CalculateWorkDays(double _numberTeams, double saToBeSourceReduced)
            {
                return 4.078555177;
            }
        }
    }
}