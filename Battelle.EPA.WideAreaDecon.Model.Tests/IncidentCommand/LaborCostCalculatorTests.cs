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
            return 115407.74958828;
        }

        public double CalculateEntExitLaborCost(double workDays, double _numberTeams, double fractionSampledWipe, 
            double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 102687.74958828;
        }

        public double CalculateLaborDays(double workDays)
        {
            return 4.53646814419341;
        }
    }

    internal class MockPhaseLagTimeCalculator : Model.CharacterizationSampling.IPhaseLagCalculator
    {
        public double CalculatePhaseLagTime(int numberLabs, double sampleTimeTransmitted, double fractionSampledWipe, 
            double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return 40.9764266644272;
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
            return 4.12953711705674;
        }
    }

    internal class MockDLaborCostCalculator : Model.Decontamination.ILaborCostCalculator
    {
        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays)
        {
            return 240800;
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
            var workDaysCS = 4.03646814419341;
            var workDaysSR = 4.12953711705674;
            var workDaysDC = 3.0;
            var info = new ContaminationInformation(500.0, 20.0);
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            var onSiteDays = Calculator.CalculateOnSiteDays(workDaysCS, workDaysSR, workDaysDC, _numberTeams, saToBeSourceReduced, roundtripDays, fractionSampledWipe, fractionSampledHepa, areaContaminated, numberLabs, sampleTimeTransmitted);
            Assert.AreEqual(71.6424319256773, onSiteDays, 1e-6,
                "Incorrect onsite days calculated");
            Assert.AreEqual(796663.843013532, Calculator.CalculateLaborCost(onSiteDays), 1e-6,
                "Incorrect Labor cost calculated");
        }
    }
}