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
            var workDays = 2.45732949434734;

            Assert.AreEqual(4.45732949434734, Calculator.CalculateOnsiteDays(workDays), 1e-6, "Incorrect onsite days calculated");
        }
    }
}
