using System;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    internal class MockPhaseLagCalculator : IPhaseLagCalculator
    {
        public double CalculatePhaseLagTime(int numberLabs, double sampleTimeTransmitted, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 39.967011947266;
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
            var personnelOverhead = 0.5;
            var entriesPerTeam = 4.0;
            var hoursEntering = 1.0;
            var hoursExiting = 1.0;
            Calculator = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelOverhead,
                entriesPerTeam,
                hoursEntering,
                hoursExiting,
                personnelHourlyRate,
                new MockSuppliesCostCalculator(),
                new MockPhaseLagCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var _numberTeams = 4;
            var roundtripDays = 2.0;
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var workDays = 2.6909787627956;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(121767.74958828, Calculator.CalculateLaborCost(workDays, _numberTeams, roundtripDays, fractionSampledWipe, fractionSampledHepa, areaContaminated), 1e-4,
                "Incorrect labor cost calculated");
            Assert.AreEqual(68458.4997255202, Calculator.CalculateEntExitLaborCost(workDays, _numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated), 1e-4,
                "Incorrect ent/exit labor cost calculated");
            Assert.AreEqual(3.1909787627956, Calculator.CalculateLaborDays(workDays), 1e-4,
                "Incorrect labor days calculated");
        }
    }
}