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
            var onsiteDaysCS = 58.5358450143538;
            var onsiteDaysSR = 2.45732949434734;
            var onsiteDaysDC = 12.0;
            var onsiteDaysWS = 4.0;

            Assert.AreEqual(80.9931745087011, Calculator.CalculateOnSiteDays(onsiteDaysCS, onsiteDaysSR, onsiteDaysDC, onsiteDaysWS), 1e-6, "Incorrect onsite days calculated");
        }
    }
}
