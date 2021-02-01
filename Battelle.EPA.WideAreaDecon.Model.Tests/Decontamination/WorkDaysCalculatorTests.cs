using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    internal class MockEfficacyCalculator : IEfficacyCalculator
    {
        public Dictionary<SurfaceType, double> CalculateEfficacy(Dictionary<SurfaceType, double> _initialSporeLoading)
        {
            var dbl = new Dictionary<SurfaceType, double>();
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                dbl[surface] = 0.9;
            }

            return dbl;
        }
    }

    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
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

            //Assert.AreEqual(3.0, Calculator.CalculateWorkDays(), 1e-6, "Incorrect cost calculated"); TODO: Fix

        }
    }
}