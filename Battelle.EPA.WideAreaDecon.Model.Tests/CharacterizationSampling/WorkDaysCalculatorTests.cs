using System;
using System.Collections.Generic;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepaSock = 9.2903;
            var wipesPerHrPerTeam = 6.0;
            var hepaSocksPerHrPerTeam = 6.0;
            var numberEntriesPerTeamPerDay = 2.0;
            var prepTimePerTeamPerEntry = 0.6;
            var deconLineTimePerTeamPerExit = 0.81;

            Calculator = new WorkDaysCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepaSock,
                wipesPerHrPerTeam,
                hepaSocksPerHrPerTeam,
                numberEntriesPerTeamPerDay,
                prepTimePerTeamPerEntry,
                deconLineTimePerTeamPerExit
            );
        }

        [Test]
        public void CalculateWorkDays()
        {
            var numTeams = 4.0;
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(10.0, Calculator.CalculateWorkDays(numTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated), 1e-6, "Incorrect workdays calculated");
        }
    }
}
