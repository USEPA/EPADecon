using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using LaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.IncidentCommand.LaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }
        [SetUp]
        public void Setup()
        {
            double[] personnelRequiredPerTeam = { 1.0, 0.0, 2.0, 2.0, 4.0 };
            double personnelOverheadDays = 8.0;
            double[] personnelHourlyRate = { 150.0, 90.0, 110.0, 130.0, 190.0 };
            Calculator = new LaborCostCalculator(
                personnelRequiredPerTeam, 
                personnelOverheadDays, 
                personnelHourlyRate,
                new MockCsLaborCostCalculator(),
                new Model.SourceReduction.LaborCostCalculator(1.0, 1.0, new []{1.0}, new []{1.0}, 1.0),
                new Model.Decontamination.LaborCostCalculator(1.0, new []{1.0}, new []{1.0}, 1.0, new []{1.0})
                );

        }
        [Test]
        public void CalculateCost()
        {
            double saToBeSourceReduced = 8000.0;
            double roundtripDays = 2.0;
            Assert.AreEqual(60264.68, Calculator.CalculateLaborCost(saToBeSourceReduced, roundtripDays), 1e-6, "Incorrect Labor cost calculated");
        }
    }
}