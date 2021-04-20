using System;
using NUnit.Framework;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using LaborCostCalculator = Battelle.EPA.WideAreaDecon.Model.IncidentCommand.LaborCostCalculator;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.IncidentCommand
{
    internal class MockCsLaborCostCalculator : Model.CharacterizationSampling.ILaborCostCalculator
    {
        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays,
            double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 84993.281164225;
        }

        public double CalculateEntExitLaborCost(double workDays, double _numberTeams, double fractionSampledWipe, 
            double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 21393.2811642251;
        }

        public double CalculateLaborDays(double workDays)
        {
            return 1.30729362883868;
        }
    }

    internal class MockPhaseLagTimeCalculator : Model.CharacterizationSampling.IPhaseLagCalculator
    {
        public double CalculatePhaseLagTime(int numberLabs, double sampleTimeTransmitted, double fractionSampledWipe, 
            double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 10.6178806540723;
        }
    }

    internal class MockSrLaborCostCalculator : Model.SourceReduction.ILaborCostCalculator
    {
        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced,
            double costPerTonRemoved)
        {
            return 137654.447803312;
        }

        public double CalculateLaborDays(double workDays)
        {
            return 4.07855517733999;
        }
    }

    internal class MockDLaborCostCalculator : Model.Decontamination.ILaborCostCalculator
    {

        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays)
        {
            return 120400.0;
        }

        public double CalculateLaborDays(double workDays)
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
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                {PersonnelLevel.OSC, 1.0},
                {PersonnelLevel.PL1, 0.0},
                {PersonnelLevel.PL2, 2.0},
                {PersonnelLevel.PL3, 2.0},
                {PersonnelLevel.PL4, 4.0}
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                {PersonnelLevel.OSC, 150.0},
                {PersonnelLevel.PL1, 90.0},
                {PersonnelLevel.PL2, 110.0},
                {PersonnelLevel.PL3, 130.0},
                {PersonnelLevel.PL4, 190.0}
            };
            var personnelOverheadDays = 8.0;
            Calculator = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelOverheadDays,
                personnelHourlyRate,
                new MockCsLaborCostCalculator(),
                new MockPhaseLagTimeCalculator(),
                new MockSrLaborCostCalculator(),
                new MockDLaborCostCalculator()
            );
        }

        [Test]
        public void CalculateCost()
        {
            var onsiteDaysCS = 67.4428920064922;
            var onsiteDaysSR = 2.75302474470449;
            var onsiteDaysDC = 14.0;

            var onSiteDays = Calculator.CalculateOnSiteDays(onsiteDaysCS, onsiteDaysSR, onsiteDaysDC);
            Assert.AreEqual(92.1959167511967, onSiteDays, 1e-6, "Incorrect onsite days calculated");
            Assert.AreEqual(1537827.89140996, Calculator.CalculateLaborCost(onSiteDays), 1e-6, "Incorrect Labor cost calculated");
        }
    }
}