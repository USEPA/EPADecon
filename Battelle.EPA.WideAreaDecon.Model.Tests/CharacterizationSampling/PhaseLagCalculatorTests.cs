using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;

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
            var samplePackageTime = 6.0;
            var wipeAnalysisTime = 6.0;
            var hepaAnalysisTime = 19.0;
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
            Calculator = new PhaseLagCostCalculator(
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
        public void CalculateCost()
        {
            var numberLabs = 3;
            var sampleTimeTransmitted = 24.0;
            var surfaceAreaToBeWiped = 500.0;
            var surfaceAreaToBeHepa = 500.0;

            Assert.AreEqual(9.095465, Calculator.CalculateSuppliesCost( numberLabs, sampleTimeTransmitted, surfaceAreaToBeWiped, surfaceAreaToBeHepa), 1e-6,
                "Incorrect phase lag cost calculated");
        }
    }
}