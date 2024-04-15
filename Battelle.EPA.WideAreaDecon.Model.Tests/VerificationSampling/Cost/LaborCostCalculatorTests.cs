using System;
using Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Cost;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.VerificationSampling.Cost
{
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
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 2.0 },
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

            Calculator = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelHourlyRate
            );
        }

        [Test]
        public void CalculateCost()
        {
            var numberTeams = 4.0;
            var onsiteDays = 5.34376177303209;

            Assert.AreEqual(203917.949258904, Calculator.CalculateLaborCost(onsiteDays, numberTeams), 1e-4,
                "Incorrect labor cost calculated");
        }
    }
}