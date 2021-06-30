﻿using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time;
using NUnit.Framework;
using System.Collections.Generic;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling.Time
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
            var labThroughput = new List<double> { 50, 50, 50 };
            var labUptimesHours = new List<double> { 12.0, 12.0, 12.0 };
            var labDistanceFromSite = new List<double> { 40.0, 40.0, 40.0 };

            Calculator = new PhaseLagCalculator(
                surfaceAreaPerWipe, 
                surfaceAreaPerHepa, 
                labUptimesHours, 
                samplePackageTime,
                labDistanceFromSite,
                labThroughput
            );
        }

        [Test]
        public void CalculateCSPhaseLagTime()
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

            Assert.AreEqual(6.36340723, Calculator.CalculatePhaseLagTime(numberLabs, sampleTimeTransmitted, fractionSampledWipe, fractionSampledHepa, areaContaminated), 
                1e-6, "Incorrect phase lag cost calculated");
        }
    }
}