using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    internal class MockWorkDaysCalculator : IWorkDaysCalculator
    {
        public double CalculateWorkDays(double _numberTeams, double saToBeSourceReduced)
        {
            return 4.07855517733999;
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
            var roundtripDays = 2.0;
            var saToBeSourceReduced = 8000.0;
            var costPerTonRemoved = 0.1;

            Assert.AreEqual(137654.447803312, Calculator.CalculateLaborCost( _numberTeams,  roundtripDays,  saToBeSourceReduced,
             costPerTonRemoved), 1e-6, "Incorrect labor cost calculated");
            Assert.AreEqual(6.07855517733999, Calculator.CalculateLaborDays(_numberTeams,  roundtripDays,  saToBeSourceReduced),
                1e-6, "Incorrect labor days calculated");
        }
    }
}