using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction.Cost
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var personnelPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.333 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 3.0 },
                { PersonnelLevel.PL4, 0.67 }
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 150.0 },
                { PersonnelLevel.PL1, 90.0 },
                { PersonnelLevel.PL2, 110.0 },
                { PersonnelLevel.PL3, 130.0 },
                { PersonnelLevel.PL4, 190.0 }
            };
            var massPerSa = 7.4;

            Calculator = new LaborCostCalculator(
                personnelPerTeam,
                personnelHourlyRate,
                massPerSa
            );
        }

        [Test]
        public void CalculateCost()
        {
            var numberTeams = 4.0;
            var saToBeSourceReduced = 1.0;
            var area = 3000.0;
            var costPerTonRemoved = 0.1;
            var onsiteDays = 2.45732949434734;

            Assert.AreEqual(82102.8672022434, Calculator.CalculateLaborCost(onsiteDays, numberTeams, saToBeSourceReduced,
             costPerTonRemoved, area), 1e-6, "Incorrect labor cost calculated");
        }
    }
}