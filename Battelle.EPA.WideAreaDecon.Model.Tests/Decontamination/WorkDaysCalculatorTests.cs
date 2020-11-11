using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    internal class MockEfficacyCalculator : IEfficacyCalculator
    {
        public double[] CalculateEfficacy(double[] _initialSporeLoading)
        {
            double[] dbl = new double[1];
            dbl[0] = 0.9;
            return dbl;
        }
    }

    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceTypes = new Dictionary<SurfaceType, string>()
            {
                { SurfaceType.IndoorInterior, "Indoor Interior"}
            };
            var applicationMethods = new Dictionary<SurfaceType, ApplicationMethod>()
            {
                { SurfaceType.IndoorInterior, ApplicationMethod.FoamSpray}
            };
            var initialSporeLoading = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.IndoorInterior, 1.1}
            };
            var desiredSporeThreshold = 1.0;
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>()
            {
                { ApplicationMethod.FoamSpray, 3.0}
            };
            Calculator = new WorkDaysCalculator(
                surfaceTypes,
                applicationMethods,
                initialSporeLoading,
                desiredSporeThreshold,
                treatmentDaysPerAm,
                new MockEfficacyCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {

            Assert.AreEqual(3.0, Calculator.CalculateWorkDays(), 1e-6, "Incorrect cost calculated");

        }
    }
}