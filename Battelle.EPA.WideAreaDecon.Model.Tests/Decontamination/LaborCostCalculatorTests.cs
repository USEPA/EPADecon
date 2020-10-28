﻿using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
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
            var workDaysPerAppMethod = new Dictionary<ApplicationMethod, double>()
            {
                { ApplicationMethod.Aerosol, 1.0 },
                { ApplicationMethod.Fogging, 2.0 }
            };
            var personnelOverhead = 2.0;
            throw new NotImplementedException();
            //Calculator = new LaborCostCalculator(
            //    personnelReqPerTeam,
            //    personnelHourlyRate,
            //    personnelOverhead,
            //    workDaysPerAppMethod
            //);
        }

        [Test]
        public void CalculateCost()
        {
            var numTeams = 2.0;
            var roundtripDays = 2.0;
             
            Assert.AreEqual(120400.0, Calculator.CalculateLaborCost(numTeams, roundtripDays), 1e-6, "Incorrect cost calculated");

        }
    }
}