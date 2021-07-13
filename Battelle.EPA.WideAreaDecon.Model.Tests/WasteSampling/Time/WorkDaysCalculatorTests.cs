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
            var laborDays = 1.68186172675;

            Assert.AreEqual(4.84376177303, Calculator.CalculateWorkDays(laborDays), 1e-6, "Incorrect workdays calculated");
        }
    }
}
