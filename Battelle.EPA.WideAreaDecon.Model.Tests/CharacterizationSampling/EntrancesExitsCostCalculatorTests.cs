﻿using System;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    internal class MockLaborCostCalculator : ILaborCostCalculator
    {
        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays, double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated)
        {
            return 115407.74958828;
        }

        public double CalculateEntExitLaborCost(double workDays, double _numberTeams, double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated)
        {
            return 102687.74958828;
        }

        public double CalculateLaborDays(double workDays)
        {
            return 4.53646814419341;
        }
    }

    internal class MockSuppliesCostCalculator : ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double _numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 16677.6772547711;
        }

        public double CalculateWorkDays(double _numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 4.03646814419341;
        }
    }

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
            var numberEntriesPerPerson = 4.0;
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            Calculator = new EntrancesExitsCostCalculator(
                personnelReqPerTeam,
                numberEntriesPerPerson,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                new MockLaborCostCalculator(),
                new MockSuppliesCostCalculator()
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
            var _numberTeams = 4.0;
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var workDays = 4.03646814419341;
            var info = new ContaminationInformation(500.0, 20.0);
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(252475.155557948, Calculator.CalculateEntrancesExitsCost(workDays, _numberTeams, ppePerLevelPerTeam, fractionSampledWipe, fractionSampledHepa, areaContaminated),
                1e-6, "Incorrect labor cost calculated");
        }
    }
}