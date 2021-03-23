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
        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays)
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
            var _numberTeams = 4;
            var saToBeSourceReduced = 0.9;
            var roundtripDays = 2.0;
            int numberLabs = 3;
            double sampleTimeTransmitted = 24.0;
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var workDaysCS = 2.6909787627956;
            var workDaysSR = 2.75302474470449;
            var workDaysDC = 12.0;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            var onSiteDays = Calculator.CalculateOnSiteDays(workDaysCS, workDaysSR, workDaysDC, _numberTeams, saToBeSourceReduced, roundtripDays, fractionSampledWipe, fractionSampledHepa, areaContaminated, numberLabs, sampleTimeTransmitted);
            Assert.AreEqual(67.9110154547661, onSiteDays, 1e-6,
                "Incorrect onsite days calculated");
            Assert.AreEqual(1132755.7377855, Calculator.CalculateLaborCost(onSiteDays), 1e-6,
                "Incorrect Labor cost calculated");
        }
    }
}