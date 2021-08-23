using System;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction.Time
{
    public class LaborDaysCalculatorTests
    {
        private LaborDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var massRemovedPerHrPerTeam = 453.592;
            var massPerSa = 7.4;

            Calculator = new LaborDaysCalculator(
                massRemovedPerHrPerTeam,
                massPerSa
            );
        }

        [Test]
        public void CalculateLaborDays()
        {
            var numberTeams = 4.0;
            var saToBeSourceReduced = 1.0;
            var area = 3000.0;

            Assert.AreEqual(1.019638794335, Calculator.CalculateLaborDays(numberTeams, saToBeSourceReduced, area), 1e-6, "Incorrect labor days calculated");
        }
    }
}
