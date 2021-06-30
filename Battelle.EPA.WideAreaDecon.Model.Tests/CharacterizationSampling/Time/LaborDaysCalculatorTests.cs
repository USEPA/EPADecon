using System;
using System.Collections.Generic;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling.Time
{
    public class LaborDaysCalculatorTests
    {
        private LaborDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWipe = 0.1;
            var surfaceAreaPerHepaSock = 0.1;
            var wipesPerHourPerTeam = 0.1;
            var hepaSocksPerHourPerTeam = 0.1;

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
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var info = new ContaminationInformation(500.0, 20.0);

            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(10.0, Calculator.CalculateLaborDays(numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated), 1e-6, "Incorrect labor days calculated");
        }
    }
}
