using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{

    public class EfficacyCalculatorTests
    {
        private EfficacyCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var efficacyValues = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.IndoorInterior, 0.2}
            };
            Calculator = new EfficacyCalculator(
                efficacyValues
            );
        }

        [Test]
        public void CalculateCost()
        {
            var initialSporeLoading = new Dictionary<SurfaceType, double>();
            var newSporeLoading = new Dictionary<SurfaceType, double>();
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                initialSporeLoading[surface] = 1.1;
                newSporeLoading[surface] = 0.9;
            }

            Assert.AreEqual(newSporeLoading.Values.Sum(), Calculator.CalculateEfficacy(initialSporeLoading).Values.Sum(), 1e-6, "Incorrect cost calculated");

        }
    }
}