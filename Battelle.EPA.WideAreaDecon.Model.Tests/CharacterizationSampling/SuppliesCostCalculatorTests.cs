using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepaSock = 9.2903;
            var wipesPerHrPerTeam = 6.0;
            var hepaSocksPerHrPerTeam = 6.0;
            var costPerWipe = 19.0;
            var costPerVacuum = 29.0;
            var hepaRentalCostPerDay = 15.0;
            Calculator = new SuppliesCostCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepaSock,
                wipesPerHrPerTeam,
                hepaSocksPerHrPerTeam,
                costPerWipe,
                costPerVacuum,
                hepaRentalCostPerDay
            );
        }

        [Test]
        public void CalculateCost()
        {
            var _numberTeams = 4.0;
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var info = new ContaminationInformation(100.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            Assert.AreEqual(3610.116196, Calculator.CalculateSuppliesCost(_numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated), 1e-6,
                "Incorrect supplies cost calculated");
            Assert.AreEqual(0.840930863, Calculator.CalculateWorkDays(_numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated), 1e-6, "Incorrect work days cost calculated");
        
        }
    }
}