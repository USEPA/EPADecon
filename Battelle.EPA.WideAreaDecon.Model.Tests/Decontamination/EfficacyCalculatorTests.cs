using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;
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
            double[] initialSporeLoading = { 1.1 };
            double[] newSporeLoading = { 0.9 };

            Assert.AreEqual(newSporeLoading.Sum(), Calculator.CalculateEfficacy(initialSporeLoading).Sum(), 1e-6, "Incorrect cost calculated");

        }
    }
}