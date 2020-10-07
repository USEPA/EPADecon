﻿using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var deconAgentCostPerVolume = 0.52306056;
            var deconMaterialsCost = 1.53612754751869;
            double totalRoomSa = 100;
            var deconAgentVolume = 0.3342015463;
            double[] deconAgentVolumeBySurface = {0.0};
            Calculator = new SuppliesCostCalculator(
                deconAgentCostPerVolume,
                deconMaterialsCost,
                totalRoomSa,
                deconAgentVolume,
                deconAgentVolumeBySurface
            );
        }

        [Test]
        public void CalculateCost()
        {
            double roomVolume = 25000;
            double[] percentOfRoomBySurface = {0.0};

            Assert.AreEqual(4523.80395376547,
                Calculator.CalculateSuppliesCost(roomVolume, percentOfRoomBySurface, true), 1e-6,
                "Incorrect cost calculated(fogging)");
            Assert.AreEqual(153.612754751869,
                Calculator.CalculateSuppliesCost(roomVolume, percentOfRoomBySurface, false), 1e-6,
                "Incorrect cost calculated(surface)");
        }
    }
}