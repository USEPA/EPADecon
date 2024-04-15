using System.Collections.Generic;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.VerificationSampling.Time
{
    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var entryDuration = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 1.0,
                [PpeLevel.B] = 1.5,
                [PpeLevel.C] = 2.0,
                [PpeLevel.D] = 2.5
            };
            var entryPrepTime = 0.6;
            var deconLineTime = 0.81;
            var postEntryRest = 0.5;

            Calculator = new WorkDaysCalculator(
                entryDuration,
                entryPrepTime,
                deconLineTime,
                postEntryRest
            );
        }

        [Test]
        public void CalculateWorkDays()
        {
            var numTeams = 4.0;
            var laborDays = 1.68186172675;
            var ppeRequired = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 0.0,
                [PpeLevel.B] = 0.5,
                [PpeLevel.C] = 0.5,
                [PpeLevel.D] = 0.0
            };

            Assert.AreEqual(3.55573600063148, Calculator.CalculateWorkDays(laborDays, numTeams, ppeRequired), 1e-6, "Incorrect workdays calculated");
        }
    }
}
