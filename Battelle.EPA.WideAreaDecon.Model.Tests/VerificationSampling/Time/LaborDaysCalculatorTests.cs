using System;
using System.Collections.Generic;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.VerificationSampling.Time
{
    public class LaborDaysCalculatorTests
    {
        private LaborDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepaSock = 9.2903;
            var wipesPerHourPerTeam = 6.0;
            var hepaSocksPerHourPerTeam = 6.0;

            Calculator = new LaborDaysCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepaSock,
                wipesPerHourPerTeam,
                hepaSocksPerHourPerTeam
            );
        }

        [Test]
        public void CalculateLaborDays()
        {
            var numberTeams = 4.0;
            var fractionSampledWipe = 1.0 / 6.0;
            var fractionSampledHepa = 1.0 / 6.0;
            var info = new ContaminationInformation(500.0, 20.0);

            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(1.68186172674725, Calculator.CalculateLaborDays(numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated), 1e-6, "Incorrect labor days calculated");
        }
    }
}
