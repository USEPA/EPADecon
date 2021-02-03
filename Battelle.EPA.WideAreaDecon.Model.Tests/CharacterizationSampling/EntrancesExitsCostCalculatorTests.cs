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
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 84993.281164225;
        }

        public double CalculateEntExitLaborCost(double _numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 21393.2811642251;
        }

        public double CalculateLaborDays(double _numberTeams, double personnelRoundTripDays, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated, int numLabs, double sampleTimeTransmitted)
        {
            return 3.340930863;
        }
    }

    internal class MockSuppliesCostCalculator : ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double _numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 3610.11619646298;
        }

        public double CalculateWorkDays(double _numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 0.840930863373626;
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
                { PpeLevel.A, 3322.0 },
                { PpeLevel.B, 3023.8 },
                { PpeLevel.C, 1897.68 },
                { PpeLevel.D, 260.09 }
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
                { PpeLevel.B, 3.0 },
                { PpeLevel.C, 3.0 },
                { PpeLevel.D, 0.0 }
            };
            var _numberTeams = 4.0;
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var info = new ContaminationInformation(100.0, 20.0);
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(821054.770855624, Calculator.CalculateEntrancesExitsCost(_numberTeams, ppePerLevelPerTeam, fractionSampledWipe, fractionSampledHepa, areaContaminated),
                1e-6, "Incorrect labor cost calculated");
        }
    }
}