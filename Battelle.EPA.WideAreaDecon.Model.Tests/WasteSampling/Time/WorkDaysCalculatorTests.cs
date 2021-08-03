using System;
using System.Collections.Generic;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.WasteSampling.Time
{
    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var entryDuration = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 1.6 },
                { PpeLevel.B, 1.8 },
                { PpeLevel.C, 1.9 },
                { PpeLevel.D, 2.0 }
            };
            var entryPrepTime = 0.6;
            var deconLineTime = 0.81;
            var postEntryRest = 0.5;

            Calculator = new WorkDaysCalculator(entryDuration, entryPrepTime, deconLineTime, postEntryRest);
        }

        [Test]
        public void CalculateWorkDays()
        {
            var laborDays = 4.3619840720967;
            var numberTeams = 1.0;
            var ppePerLevelPerTeam = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 0.0 },
                { PpeLevel.B, 0.5 },
                { PpeLevel.C, 0.5 },
                { PpeLevel.D, 0.0 }
            };

            Assert.AreEqual(4.3619840720967, Calculator.CalculateWorkDays(laborDays, numberTeams, ppePerLevelPerTeam), 1e-6, "Incorrect workdays calculated");
        }
    }
}
