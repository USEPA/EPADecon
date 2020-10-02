using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.Model.Other;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Other
{
    class TransportationCostCalculatorTest
    {
        private TransportationCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            Calculator = new TransportationCostCalculator(4.0, 3.0, 2.0);
        }

        [Test]
        public void CalculateCost()
        {
            double[] arr1 = { 1.0, 2.0, 4.0, 2.0 };
            Assert.AreEqual((1738.75), Calculator.CalculateTransportationCost(arr1, 5.0, 30), 1e-6, "Incorrect cost calculated");
        }
    }
}
