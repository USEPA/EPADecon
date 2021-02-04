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
            Enum.GetValues(typeof(SurfaceType)).Cast<SurfaceType>().ToDictionary(s => s, s => 0.2);
            Calculator = new EfficacyCalculator(
                Enum.GetValues(typeof(SurfaceType)).Cast<SurfaceType>().ToDictionary(s => s, s => 0.2)
            );
        }

        [Test]
        public void CalculateCost()
        {
            var initialSporeLoading = new Dictionary<SurfaceType, double>();
            var newSporeLoading = new Dictionary<SurfaceType, double>();
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                initialSporeLoading.Add(surface, 1.1);
                newSporeLoading.Add(surface, 0.9);
            }

            Assert.AreEqual(newSporeLoading.Values.Sum(),
                Calculator.CalculateEfficacy(initialSporeLoading).Values.Sum(), 1e-6, "Incorrect cost calculated");
        }
    }
}