﻿using NUnit.Framework;
using EntExitLaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.Decontamination.EntExitLaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
	public class EntExitLaborCostCalculatorTests
	{
        private EntExitLaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double numTeams = 2.0;
            double[] personnelReqPerTeam = { 0.3, 0.0, 0.0, 5.0, 2.0 };
            double numEntriesPerTeamPerDay = 2.0;
            double hoursPerEntryPerTeam = 1.5;
            double hoursPerExitPerTeam = 1.5;
            double[] personnelHourlyRate = { 150.0, 90.0, 110.0, 130.0, 190.0 };
            double[] workDaysPerAppMethod = { 1.0, 2.0 };
            Calculator = new EntExitLaborCostCalculator(
                numTeams,
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
            Assert.AreEqual((38700.0), Calculator.CalculateEntExitLaborCost(), 1e-6, "Incorrect cost calculated");
        }
    }
}
