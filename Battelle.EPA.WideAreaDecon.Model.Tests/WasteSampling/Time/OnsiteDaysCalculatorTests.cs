using System;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.WasteSampling.Time
{
    public class OnsiteDaysCalculatorTests
    {
        private OnsiteDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var overheadDays = 0.5;

            Calculator = new OnsiteDaysCalculator(
                overheadDays    
            );
        }

        [Test]
        public void CalculateOnsiteDays()
        {
            var workDays = 4.84376177303209;

            Assert.AreEqual(5.34376177303, Calculator.CalculateOnsiteDays(workDays), 1e-6, "Incorrect workdays calculated");
        }
    }
}
