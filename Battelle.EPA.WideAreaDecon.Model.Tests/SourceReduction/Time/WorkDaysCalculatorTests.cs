using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction.Time
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
        public void CalculateCost()
        {
            var numberTeams = 4.0;
            var laborDays = 3.0;

            Assert.AreEqual(2.75302474470449, Calculator.CalculateWorkDays(laborDays, numberTeams), 1e-6,
                "Incorrect workdays calculated");
        }
    }
}