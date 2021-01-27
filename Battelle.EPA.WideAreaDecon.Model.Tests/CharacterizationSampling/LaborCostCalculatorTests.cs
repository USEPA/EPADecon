using System;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    internal class MockPhaseLagCalculator : IPhaseLagCalculator
    {
        public double CalculatePhaseLagTime(int numberLabs, double sampleTimeTransmitted, double surfaceAreaToBeWiped, double surfaceAreaToBeHepa)
        {
            return 9.095465;
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
            var _surfaceAreaToBeHepa = 500.0;
            var _surfaceAreaToBeWiped = 500.0;
            var numberLabs = 3;
            var sampleTimeTransmitted = 24.0;

            Assert.AreEqual(84993.2811, Calculator.CalculateLaborCost(_numberTeams,  roundtripDays,  _surfaceAreaToBeHepa,  _surfaceAreaToBeWiped), 1e-4,
                "Incorrect labor cost calculated");
            Assert.AreEqual(21393.2811, Calculator.CalculateEntExitLaborCost(_numberTeams, _surfaceAreaToBeHepa,  _surfaceAreaToBeWiped), 1e-4,
                "Incorrect ent/exit labor cost calculated");
            Assert.AreEqual(3.340930863, Calculator.CalculateLaborDays(_numberTeams, roundtripDays, _surfaceAreaToBeHepa, 
             _surfaceAreaToBeWiped, numberLabs, sampleTimeTransmitted), 1e-4,
                "Incorrect labor days calculated");
        }
    }
}