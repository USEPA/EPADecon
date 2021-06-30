using System;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling.Time
{
    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var numberEntriesPerTeamPerDay = 2.0;
            var prepTimePerTeamPerEntry = 0.6;
            var deconLineTimePerTeamPerExit = 0.81;

            Calculator = new WorkDaysCalculator(
                numberEntriesPerTeamPerDay,
                prepTimePerTeamPerEntry,
                deconLineTimePerTeamPerExit
            );
        }

        [Test]
        public void CalculateWorkDays()
        {
            var numTeams = 4.0;
            var laborDays = 0.3;

            Assert.AreEqual(10.0, Calculator.CalculateWorkDays(laborDays, numTeams), 1e-6, "Incorrect workdays calculated");
        }
    }
}
