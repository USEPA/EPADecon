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
            Dictionary<PersonnelLevel, double> personnelPerTeam = {0.333, 0.0, 1.0, 3.0, 0.67};
            Dictionary<PersonnelLevel, double> personnelHourlyRate = {150.0, 90.0, 110.0, 130.0, 190.0};
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