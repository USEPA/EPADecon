using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class PhaseLagCalculatorTests
    {
        private PhaseLagCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepa = 9.2903;
            var samplePackageTime = 1.63;
            var wipeAnalysisTime = 0.79;
            var hepaAnalysisTime = 1.0;
            var fractionOfWipeToEachLab = new Dictionary<Labs, double>()
            {
                { Labs.Lab1, 0.2 },
                { Labs.Lab2, 0.6 },
                { Labs.Lab3, 0.2 }
            };
            var fractionOfHepaToEachLab = new Dictionary<Labs, double>()
            {
                { Labs.Lab1, 0.5 },
                { Labs.Lab2, 0.3 },
                { Labs.Lab3, 0.2 }
            };
            var labUptimesHours = new Dictionary<Labs, double>()
            {
                { Labs.Lab1, 8.0 },
                { Labs.Lab2, 9.0 },
                { Labs.Lab3, 10.0 }
            };
            var labDistanceFromSite = new Dictionary<Labs, double>()
            {
                { Labs.Lab1, 48.0 },
                { Labs.Lab2, 20.0 },
                { Labs.Lab3, 90.0 }
            };
            Calculator = new PhaseLagCalculator(
                surfaceAreaPerWipe, 
                surfaceAreaPerHepa, 
                labUptimesHours, 
                samplePackageTime, 
                wipeAnalysisTime, 
                hepaAnalysisTime, 
                fractionOfWipeToEachLab, 
                fractionOfHepaToEachLab, 
                labDistanceFromSite
            );
        }

            [Test]
        public void CalculateCSPhaseLagTime()
        {
            var numberLabs = 3;
            var sampleTimeTransmitted = 24.0;
            var surfaceAreaToBeWiped = 500.0;
            var surfaceAreaToBeHepa = 500.0;

            Assert.AreEqual(10.6739875612766, Calculator.CalculatePhaseLagTime( numberLabs, sampleTimeTransmitted, surfaceAreaToBeWiped, surfaceAreaToBeHepa), 
                1e-6, "Incorrect phase lag cost calculated");
        }
    }
}