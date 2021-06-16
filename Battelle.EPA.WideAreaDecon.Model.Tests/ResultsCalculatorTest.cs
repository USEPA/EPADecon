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
                    "Other",
                    "Cost per Parameter"
                }
            };
            ScenarioParameters = modifyParameters.GetParameterList();

            ManageParameters = new ScenarioParameterManager(
                ScenarioParameters.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Source Reduction").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Decontamination").Filters,
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

            Assert.AreEqual(1.68186172674725, indoorResults.preDeconCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for pre-decon characterization sampling");
            Assert.AreEqual(8.54526895658592, indoorResults.preDeconCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for pre-decon characterization sampling");
            Assert.AreEqual(328949, indoorResults.preDeconCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for pre-decon characterization sampling");

            Assert.AreEqual(6.727446906989, indoorResults.postDeconCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for post-decon characterization sampling");
            Assert.AreEqual(34.18107582634368, indoorResults.postDeconCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for post-decon characterization sampling");
            Assert.AreEqual(1315796, indoorResults.postDeconCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for post-decon characterization sampling");

            Assert.AreEqual(8.40930863373625, indoorResults.totalCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for total characterization sampling");
            Assert.AreEqual(42.7263447829296, indoorResults.totalCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for total characterization sampling");
            Assert.AreEqual(1644745, indoorResults.totalCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for total characterization sampling");

            Assert.AreEqual(1.019638794335, indoorResults.sourceReductionResults.workDays, 1e-6, "Incorrect work days calculated for source reduction");
            Assert.AreEqual(1.019638794335, indoorResults.sourceReductionResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for source reduction");
            Assert.AreEqual(46601, indoorResults.sourceReductionResults.phaseCost, 1e-6, "Incorrect phase cost calculated for source reduction");

            Assert.AreEqual(12.0, indoorResults.decontaminationResults.workDays, 1e-6, "Incorrect work days calculated for decontamination");
            Assert.AreEqual(14.0, indoorResults.decontaminationResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for decontamination");
            Assert.AreEqual(370722.0, indoorResults.decontaminationResults.phaseCost, 1e-6, "Incorrect phase cost calculated for decontamination");

            Assert.AreEqual(65.7459835772646, indoorResults.incidentCommandResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for incident command");
            Assert.AreEqual(1178333, indoorResults.incidentCommandResults.phaseCost, 1e-6, "Incorrect phase cost calculated for incident command");

            Assert.AreEqual(3240401.0, indoorResults.generalResults.totalCost, 1e-6, "Incorrect total cost calculated");
            Assert.AreEqual(4, indoorResults.generalResults.decontaminationRounds, 1e-6, "Incorrect number of decontamination rounds calculated");
        }

        [Test]
        public void CalculateEventResults()
        {
            var indoorResults = new Dictionary<BuildingCategory, ScenarioRealizationResults>();
            
            foreach (BuildingCategory building in Enum.GetValues(typeof(BuildingCategory)))
            {
                indoorResults.Add(building, IndoorCalculator.CalculateScenarioResults(ManageParameters, ManageCalculatorsIndoor, IndoorScenarioDefinitionDetails, DecontaminationPhase.Indoor));
            }
         
            var outdoorResults = OutdoorCalculator.CalculateScenarioResults(ManageParameters, ManageCalculatorsOutdoor, OutdoorScenarioDefinitionDetails, DecontaminationPhase.Outdoor);
            var undergroundResults = UndergroundCalculator.CalculateScenarioResults(ManageParameters, ManageCalculatorsUnderground, UndergroundScenarioDefinitionDetails, DecontaminationPhase.Underground);

            var phaseOnsiteDays = new Dictionary<PhaseCategory, double>
            {
                { PhaseCategory.CharacterizationSampling, outdoorResults.totalCharacterizationSamplingResults.onSiteDays + undergroundResults.totalCharacterizationSamplingResults.onSiteDays },
                { PhaseCategory.SourceReduction, outdoorResults.sourceReductionResults.onSiteDays + undergroundResults.sourceReductionResults.onSiteDays },
                { PhaseCategory.Decontamination, outdoorResults.decontaminationResults.onSiteDays + undergroundResults.decontaminationResults.onSiteDays },
                { PhaseCategory.IncidentCommand, outdoorResults.incidentCommandResults.onSiteDays + undergroundResults.incidentCommandResults.onSiteDays }
            };

            foreach (var building in indoorResults.Keys.ToList())
            {
                phaseOnsiteDays[PhaseCategory.CharacterizationSampling] += indoorResults[building].totalCharacterizationSamplingResults.onSiteDays;
                phaseOnsiteDays[PhaseCategory.SourceReduction] += indoorResults[building].sourceReductionResults.onSiteDays;
                phaseOnsiteDays[PhaseCategory.Decontamination] += indoorResults[building].decontaminationResults.onSiteDays;
                phaseOnsiteDays[PhaseCategory.IncidentCommand] += indoorResults[building].incidentCommandResults.onSiteDays;
            }

            var parameterManager = new EventParameterManager(
                ScenarioParameters.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Source Reduction").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Decontamination").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Other").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Incident Command").Filters,
                ScenarioParameters.Filters.First(f => f.Name == "Cost per Parameter").Filters,
                phaseOnsiteDays);

            var calculatorManager = parameterManager.RedrawParameters();

            var resultsCalculator = parameterManager.SetDrawnParameters(calculatorManager);

            var eventResults = resultsCalculator.CalculateEventResults(calculatorManager, indoorResults, outdoorResults, undergroundResults);
        }
    }
}
