using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Time;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination.Time
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
        public void CalculateCost()
        {
            var decontaminationWorkdays = new List<Dictionary<ApplicationMethod, double>>
            {
                new Dictionary<ApplicationMethod, double>
                {
                    { ApplicationMethod.Fogging, 2.0 },
                    { ApplicationMethod.Aerosol, 3.0 }
                },
                new Dictionary<ApplicationMethod, double>
                {
                    { ApplicationMethod.Fogging, 2.0 },
                    { ApplicationMethod.Fumigation, 1.0 }
                }
            };

            Assert.AreEqual(8.0, Calculator.CalculateWorkDays(decontaminationWorkdays), 1e-6, "Incorrect workdays calculated");
        }
    }
}