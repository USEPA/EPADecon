using System;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction.Time
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
            var workDays = 1.0;

            Assert.AreEqual(3.0, Calculator.CalculateOnsiteDays(workDays), 1e-6, "Incorrect onsite days calculated");
        }
    }
}
