using System;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.WasteSampling.Time
{
    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            Calculator = new WorkDaysCalculator();
        }

        [Test]
        public void CalculateWorkDays()
        {
            var laborDays = 4.3619840720967;

            Assert.AreEqual(4.3619840720967, Calculator.CalculateWorkDays(laborDays), 1e-6, "Incorrect workdays calculated");
        }
    }
}
