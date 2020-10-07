using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            var numTeams = 4.0;
            var saPerWipe = 4.64515;
            var saPerHepaSock = 9.2903;
            var wipesPerHrPerTeam = 6.0;
            var hepaSocksPerHrPerTeam = 6.0;
            var costPerWipe = 19.0;
            var costPerVacuum = 29.0;
            var hepaRentalCostPerDay = 15.0;
            var saToBeWiped = 500.0;
            var saToBeHepa = 500.0;
            Calculator = new SuppliesCostCalculator(
                numTeams,
                saPerWipe,
                saPerHepaSock,
                wipesPerHrPerTeam,
                hepaSocksPerHrPerTeam,
                costPerWipe,
                costPerVacuum,
                hepaRentalCostPerDay,
                saToBeWiped,
                saToBeHepa
            );
        }

        [Test]
        public void CalculateAnalysisQuantCost()
        {
            Assert.AreEqual(3610.116196, Calculator.CalculateSuppliesCost(), 1e-6,
                "Incorrect supplies cost calculated");
            Assert.AreEqual(0.840930863, Calculator.CalculateWorkDays(), 1e-6, "Incorrect work days cost calculated");
        }
    }
}