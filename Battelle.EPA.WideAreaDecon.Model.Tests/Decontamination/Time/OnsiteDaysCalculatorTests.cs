using System;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination.Time
{
    public class OnsiteDaysCalculatorTests
    {
        private OnsiteDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var overheadDays = 2.0;

            Calculator = new OnsiteDaysCalculator(
                overheadDays
            );
        }

        [Test]
        public void CalculateOnsiteDays()
        {
            var workDays = 12.0;

            Assert.AreEqual(14.0, Calculator.CalculateOnsiteDays(workDays), 1e-6, "Incorrect onsite days calculated");
        }
    }
}
