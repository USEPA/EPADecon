using NUnit.Framework;
using LaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.IncidentCommand.LaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    class MockCsLaborCostCalculator : Model.CharacterizationSampling.ILaborCostCalculator
    {
        public double CalculateLaborCost(double PersonnelRoundTripDays) => 84993.281164225;

        public double CalculateEntExitLaborCost() => 21393.2811642251;

        public double CalculateLaborDays(double PersonnelRoundTripDays) => 1.34093086337363;
    }
    class MockSrLaborCostCalculator : Model.SourceReduction.ILaborCostCalculator
    {
        public double CalculateLaborCost(double PersonnelRoundTripDays, double SAToBeSourceReduced, double CostPerTonRemoved) => 137654.447803312;
        
        public double CalculateLaborDays(double PersonnelRoundTripDays, double SAToBeSourceReduced) => 4.07855517733999;
    }
    class MockDLaborCostCalculator : Model.Decontamination.ILaborCostCalculator
    {
        public double CalculateLaborCost(double PersonnelRoundTripDays) => 120400.0;
        
        public double CalculateLaborDays(double PersonnelRoundTripDays) => 5.0;
    }
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
                new MockSrLaborCostCalculator(),
                new MockDLaborCostCalculator()
                );

        }
        [Test]
        public void CalculateCost()
        {
            double saToBeSourceReduced = 8000.0;
            double roundtripDays = 2.0;

            Assert.AreEqual((18.4194860407136), Calculator.CalculateOnSiteDays(saToBeSourceReduced, roundtripDays), 1e-6, "Incorrect onsite days calculated");
            Assert.AreEqual((227064.684772735), Calculator.CalculateLaborCost(saToBeSourceReduced, roundtripDays), 1e-6, "Incorrect Labor cost calculated");
        }
    }
}