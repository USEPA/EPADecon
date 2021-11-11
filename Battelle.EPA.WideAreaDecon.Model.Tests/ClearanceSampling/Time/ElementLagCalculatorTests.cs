using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Time;
using NUnit.Framework;
using System.Collections.Generic;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.ClearanceSampling.Time
{
    public class ElementLagCalculatorTests
    {
        private ElementLagCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepa = 9.2903;
            var samplePackageTime = 1.63;
            var labThroughput = new List<double> { 50, 50, 50 };
            var labUptimesHours = new List<double> { 12.0, 12.0, 12.0 };
            var sampleShippingTime = new List<double> { 24.0, 24.0, 24.0 };

            Calculator = new ElementLagCalculator(
                surfaceAreaPerWipe, 
                surfaceAreaPerHepa, 
                labUptimesHours, 
                samplePackageTime,
                sampleShippingTime,
                labThroughput
            );
        }

        [Test]
        public void CalculateCLElementLagTime()
        {
            var numberLabs = 3;
            var sampleTimeTransmitted = 24.0;
            var fractionSampledWipe = 1.0 / 6.0;
            var fractionSampledHepa = 1.0 / 6.0;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(6.32574836119393, Calculator.CalculateElementLagTime(numberLabs, sampleTimeTransmitted, fractionSampledWipe, fractionSampledHepa, areaContaminated), 
                1e-6, "Incorrect element lag cost calculated");
        }
    }
}