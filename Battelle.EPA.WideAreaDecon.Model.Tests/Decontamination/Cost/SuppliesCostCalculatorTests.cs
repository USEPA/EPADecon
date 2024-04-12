using Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination.Cost
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
                Enum.GetValues(typeof(SurfaceType)).Cast<SurfaceType>().ToDictionary(s => s, s => 1.0),
                Enum.GetValues(typeof(SurfaceType)).Cast<SurfaceType>().ToDictionary(s => s, s => ApplicationMethod.Aerosol)
            );
        }

        [Test]
        public void CalculateCost()
        {
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();
            var treatmentMethods = new Dictionary<SurfaceType, ApplicationMethod>();
            var surfaceTreatments = new Dictionary<SurfaceType, int>();
            var decontaminationRound = new Dictionary<ApplicationMethod, double>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, new ContaminationInformation((3000.00/18.00), 20));
                treatmentMethods.Add(surface, ApplicationMethod.Fogging);
                surfaceTreatments.Add(surface, 2);
            };
            
            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                decontaminationRound.Add(method, 3);
            }

            var decontamintionWorkdays = new List<Dictionary<ApplicationMethod, double>>()
            {
                decontaminationRound,
                decontaminationRound
            };

            var costAndResourceResults = Calculator.CalculateSuppliesCost(areaContaminated, treatmentMethods, surfaceTreatments, decontamintionWorkdays);

            Assert.AreEqual(7485.57668186826, costAndResourceResults.DecontaminationCost, 1e-6, "Incorrect cost calculated");

            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.Aerosol], 1e-6, "Incorrect volume of decontamination agent calculated for Aerosol");
            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.FoamSpray], 1e-6, "Incorrect volume of decontamination agent calculated for Foam Spray");
            Assert.AreEqual(5500.69009086096, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.Fogging], 1e-6, "Incorrect volume of decontamination agent calculated for Fogging");
            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.Fumigation], 1e-6, "Incorrect volume of decontamination agent calculated for Fumigation");
            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.Gel], 1e-6, "Incorrect volume of decontamination agent calculated for Gel");
            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.LiquidImmersion], 1e-6, "Incorrect volume of decontamination agent calculated for LiquidImmersion");
            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.LiquidSpray], 1e-6, "Incorrect volume of decontamination agent calculated for LiquidSpray");
            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.LiquidSuspension], 1e-6, "Incorrect volume of decontamination agent calculated for LiquidSuspension");
            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.LiquidWipe], 1e-6, "Incorrect volume of decontamination agent calculated for LiquidWipe");
            Assert.AreEqual(0.0, costAndResourceResults.TotalDeconAgentVolume[ApplicationMethod.Physical], 1e-6, "Incorrect volume of decontamination agent calculated for Physical");
        }
    }
}