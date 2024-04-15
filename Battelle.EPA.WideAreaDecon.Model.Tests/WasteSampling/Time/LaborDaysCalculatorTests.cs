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
            var solidWastePerSurfaceArea = 2.0;
            var liquidWastePerSurfaceArea = 5.0;
            var massPerWasteSample = 4.64515;
            var volumePerWasteSample = 10.0;
            var wasteSamplesPerHourPerTeam = 6.0;

            Calculator = new LaborDaysCalculator(
                solidWastePerSurfaceArea,
                liquidWastePerSurfaceArea,
                massPerWasteSample,
                volumePerWasteSample,
                wasteSamplesPerHourPerTeam
            );
        }

        [Test]
        public void CalculateLaborDays()
        {
            var deconTreatments = 4;
            var numberTeams = 4.0;
            var fractionSampled = 0.3;
            var info = new ContaminationInformation(500.0, 20.0);

            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(17.4479362883868, Calculator.CalculateLaborDays(deconTreatments, numberTeams, fractionSampled, areaContaminated), 1e-6, "Incorrect labor days calculated");
        }
    }
}
