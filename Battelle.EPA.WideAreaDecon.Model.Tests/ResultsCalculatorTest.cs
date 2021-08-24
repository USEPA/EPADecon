using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class ResultsCalculatorTest
    {
        private ResultsCalculator IndoorCalculator { get; set; }
        private ResultsCalculator OutdoorCalculator { get; set; }
        private ResultsCalculator UndergroundCalculator { get; set; }
        private ScenarioParameterManager ManageParameters { get; set; }
        private CalculatorManager ManageCalculatorsIndoor { get; set; }
        private CalculatorManager ManageCalculatorsOutdoor { get; set; }
        private CalculatorManager ManageCalculatorsUnderground { get; set; }
        private Dictionary<SurfaceType, ContaminationInformation> IndoorScenarioDefinitionDetails { get; set; }
        private Dictionary<SurfaceType, ContaminationInformation> OutdoorScenarioDefinitionDetails { get; set; }
        private Dictionary<SurfaceType, ContaminationInformation> UndergroundScenarioDefinitionDetails { get; set; }
        private ParameterList ScenarioParameters { get; set; }

        [SetUp]
        public void Setup()
        {
            IndoorScenarioDefinitionDetails = new Dictionary<SurfaceType, ContaminationInformation>();
            OutdoorScenarioDefinitionDetails = new Dictionary<SurfaceType, ContaminationInformation>();
            UndergroundScenarioDefinitionDetails = new Dictionary<SurfaceType, ContaminationInformation>();
            var contaminationInfo = new ContaminationInformation(500, 40);

            var indoorSurfaces = SurfaceTypeHelper.GetSurfaceTypesForPhase(DecontaminationPhase.Indoor);
            var outdoorSurfaces = SurfaceTypeHelper.GetSurfaceTypesForPhase(DecontaminationPhase.Outdoor);
            var undergroundSurfaces = SurfaceTypeHelper.GetSurfaceTypesForPhase(DecontaminationPhase.Underground);

            foreach (SurfaceType surface in indoorSurfaces)
            {
                IndoorScenarioDefinitionDetails.Add(surface, contaminationInfo);
            }

            foreach (SurfaceType surface in outdoorSurfaces)
            {
                OutdoorScenarioDefinitionDetails.Add(surface, contaminationInfo);
            }

            foreach (SurfaceType surface in undergroundSurfaces)
            {
                UndergroundScenarioDefinitionDetails.Add(surface, contaminationInfo);
            }

            string TestFileName1 = @"InputFiles\ModifyParametersTest.xlsx";
            var modifyParameters = new ExcelModifyParameterParameterListProvider
            {
                FileName = TestFileName1,
                GenericSheetNames = new[]
                {
                    "Incident Command",
                    "Characterization Sampling",
                    "Source Reduction",
                    "Decontamination",
                    "Clearance Sampling",
                    "Waste Sampling",
                    "Other",
                    "Cost per Parameter"
                }
            };
            ScenarioParameters = modifyParameters.GetParameterList();

            ManageParameters = new ScenarioParameterManager(
                ScenarioParameters.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Source Reduction").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Decontamination").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Clearance Sampling").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Waste Sampling").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Efficacy").Parameters,
                ScenarioParameters.Filters.First(f => f.Name == "Incident Command").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Cost per Parameter").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Decontamination Treatment Methods by Surface").Parameters);

            ManageCalculatorsIndoor = ManageParameters.RedrawParameters(IndoorScenarioDefinitionDetails, DecontaminationPhase.Indoor);
            IndoorCalculator = ManageParameters.SetDrawnParameters(ManageCalculatorsIndoor);

            ManageCalculatorsOutdoor = ManageParameters.RedrawParameters(OutdoorScenarioDefinitionDetails, DecontaminationPhase.Outdoor);
            OutdoorCalculator = ManageParameters.SetDrawnParameters(ManageCalculatorsOutdoor);

            ManageCalculatorsUnderground = ManageParameters.RedrawParameters(UndergroundScenarioDefinitionDetails, DecontaminationPhase.Underground);
            UndergroundCalculator = ManageParameters.SetDrawnParameters(ManageCalculatorsUnderground);
        }

        [Test]
        public void CalculateScenarioResults()
        {
            var indoorResults = IndoorCalculator.CalculateScenarioResults(ManageParameters, ManageCalculatorsIndoor, IndoorScenarioDefinitionDetails, DecontaminationPhase.Indoor);

            Assert.AreEqual(3.55573600063148, indoorResults.characterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for total characterization sampling");
            Assert.AreEqual(10.4191432304702, indoorResults.characterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for total characterization sampling");
            Assert.AreEqual(403148, indoorResults.characterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for total characterization sampling");

            Assert.AreEqual(2.15568635102324, indoorResults.sourceReductionResults.workDays, 1e-6, "Incorrect work days calculated for source reduction");
            Assert.AreEqual(2.15568635102324, indoorResults.sourceReductionResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for source reduction");
            Assert.AreEqual(87608, indoorResults.sourceReductionResults.phaseCost, 1e-6, "Incorrect phase cost calculated for source reduction");

            Assert.AreEqual(12.0, indoorResults.decontaminationResults.workDays, 1e-6, "Incorrect work days calculated for decontamination");
            Assert.AreEqual(14.0, indoorResults.decontaminationResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for decontamination");
            Assert.AreEqual(367247, indoorResults.decontaminationResults.phaseCost, 1e-6, "Incorrect phase cost calculated for decontamination");

            Assert.AreEqual(14.2229440025259, indoorResults.clearanceSamplingResults.workDays, 1e-6, "Incorrect work days calculated for clearance sampling");
            Assert.AreEqual(41.6765729218806, indoorResults.clearanceSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for clearance sampling");
            Assert.AreEqual(1612592, indoorResults.clearanceSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for clearance sampling");

            Assert.AreEqual(35.9621353499528, indoorResults.wasteSamplingResults.workDays, 1e-6, "Incorrect work days calculated for waste sampling");
            Assert.AreEqual(90.9888629582626, indoorResults.wasteSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for waste sampling");
            Assert.AreEqual(3017160, indoorResults.wasteSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for waste sampling");

            Assert.AreEqual(167.240265461637, indoorResults.incidentCommandResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for incident command");
            Assert.AreEqual(2997364, indoorResults.incidentCommandResults.phaseCost, 1e-6, "Incorrect phase cost calculated for incident command");

            Assert.AreEqual(8485119, indoorResults.generalResults.totalCost, 1e-6, "Incorrect total cost calculated");
            Assert.AreEqual(4, indoorResults.generalResults.decontaminationRounds, 1e-6, "Incorrect number of decontamination rounds calculated");
        }

        [Test]
        public void CalculateEventResults()
        {
            //var outdoorResults = OutdoorCalculator.CalculateScenarioResults(ManageParameters, ManageCalculatorsOutdoor, OutdoorScenarioDefinitionDetails, DecontaminationPhase.Outdoor);
            //var undergroundResults = UndergroundCalculator.CalculateScenarioResults(ManageParameters, ManageCalculatorsUnderground, UndergroundScenarioDefinitionDetails, DecontaminationPhase.Underground);

            ScenarioRealizationResults outdoorResults = null;
            ScenarioRealizationResults undergroundResults = null;
            
            var indoorResults = new Dictionary<BuildingCategory, ScenarioRealizationResults> 
            {
                { BuildingCategory.Agricultural, IndoorCalculator.CalculateScenarioResults(ManageParameters, ManageCalculatorsIndoor, IndoorScenarioDefinitionDetails, DecontaminationPhase.Indoor) }
            };

            var eventModelRunner = new EventModelRunner(ScenarioParameters, indoorResults, outdoorResults, undergroundResults);

            var eventResults = eventModelRunner.RunEventModel();

            Assert.AreEqual(65821.4591214918, eventResults.otherResults.characterizationSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for characterization sampling");
            Assert.AreEqual(20790.8988141693, eventResults.otherResults.sourceReductionTravelCost, 1e-6, "Incorrect travel cost calculated for source reduction");
            Assert.AreEqual(58400, eventResults.otherResults.decontaminationTravelCost, 1e-6, "Incorrect travel cost calculated for decontamination");
            Assert.AreEqual(231485.836485967, eventResults.otherResults.clearanceSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for clearance sampling");
            Assert.AreEqual(492840.973678792, eventResults.otherResults.wasteSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for waste sampling");
            Assert.AreEqual(380790.597288682, eventResults.otherResults.incidentCommandTravelCost, 1e-6, "Incorrect travel cost calculated for incident command");

            Assert.AreEqual(9724648.7653891, eventResults.totalEventCost, 1e-6, "Incorrect event cost calculated");

            Assert.AreEqual(3000, eventResults.totalContaminationArea, 1e-6, "Incorrect total contamination area calculated");
        }
    }
}
