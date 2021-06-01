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
        public double CalculateLaborCost(double workDays, double _numberTeams,
            double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 121767.74958828;
        }

        public double CalculateEntExitLaborCost(double workDays, double _numberTeams, double fractionSampledWipe, 
            double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 68458.4997255202;
        }

        public double CalculateLaborDays(double workDays)
        {
            return 3.1909787627956;
        }
    }

    internal class MockPhaseLagTimeCalculator : Model.CharacterizationSampling.IPhaseLagCalculator
    {
        public double CalculatePhaseLagTime(int numberLabs, double sampleTimeTransmitted, double fractionSampledWipe, 
            double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 39.967011947266;
        }
    }

    internal class MockSrLaborCostCalculator : Model.SourceReduction.ILaborCostCalculator
    {
        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced,
            double costPerTonRemoved)
        {
            return 95489.3284008536;
        }

        public double CalculateLaborDays(double workDays)
        {
            return 2.75302474470449;
        }
    }

    internal class MockDLaborCostCalculator : Model.Decontamination.ILaborCostCalculator
    {
        public double CalculateLaborCost(double workDays, double _numberTeams)
        {
            return 361200;
        }

        public double CalculateLaborDays(double workDays)
        {
            return 14.0;
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