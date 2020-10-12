﻿using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class EntExitLaborCostCalculatorTests
    {
        private EntExitLaborCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            double[] personnelReqPerTeam = {0.3, 0.0, 0.0, 5.0, 2.0};
            var numEntriesPerTeamPerDay = 2.0;
            var hoursPerEntryPerTeam = 1.5;
            var hoursPerExitPerTeam = 1.5;
            double[] personnelHourlyRate = {150.0, 90.0, 110.0, 130.0, 190.0};
            double[] workDaysPerAppMethod = {1.0, 2.0};
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