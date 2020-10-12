using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using NUnit.Framework;
using LaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.IncidentCommand.LaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    internal class MockCsLaborCostCalculator : ILaborCostCalculator
    {
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            return 84993.281164225;
        }

        public double CalculateEntExitLaborCost(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            return 21393.2811642251;
        }

        public double CalculateLaborDays(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            return 1.34093086337363;
        }
    }

    internal class MockSrLaborCostCalculator : Model.SourceReduction.ILaborCostCalculator
    {
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced,
            double costPerTonRemoved)
        {
            return 137654.447803312;
        }

        public double CalculateLaborDays(double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced)
        {
            return 4.07855517733999;
        }
    }

    internal class MockDLaborCostCalculator : Model.Decontamination.ILaborCostCalculator
    {
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays)
        {
            return 120400.0;
        }

        public double CalculateLaborDays(double personnelRoundTripDays)
        {
            return 5.0;
        }
    }

    public class LaborCostCalculatorTests
    {
        private LaborCostCalculator Calculator { get; set; }

        [SetUp]
        public void Setup()
        {
            double[] personnelRequiredPerTeam = {1.0, 0.0, 2.0, 2.0, 4.0};
            var personnelOverheadDays = 8.0;
            double[] personnelHourlyRate = {150.0, 90.0, 110.0, 130.0, 190.0};
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
            var saToBeSourceReduced = 8000.0;
            var roundtripDays = 2.0;

            Assert.AreEqual(18.4194860407136, Calculator.CalculateOnSiteDays(saToBeSourceReduced, roundtripDays), 1e-6,
                "Incorrect onsite days calculated");
            Assert.AreEqual(227064.684772735, Calculator.CalculateLaborCost(saToBeSourceReduced, roundtripDays), 1e-6,
                "Incorrect Labor cost calculated");
        }
    }
}