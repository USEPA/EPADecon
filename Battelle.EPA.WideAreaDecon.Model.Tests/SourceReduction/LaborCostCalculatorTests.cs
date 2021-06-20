using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    internal class MockWorkDaysCalculator : IWorkDaysCalculator
    {
        public double CalculateWorkDays(double _numberTeams, double saToBeSourceReduced, double area)
        {
            return 2.75302474470449;
        }
    }

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
            var personnelOverhead = 0.0;
            var massPerSa = 7.4;
            Calculator = new LaborCostCalculator(
                personnelOverhead,
                personnelPerTeam,
                personnelHourlyRate,
                massPerSa,
                new MockWorkDaysCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var _numberTeams = 4.0;
            var saToBeSourceReduced = 0.9;
            var area = 9000.0;
            var costPerTonRemoved = 0.1;
            var workDays = 2.75302474470449;

            Assert.AreEqual(95489.3284008536, Calculator.CalculateLaborCost(workDays, _numberTeams, saToBeSourceReduced,
             costPerTonRemoved, area), 1e-6, "Incorrect labor cost calculated");
        }
    }
}