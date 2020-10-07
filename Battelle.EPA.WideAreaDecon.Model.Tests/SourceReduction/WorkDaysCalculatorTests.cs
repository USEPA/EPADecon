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
            var teamsRequired = 4.0;
            var massRemovedPerHrPerTeam = 453.592;
            var massPerSa = 7.4;
            Calculator = new WorkDaysCalculator(
                teamsRequired,
                massRemovedPerHrPerTeam,
                massPerSa
            );
        }

        [Test]
        public void CalculateCost()
        {
            var saToBeSourceReduced = 8000.0;

            Assert.AreEqual(4.07855517733999, Calculator.CalculateWorkDays(saToBeSourceReduced), 1e-6,
                "Incorrect labor cost calculated");
        }
    }
}