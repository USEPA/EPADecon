using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            Dictionary<PersonnelLevel, double> personnelReqPerTeam = {0.3, 0.0, 0.0, 5.0, 2.0};
            Dictionary<PersonnelLevel, double> personnelHourlyRate = {150.0, 90.0, 110.0, 130.0, 190.0};
            var personnelOverhead = 2.0;
            Dictionary<ApplicationMethodType, double> workDaysPerAppMethod = {1.0, 2.0};
            Calculator = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelHourlyRate,
                personnelOverhead,
                workDaysPerAppMethod
            );
        }

        [Test]
        public void CalculateCost()
        {
            var numTeams = 2.0;
            var roundtripDays = 2.0;
             
            Assert.AreEqual(120400.0, Calculator.CalculateLaborCost(numTeams, roundtripDays), 1e-6, "Incorrect cost calculated");

        }
    }
}