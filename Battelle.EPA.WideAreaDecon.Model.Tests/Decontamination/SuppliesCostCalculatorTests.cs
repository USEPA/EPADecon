using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var deconAgentVolumeBySurface = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.S1, 0.0 }
            };
            var deconAgentCostPerVolume = 0.52306056;
            var deconMaterialsCost = 1.53612754751869;
            double totalRoomSa = 100;
            var deconAgentVolume = 0.3342015463;
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
            var percentOfRoomBySurface = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.S1, 0.0 }
            };
            double roomVolume = 25000;

            Assert.AreEqual(4523.80395376547,
                Calculator.NonFoggingSuppliesCostCalculator(percentOfRoomBySurface), 1e-6,
                "Incorrect cost calculated(fogging)");
            Assert.AreEqual(153.612754751869,
                Calculator.FoggingSuppliesCostCalculator(roomVolume), 1e-6,
                "Incorrect cost calculated(surface)");
        }
    }
}