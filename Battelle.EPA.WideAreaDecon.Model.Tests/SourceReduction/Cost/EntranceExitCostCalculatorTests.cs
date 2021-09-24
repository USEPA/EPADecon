﻿using System;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction.Cost
{
    public class EntranceExitCostCalculatorTests
    {
        private EntranceExitCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.333 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 3.0 },
                { PersonnelLevel.PL4, 0.67 }
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

            Calculator = new EntranceExitCostCalculator(
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
            var ppeEachLevelPerTeam = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 0.0 },
                { PpeLevel.B, 0.5 },
                { PpeLevel.C, 0.5 },
                { PpeLevel.D, 0.0 }
            };
            var numberTeams = 4.0;
            var laborDays = 1.019638794335;

            Assert.AreEqual(15311.2691541947,
                Calculator.CalculateEntranceExitCost(laborDays, numberTeams, ppeEachLevelPerTeam), 1e-6,
                "Incorrect cost calculated");
        }
    }
}