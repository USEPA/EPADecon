﻿using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using LaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.Decontamination.LaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double numTeams = 2.0;
            double[] personnelReqPerTeam = { 0.3, 0.0, 0.0, 5.0, 2.0 };
            double[] personnelHourlyRate = { 150.0, 90.0, 110.0, 130.0, 190.0 };
            double personnelOverhead = 2.0;
            double[] workDaysPerAppMethod = { 1.0, 2.0 };
            Calculator = new LaborCostCalculator(
                numTeams,
                personnelReqPerTeam,
                personnelHourlyRate,
                personnelOverhead,
                workDaysPerAppMethod
                );
        }

        [Test]
        public void CalculateCost()
        {
            double roundtripDays = 2.0;

            Assert.AreEqual((120400.0), Calculator.CalculateLaborCost(roundtripDays), 1e-6, "Incorrect cost calculated");
        }
    }
}