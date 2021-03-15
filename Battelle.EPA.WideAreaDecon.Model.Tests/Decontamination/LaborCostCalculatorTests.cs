using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    internal class MockWorkDaysCalculator : IWorkDaysCalculator
    {
        public Tuple<double, int> CalculateWorkDays()
        {
            Tuple<double, int> deconLabor = new Tuple<double, int>(3.0, 2);

            return deconLabor;
        }
    }

    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.3 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 0.0 },
                { PersonnelLevel.PL3, 5.0 },
                { PersonnelLevel.PL4, 2.0 }
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 150.0 },
                { PersonnelLevel.PL1, 90.0 },
                { PersonnelLevel.PL2, 110.0 },
                { PersonnelLevel.PL3, 130.0 },
                { PersonnelLevel.PL4, 190.0 }
            };
            var personnelOverhead = 2.0;
            Calculator = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelHourlyRate,
                personnelOverhead,
                new MockWorkDaysCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var workDays = 12.0;
            var numTeams = 2.0;
            var roundtripDays = 2.0;
             
            Assert.AreEqual(240800.0, Calculator.CalculateLaborCost(workDays, numTeams, roundtripDays), 1e-6, "Incorrect cost calculated");

        }
    }
}