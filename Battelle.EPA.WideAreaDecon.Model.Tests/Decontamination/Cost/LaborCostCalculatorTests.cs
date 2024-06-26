﻿using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination.Cost
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }

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

            Calculator = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelHourlyRate
            );
        }

        [Test]
        public void CalculateCost()
        {
            var onsiteDays = 14.0;
            var numTeams = 2.0;
             
            Assert.AreEqual(361200, Calculator.CalculateLaborCost(onsiteDays, numTeams), 1e-6, "Incorrect cost calculated");

        }
    }
}