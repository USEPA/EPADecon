using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

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
            var fractionOfWipeToEachLab = new List<double> { 0.2, 0.6, 0.2 };
            var fractionOfHepaToEachLab = new List<double> { 0.5, 0.3, 0.2 };
            var labUptimesHours = new List<double> { 8.0, 9.0, 10.0 };
            var labDistanceFromSite = new List<double> { 48.0, 20.0, 90.0 };
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

            /*Assert.AreEqual(10.6739875612766, Calculator.CalculatePhaseLagTime( numberLabs, sampleTimeTransmitted, surfaceAreaToBeWiped, surfaceAreaToBeHepa), 
                1e-6, "Incorrect phase lag cost calculated");*/
        }
    }
}