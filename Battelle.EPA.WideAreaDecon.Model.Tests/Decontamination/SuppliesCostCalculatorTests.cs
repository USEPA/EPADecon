using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
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
            
            var deconAgentCostPerVolume = 0.52306056;
            var deconMaterialsCost = 1.53612754751869;
            var deconAgentVolume = 0.3342015463;
            Calculator = new SuppliesCostCalculator(
                deconAgentCostPerVolume,
                deconMaterialsCost,
                deconAgentVolume,
                Enum.GetValues(typeof(SurfaceType)).Cast<SurfaceType>().ToDictionary(s => s, s => 1.0)
            );
        }

        [Test]
        public void CalculateCost()
        {
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();
            var treatmentMethods = new Dictionary<SurfaceType, ApplicationMethod>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, new ContaminationInformation(500, 20));
                treatmentMethods.Add(surface, ApplicationMethod.Fogging);
            }

            Assert.AreEqual(17133.1090429345, Calculator.CalculateSuppliesCost(areaContaminated, treatmentMethods), 1e-6,
                "Incorrect supplies cost calculated");
        }
    }
}