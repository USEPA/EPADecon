using System;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand.Time
{
    public class OnsiteDaysCalculatorTests
    {
        private OnsiteDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var overheadDays = 8.0;

            Calculator = new OnsiteDaysCalculator(
                overheadDays
            );
        }

        [Test]
        public void CalculateOnsiteDays()
        {
            var onsiteDaysCS = 2.0;
            var onsiteDaysSR = 3.0;
            var onsiteDaysDC = 6.0;

            Assert.AreEqual(10.0, Calculator.CalculateOnSiteDays(onsiteDaysCS, onsiteDaysSR, onsiteDaysDC), 1e-6, "Incorrect onsite days calculated");
        }
    }
}
