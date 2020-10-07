using NUnit.Framework;
using SuppliesCostCalculator = Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.SuppliesCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.CharacterizationSampling
{
    public class SuppliesCostCalculatorTests
    {
        private SuppliesCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double numTeams = 4.0;
            double saPerWipe = 4.64515;
            double saPerHepaSock = 9.2903;
            double wipesPerHrPerTeam = 6.0;
            double hepaSocksPerHrPerTeam = 6.0;
            double costPerWipe = 19.0;
            double costPerVacuum = 29.0;
            double hepaRentalCostPerDay = 15.0;
            double saToBeWiped = 500.0;
            double saToBeHepa = 500.0;
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
            Assert.AreEqual(3610.116196, Calculator.CalculateSuppliesCost(), 1e-6, "Incorrect supplies cost calculated");
            Assert.AreEqual(0.840930863, Calculator.CalculateWorkDays(), 1e-6, "Incorrect work days cost calculated");
        }
    }
}