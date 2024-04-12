using System;
using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Cost;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.ClearanceSampling.Cost
{
    public class EntrancesExitsCostCalculatorTests
    {
        private EntrancesExitsCostCalculator Calculator { get; set; }

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
            var costPerPpe = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 391.59 },
                { PpeLevel.B, 144.83 },
                { PpeLevel.C, 66.60 },
                { PpeLevel.D, 64.32 }
            };
            var entryDuration = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 1.0,
                [PpeLevel.B] = 1.5,
                [PpeLevel.C] = 2.0,
                [PpeLevel.D] = 2.5
            };
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            var prepTimeCost = 252.0;
            var deconLineCost = 697.0;

            Calculator = new EntrancesExitsCostCalculator(
                personnelReqPerTeam,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                entryDuration,
                prepTimeCost,
                deconLineCost
            );
        }

        [Test]
        public void CalculateCost()
        {
            var ppePerLevelPerTeam = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 0.0 },
                { PpeLevel.B, 0.5 },
                { PpeLevel.C, 0.5 },
                { PpeLevel.D, 0.0 }
            };
            var numberTeams = 4.0;
            var laborDays = 1.68186172674725;

            var costAndResourceResults = Calculator.CalculateEntrancesExitsCost(laborDays, numberTeams, ppePerLevelPerTeam);

            Assert.AreEqual(22814.5137124205, costAndResourceResults.SamplingCost, 1e-6, "Incorrect entrance/exit cost calculated");

            Assert.AreEqual(0, costAndResourceResults.TotalPpeUnits[PpeLevel.A], 1e-6, "Incorrect PPE units calculated for Level A");
            Assert.AreEqual(32, costAndResourceResults.TotalPpeUnits[PpeLevel.B], 1e-6, "Incorrect PPE units calculated for Level B");
            Assert.AreEqual(32, costAndResourceResults.TotalPpeUnits[PpeLevel.C], 1e-6, "Incorrect PPE units calculated for Level C");
            Assert.AreEqual(0, costAndResourceResults.TotalPpeUnits[PpeLevel.D], 1e-6, "Incorrect PPE units calculated for Level D");
        }
    }
}