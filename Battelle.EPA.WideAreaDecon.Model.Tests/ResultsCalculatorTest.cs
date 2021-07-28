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

            Assert.AreEqual(15.3259649849843, indoorResults.characterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for total characterization sampling");
            Assert.AreEqual(49.6430011341777, indoorResults.characterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for total characterization sampling");
            Assert.AreEqual(1922145, indoorResults.characterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for total characterization sampling");

            Assert.AreEqual(1.85829170267553, indoorResults.sourceReductionResults.workDays, 1e-6, "Incorrect work days calculated for source reduction");
            Assert.AreEqual(1.85829170267553, indoorResults.sourceReductionResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for source reduction");
            Assert.AreEqual(77941, indoorResults.sourceReductionResults.phaseCost, 1e-6, "Incorrect phase cost calculated for source reduction");

            Assert.AreEqual(12.0, indoorResults.decontaminationResults.workDays, 1e-6, "Incorrect work days calculated for decontamination");
            Assert.AreEqual(14.0, indoorResults.decontaminationResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for decontamination");
            Assert.AreEqual(515262, indoorResults.decontaminationResults.phaseCost, 1e-6, "Incorrect phase cost calculated for decontamination");

            Assert.AreEqual(17.4479362883868, indoorResults.wasteSamplingResults.workDays, 1e-6, "Incorrect work days calculated for waste sampling");
            Assert.AreEqual(72.4746638966966, indoorResults.wasteSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for waste sampling");
            Assert.AreEqual(2114916, indoorResults.wasteSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for waste sampling");

            Assert.AreEqual(145.97595673355, indoorResults.incidentCommandResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for incident command");
            Assert.AreEqual(2616254, indoorResults.incidentCommandResults.phaseCost, 1e-6, "Incorrect phase cost calculated for incident command");

            Assert.AreEqual(7246518, indoorResults.generalResults.totalCost, 1e-6, "Incorrect total cost calculated");
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

            Assert.AreEqual(273707.906011142, eventResults.otherResults.characterizationSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for characterization sampling");
            Assert.AreEqual(19303.0333884857, eventResults.otherResults.sourceReductionTravelCost, 1e-6, "Incorrect travel cost calculated for source reduction");
            Assert.AreEqual(58400, eventResults.otherResults.decontaminationTravelCost, 1e-6, "Incorrect travel cost calculated for decontamination");
            Assert.AreEqual(394715.718652492, eventResults.otherResults.wasteSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for waste sampling");
            Assert.AreEqual(332945.902650487, eventResults.otherResults.incidentCommandTravelCost, 1e-6, "Incorrect travel cost calculated for incident command");

            Assert.AreEqual(8325590.56070261, eventResults.totalEventCost, 1e-6, "Incorrect event cost calculated");

            Assert.AreEqual(3000, eventResults.totalContaminationArea, 1e-6, "Incorrect total contamination area calculated");
        }
    }
}
