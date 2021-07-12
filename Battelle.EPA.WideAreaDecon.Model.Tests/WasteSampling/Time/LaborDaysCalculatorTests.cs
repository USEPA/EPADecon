using System;
using System.Collections.Generic;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.WasteSampling.Time
{
    public class LaborDaysCalculatorTests
    {
        private LaborDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var solidWastePerSurfaceArea = 4.64515;
            var liquidWastePerSurfaceArea = 9.2903;
            var surfaceAreaPerWasteSample = 6.0;
            var volumePerWasteSample = 6.0;
            var wasteSamplesPerHourPerTeam = 6.0;

            Calculator = new LaborDaysCalculator(
                solidWastePerSurfaceArea,
                liquidWastePerSurfaceArea,
                surfaceAreaPerWasteSample,
                volumePerWasteSample,
                wasteSamplesPerHourPerTeam
            );
        }

        [Test]
        public void CalculateLaborDays()
        {
            var numberTeams = 4.0;
            var fractionSampled = 1.0 / 6.0;
            var info = new ContaminationInformation(500.0, 20.0);

            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(1.68186172674725, Calculator.CalculateLaborDays(numberTeams, fractionSampled, areaContaminated), 1e-6, "Incorrect labor days calculated");
        }
    }
}
