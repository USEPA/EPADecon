using System;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand.Cost
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                {PersonnelLevel.OSC, 1.0},
                {PersonnelLevel.PL1, 0.0},
                {PersonnelLevel.PL2, 2.0},
                {PersonnelLevel.PL3, 2.0},
                {PersonnelLevel.PL4, 4.0}
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                {PersonnelLevel.OSC, 150.0},
                {PersonnelLevel.PL1, 90.0},
                {PersonnelLevel.PL2, 110.0},
                {PersonnelLevel.PL3, 130.0},
                {PersonnelLevel.PL4, 190.0}
            };

            Calculator = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelHourlyRate
            );
        }

        [Test]
        public void CalculateCost()
        {
            var onsiteDays = 80.9931745087011;

            Assert.AreEqual(1350966.15080513, Calculator.CalculateLaborCost(onsiteDays), 1e-6, "Incorrect Labor cost calculated");
        }
    }
}