using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

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
            
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated[surface].AreaContaminated = 250;
            }

            Assert.AreEqual(205.918810751869,
                Calculator.NonFoggingSuppliesCostCalculator(areaContaminated), 1e-6,
                "Incorrect cost calculated(non fog)");
            Assert.AreEqual(438.5552474488785,
                Calculator.FoggingSuppliesCostCalculator(areaContaminated), 1e-6,
                "Incorrect cost calculated(fogging)");
        }
    }
}