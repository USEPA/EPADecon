using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.SourceReduction
{
    public class WorkDaysCalculatorTests
    {
        private WorkDaysCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var massRemovedPerHrPerTeam = 453.592;
            var massPerSa = 7.4;
            Calculator = new WorkDaysCalculator(
                massRemovedPerHrPerTeam,
                massPerSa
            );
        }

        [Test]
        public void CalculateCost()
        {
            var _numberTeams = 4.0;
            var saToBeSourceReduced = 0.5;
            var area = 16000.0;

            Assert.AreEqual(4.07855517733999, Calculator.CalculateWorkDays(_numberTeams, saToBeSourceReduced, area), 1e-6,
                "Incorrect labor cost calculated");
        }
    }
}