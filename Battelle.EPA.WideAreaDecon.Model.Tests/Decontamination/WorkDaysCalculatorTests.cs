using System;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Decontamination
{
    internal class MockEfficacyCalculator : IEfficacyCalculator
    {
        public double[] CalculateEfficacy(double[] _initialSporeLoading)
        {
            double[] dbl = new double[18];
            dbl[0] = 3.0;
            for (int i = 1; i < 18; i++)
            {
                dbl[i] = 0.0;
            }
            return dbl;
        }
    }

    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceTypes = new Dictionary<SurfaceType, string>()
            {
                { SurfaceType.IndoorInterior, "Indoor Interior"},
                { SurfaceType.IndoorExterior, "Indoor Exterior"},
                { SurfaceType.IndoorCeilings, "Indoor Ceilings"},
                { SurfaceType.IndoorCarpet, "Indoor Carpet"},
                { SurfaceType.IndoorNonCarpet, "Indoor Non-Carpet"},
                { SurfaceType.Hvac, "HVAC" },
                { SurfaceType.IndoorMisc, "Indoor Miscellaneous"},
                { SurfaceType.OutdoorExterior, "Outdoor Exterior"},
                { SurfaceType.Pavement, "Pavement"},
                { SurfaceType.Roofing, "Roofing"},
                { SurfaceType.Water, "Water"},
                { SurfaceType.Soil, "Soil"},
                { SurfaceType.OutdoorMisc, "Outdoor Miscellaneous"},
                { SurfaceType.UndergroundInterior, "Underground Interior"},
                { SurfaceType.UndergroundCeilings, "Underground Ceilings"},
                { SurfaceType.UndergroundCarpet, "Underground Carpet"},
                { SurfaceType.UndergroundNonCarpet, "Underground Non-Carpet"},
                { SurfaceType.UndergroundMisc, "Underground Miscellaneous"}
            };
            var applicationMethods = new Dictionary<SurfaceType, ApplicationMethod>()
            {
                { SurfaceType.IndoorInterior, ApplicationMethod.FoamSpray},
                { SurfaceType.IndoorExterior, ApplicationMethod.LiquidSpray},
                { SurfaceType.IndoorCeilings, ApplicationMethod.Fogging},
                { SurfaceType.IndoorCarpet, ApplicationMethod.Fogging},
                { SurfaceType.IndoorNonCarpet, ApplicationMethod.LiquidImmersion},
                { SurfaceType.Hvac, ApplicationMethod.LiquidSpray },
                { SurfaceType.IndoorMisc, ApplicationMethod.Physical},
                { SurfaceType.OutdoorExterior, ApplicationMethod.LiquidSpray},
                { SurfaceType.Pavement, ApplicationMethod.LiquidSpray},
                { SurfaceType.Roofing, ApplicationMethod.LiquidSpray},
                { SurfaceType.Water, ApplicationMethod.LiquidSpray},
                { SurfaceType.Soil, ApplicationMethod.LiquidSpray},
                { SurfaceType.OutdoorMisc, ApplicationMethod.Physical},
                { SurfaceType.UndergroundInterior, ApplicationMethod.FoamSpray},
                { SurfaceType.UndergroundCeilings, ApplicationMethod.Fogging},
                { SurfaceType.UndergroundCarpet, ApplicationMethod.Fogging},
                { SurfaceType.UndergroundNonCarpet, ApplicationMethod.LiquidImmersion},
                { SurfaceType.UndergroundMisc, ApplicationMethod.LiquidSpray}
            };
            var initialSporeLoading = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.IndoorInterior, 0.0},
                { SurfaceType.IndoorExterior, 0.0},
                { SurfaceType.IndoorCeilings, 0.0},
                { SurfaceType.IndoorCarpet, 0.0},
                { SurfaceType.IndoorNonCarpet, 0.0},
                { SurfaceType.Hvac, 0.0 },
                { SurfaceType.IndoorMisc, 0.0},
                { SurfaceType.OutdoorExterior, 0.0},
                { SurfaceType.Pavement, 0.0},
                { SurfaceType.Roofing, 0.0},
                { SurfaceType.Water, 0.0},
                { SurfaceType.Soil, 0.0},
                { SurfaceType.OutdoorMisc, 0.0},
                { SurfaceType.UndergroundInterior, 0.0},
                { SurfaceType.UndergroundCeilings, 0.0},
                { SurfaceType.UndergroundCarpet, 0.0},
                { SurfaceType.UndergroundNonCarpet, 0.0},
                { SurfaceType.UndergroundMisc, 0.0}
            };
            var desiredSporeThreshold = 2.0;
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>()
            {
                { ApplicationMethod.Aerosol, 0.0},
                { ApplicationMethod.FoamSpray, 3.0},
                { ApplicationMethod.Fogging, 0.0},
                { ApplicationMethod.Fumigation, 0.0},
                { ApplicationMethod.Gel, 0.0},
                { ApplicationMethod.LiquidImmersion, 0.0 },
                { ApplicationMethod.LiquidSpray, 0.0},
                { ApplicationMethod.LiquidSuspension, 0.0},
                { ApplicationMethod.LiquidWipe, 0.0},
                { ApplicationMethod.Physical, 0.0}
            };
            Calculator = new WorkDaysCalculator(
                surfaceTypes,
                applicationMethods,
                initialSporeLoading,
                desiredSporeThreshold,
                treatmentDaysPerAm,
                new MockEfficacyCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {

            Assert.AreEqual(3.0, Calculator.CalculateWorkDays(), 1e-6, "Incorrect cost calculated");

        }
    }
}