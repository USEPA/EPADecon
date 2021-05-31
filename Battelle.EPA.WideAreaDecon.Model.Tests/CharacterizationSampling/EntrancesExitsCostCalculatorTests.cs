using System;
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
            return 83259.8434926752;
        }

        public double CalculateLaborDays(double workDays)
        {
            return 2.18186172674725;
        }
    }

    internal class MockSuppliesCostCalculator : ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double _numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 10826.1439350721;
        }

        public double CalculateWorkDays(double _numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 1.68186172674725;
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
            var fractionSampledWipe = 0.5;
            var fractionSampledHepa = 0.5;
            var workDays = 1.68186172674725;
            var info = new ContaminationInformation(500.0, 20.0);
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(20122.8714551737, Calculator.CalculateEntrancesExitsCost(workDays, _numberTeams, ppePerLevelPerTeam, fractionSampledWipe, fractionSampledHepa, areaContaminated),
                1e-6, "Incorrect labor cost calculated");
        }
    }
}