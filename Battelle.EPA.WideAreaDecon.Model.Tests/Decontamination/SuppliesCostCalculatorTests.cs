using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

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
                { SurfaceType.Hvac, 1.0 }
            };
            var deconAgentCostPerVolume = 0.52306056;
            var deconMaterialsCost = 1.53612754751869;
            var deconAgentVolume = 0.3342015463;
            Calculator = new SuppliesCostCalculator(
                deconAgentCostPerVolume,
                deconMaterialsCost,
                deconAgentVolume,
                deconAgentVolumeBySurface
            );
        }

        [Test]
        public void CalculateCost()
        {
            var percentOfRoomBySurface = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.Hvac, 1.0 }
            };
            double roomVolume = 25000;

            Assert.AreEqual(2.059188108,
                Calculator.NonFoggingSuppliesCostCalculator(percentOfRoomBySurface), 1e-6,
                "Incorrect cost calculated(non fog)");
            Assert.AreEqual(4371.727327,
                Calculator.FoggingSuppliesCostCalculator(roomVolume), 1e-6,
                "Incorrect cost calculated(fogging)");
        }
    }
}