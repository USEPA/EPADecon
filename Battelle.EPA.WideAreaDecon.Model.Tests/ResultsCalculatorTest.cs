using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Tests.Helpers;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class ResultsCalculatorTest
    {
        private ResultsCalculator _sut;
        private ParameterList _scenarioParameters;

        [SetUp]
        public void Setup()
        {
            string testFileName1 = @"InputFiles\ModifyParametersTest.xlsx";
            var modifyParameters = new ExcelModifyParameterParameterListProvider
            {
                FileName = testFileName1,
                GenericSheetNames = new[]
                {
                    ParameterNames.IncidentCommand,
                    ParameterNames.CharacterizationSampling,
                    ParameterNames.SourceReduction,
                    ParameterNames.Decontamination,
                    ParameterNames.VerificationSampling,
                    ParameterNames.ClearanceSampling,
                    ParameterNames.WasteSampling,
                    ParameterNames.Other,
                    ParameterNames.Cost
                }
            };

            _scenarioParameters = modifyParameters.GetParameterList();
            _sut = new ResultsCalculator();
        }


        [Test]
        public void CalculateIndoorScenarioResults_ReturnDictionary()
        {
            // Setup
            var expected = ResultsCalculatorTestAssets.IndoorResults[ResultsCalculatorTestAssets.BuildingCategory];

            var deconElement = DecontaminationElement.Indoor;
            var surfaces = SurfaceTypeHelper.GetSurfaceTypesForElement(deconElement);
            var contaminationInfo = new ContaminationInformation(500, 40);
            var scenarioDefinitionDetails = surfaces.ToDictionary(s => s, _ => contaminationInfo);

            var scenarioParameterManager = new ScenarioParameterManager(
                new CalculatorManager(),
                _scenarioParameters);

            var contaminationAreaByBuildingCategory = new Dictionary<BuildingCategory, Dictionary<SurfaceType, ContaminationInformation>>()
            {
                { ResultsCalculatorTestAssets.BuildingCategory, scenarioDefinitionDetails }
            };

            // SUT
            var result = _sut.CalculateScenarioResults(
                contaminationAreaByBuildingCategory,
                scenarioParameterManager,
                deconElement);

            // Assert
            AssertScenarioRealizationResults(expected, result[ResultsCalculatorTestAssets.BuildingCategory]);
        }

        [Test]
        public void CalculateOutdoorScenarioResults_ReturnScenarioRealizationResults()
        {
            // Setup
            var expected = ResultsCalculatorTestAssets.OutdoorResults;

            var deconElement = DecontaminationElement.Outdoor;
            var surfaces = SurfaceTypeHelper.GetSurfaceTypesForElement(deconElement);
            var contaminationInfo = new ContaminationInformation(500, 40);
            var scenarioDefinitionDetails = surfaces.ToDictionary(s => s, _ => contaminationInfo);

            var scenarioParameterManageer = new ScenarioParameterManager(
                new CalculatorManager(),
                _scenarioParameters);

            // SUT
            var result = _sut.CalculateScenarioResults(
                scenarioDefinitionDetails,
                scenarioParameterManageer,
                deconElement);

            // Assert
            AssertScenarioRealizationResults(expected, result);
        }

        [Test]
        public void CalculateUndergroundScenarioResults_ReturnScenarioRealizationResults()
        {
            // Setup
            var expected = ResultsCalculatorTestAssets.UndergroundResults;

            var deconElement = DecontaminationElement.Underground;

            var surfaces = SurfaceTypeHelper.GetSurfaceTypesForElement(deconElement);
            var contaminationInfo = new ContaminationInformation(500, 40);
            var scenarioDefinitionDetails = surfaces.ToDictionary(s => s, _ => contaminationInfo);

            var scenarioParameterManageer = new ScenarioParameterManager(
                new CalculatorManager(),
                _scenarioParameters);

            // SUT
            var result = _sut.CalculateScenarioResults(
                scenarioDefinitionDetails,
                scenarioParameterManageer,
                deconElement);

            // Assert
            AssertScenarioRealizationResults(expected, result);
        }

        [Test]
        public void CalculateEventResults_ReturnEventResults()
        {
            // Setup
            var indoorResults = ResultsCalculatorTestAssets.IndoorResults[ResultsCalculatorTestAssets.BuildingCategory];
            var elementOnsiteDays = new Dictionary<ElementCategory, double>
            {
                { ElementCategory.CharacterizationSampling, indoorResults.CharacterizationSamplingResults.OnSiteDays },
                { ElementCategory.SourceReduction, indoorResults.SourceReductionResults.OnSiteDays },
                { ElementCategory.Decontamination, indoorResults.DecontaminationResults.OnSiteDays },
                { ElementCategory.VerificationSampling, indoorResults.VerificationSamplingResults.OnSiteDays },
                { ElementCategory.ClearanceSampling, indoorResults.ClearanceSamplingResults.OnSiteDays },
                { ElementCategory.WasteSampling, indoorResults.WasteSamplingResults.OnSiteDays },
            };

            var assignments = new List<Assignment>
            {
                new()
                {
                    ElementCategory = ElementCategory.CharacterizationSampling,
                    DaysToCompletion = elementOnsiteDays[ElementCategory.CharacterizationSampling],
                    SubsequentAssignments = new List<Assignment>
                    {
                        new()
                        {
                            ElementCategory = ElementCategory.SourceReduction,
                            DaysToCompletion = elementOnsiteDays[ElementCategory.SourceReduction],
                            SubsequentAssignments = new List<Assignment>
                            {
                                new()
                                {
                                    ElementCategory = ElementCategory.Decontamination,
                                    DaysToCompletion = elementOnsiteDays[ElementCategory.Decontamination],
                                    SubsequentAssignments = new List<Assignment>
                                    {
                                        new()
                                        {
                                            ElementCategory = ElementCategory.VerificationSampling,
                                            DaysToCompletion = elementOnsiteDays[ElementCategory.VerificationSampling],
                                            SubsequentAssignments = new List<Assignment>
                                            {
                                                new()
                                                {
                                                    ElementCategory = ElementCategory.ClearanceSampling,
                                                    DaysToCompletion = elementOnsiteDays[ElementCategory.ClearanceSampling],
                                                    SubsequentAssignments = new List<Assignment>
                                                    {
                                                        new()
                                                        {
                                                            ElementCategory = ElementCategory.WasteSampling,
                                                            DaysToCompletion = elementOnsiteDays[ElementCategory.WasteSampling]
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };

            var eventParameterManager = new EventParameterManager(
                new CalculatorManager(),
                _scenarioParameters,
                elementOnsiteDays);
            var eventParameters = eventParameterManager.RedrawParameters();
            var eventCalculators = eventParameterManager.SetDrawnParameters(eventParameters);

            // SUT
            var result = _sut.CalculateEventResults(
                eventParameters,
                eventCalculators,
                indoorResults.GeneralResults,
                assignments);

            // Assert
            Assert.AreEqual(65773.048437, result.OtherResults.CharacterizationSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for characterization sampling");
            Assert.AreEqual(20778.479280, result.OtherResults.SourceReductionTravelCost, 1e-6, "Incorrect travel cost calculated for source reduction");
            Assert.AreEqual(58400, result.OtherResults.DecontaminationTravelCost, 1e-6, "Incorrect travel cost calculated for decontamination");
            Assert.AreEqual(65773.048437, result.OtherResults.VerificationSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for verification sampling");
            Assert.AreEqual(65773.048437, result.OtherResults.ClearanceSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for clearance sampling");
            Assert.AreEqual(453123.596015, result.OtherResults.WasteSamplingTravelCost, 1e-6, "Incorrect travel cost calculated for waste sampling");
            Assert.AreEqual(316981.668126, result.OtherResults.IncidentCommandTravelCost, 1e-6, "Incorrect travel cost calculated for incident command");
            Assert.AreEqual(1046602.888733, result.OtherResults.TotalTravelCost, 1e-6, "Incorrect total travel cost calculated");

            Assert.AreEqual(2489076, result.IncidentCommandResults.ElementCost, 1e-6, "Incorrect element cost calculated for incident command");
            Assert.AreEqual(138.880741, result.IncidentCommandResults.OnSiteDays, 1e-6, "Incorrect onsite days calculated for incident command");

            Assert.AreEqual(8170028.888733, result.TotalEventCost, 1e-6, "Incorrect event cost calculated");
            Assert.AreEqual(3000, result.TotalContaminationArea, 1e-6, "Incorrect total contamination area calculated");
            Assert.AreEqual(138.880741, result.TotalEventDuration, 1e-6, "Incorrect total event duration calculated");
            Assert.AreEqual(54000, result.TotalAqueousWasteProduced, 1e-6, "Incorrect total produced aqueous waste calculated");
            Assert.AreEqual(21600, result.TotalSolidWasteProduced, 1e-6, "Incorrect total produced solid waste calculated");
        }

        private static void AssertScenarioRealizationResults(ScenarioRealizationResults expected, ScenarioRealizationResults actual)
        {
            // Characterization Sampling
            Assert.AreEqual(expected.CharacterizationSamplingResults.WorkDays, actual.CharacterizationSamplingResults.WorkDays, 1e-6, "Incorrect work days calculated for characterization sampling");
            Assert.AreEqual(expected.CharacterizationSamplingResults.OnSiteDays, actual.CharacterizationSamplingResults.OnSiteDays, 1e-6, "Incorrect onsite days calculated for characterization sampling");
            Assert.AreEqual(expected.CharacterizationSamplingResults.ElementCost, actual.CharacterizationSamplingResults.ElementCost, 1e-6, "Incorrect element cost calculated for characterization sampling");
            Assert.AreEqual(expected.CharacterizationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.A), actual.CharacterizationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.A), 1e-6, "Incorrect number of ppe level a units calculated for characterization sampling");
            Assert.AreEqual(expected.CharacterizationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.B), actual.CharacterizationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.B), 1e-6, "Incorrect number of ppe level b units calculated for characterization sampling");
            Assert.AreEqual(expected.CharacterizationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.C), actual.CharacterizationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.C), 1e-6, "Incorrect number of ppe level c units calculated for characterization sampling");
            Assert.AreEqual(expected.CharacterizationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.D), actual.CharacterizationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.D), 1e-6, "Incorrect number of ppe level d units calculated for characterization sampling");
            Assert.AreEqual(expected.CharacterizationSamplingResults.VacuumSamples, actual.CharacterizationSamplingResults.VacuumSamples, 1e-6, "Incorrect number of vacuum samples calculated for chracterization sampling");
            Assert.AreEqual(expected.CharacterizationSamplingResults.WipeSamples, actual.CharacterizationSamplingResults.WipeSamples, 1e-6, "Incorrect number of wipe samples calculated for characterization sampling");

            // Source Reduction
            Assert.AreEqual(expected.SourceReductionResults.WorkDays, actual.SourceReductionResults.WorkDays, 1e-6, "Incorrect work days calculated for source reduction");
            Assert.AreEqual(expected.SourceReductionResults.OnSiteDays, actual.SourceReductionResults.OnSiteDays, 1e-6, "Incorrect onsite days calculated for source reduction");
            Assert.AreEqual(expected.SourceReductionResults.ElementCost, actual.SourceReductionResults.ElementCost, 1e-6, "Incorrect element cost calculated for source reduction");
            Assert.AreEqual(expected.SourceReductionResults.PpeUnits.GetValueOrDefault(PpeLevel.A), actual.SourceReductionResults.PpeUnits.GetValueOrDefault(PpeLevel.A), 1e-6, "Incorrect number of ppe level a units calculated for source reduction");
            Assert.AreEqual(expected.SourceReductionResults.PpeUnits.GetValueOrDefault(PpeLevel.B), actual.SourceReductionResults.PpeUnits.GetValueOrDefault(PpeLevel.B), 1e-6, "Incorrect number of ppe level b units calculated for source reduction");
            Assert.AreEqual(expected.SourceReductionResults.PpeUnits.GetValueOrDefault(PpeLevel.C), actual.SourceReductionResults.PpeUnits.GetValueOrDefault(PpeLevel.C), 1e-6, "Incorrect number of ppe level c units calculated for source reduction");
            Assert.AreEqual(expected.SourceReductionResults.PpeUnits.GetValueOrDefault(PpeLevel.D), actual.SourceReductionResults.PpeUnits.GetValueOrDefault(PpeLevel.D), 1e-6, "Incorrect number of ppe level d units calculated for source reduction");

            // Decontamination
            Assert.AreEqual(expected.DecontaminationResults.WorkDays, actual.DecontaminationResults.WorkDays, 1e-6, "Incorrect work days calculated for decontamination");
            Assert.AreEqual(expected.DecontaminationResults.OnSiteDays, actual.DecontaminationResults.OnSiteDays, 1e-6, "Incorrect onsite days calculated for decontamination");
            Assert.AreEqual(expected.DecontaminationResults.ElementCost, actual.DecontaminationResults.ElementCost, 1e-6, "Incorrect element cost calculated for decontamination");
            Assert.AreEqual(expected.DecontaminationResults.PpeUnits.GetValueOrDefault(PpeLevel.A), actual.DecontaminationResults.PpeUnits.GetValueOrDefault(PpeLevel.A), 1e-6, "Incorrect number of ppe level a units calculated for decontamination");
            Assert.AreEqual(expected.DecontaminationResults.PpeUnits.GetValueOrDefault(PpeLevel.B), actual.DecontaminationResults.PpeUnits.GetValueOrDefault(PpeLevel.B), 1e-6, "Incorrect number of ppe level b units calculated for decontamination");
            Assert.AreEqual(expected.DecontaminationResults.PpeUnits.GetValueOrDefault(PpeLevel.C), actual.DecontaminationResults.PpeUnits.GetValueOrDefault(PpeLevel.C), 1e-6, "Incorrect number of ppe level c units calculated for decontamination");
            Assert.AreEqual(expected.DecontaminationResults.PpeUnits.GetValueOrDefault(PpeLevel.D), actual.DecontaminationResults.PpeUnits.GetValueOrDefault(PpeLevel.D), 1e-6, "Incorrect number of ppe level d units calculated for decontamination");
            Assert.AreEqual(expected.DecontaminationResults.DeconAgentVolume.GetValueOrDefault(ApplicationMethod.Fogging), actual.DecontaminationResults.DeconAgentVolume.GetValueOrDefault(ApplicationMethod.Fogging), 1e-6, "Incorrect fogging agent volume calculated for decontamination");

            // Verification Sampling
            Assert.AreEqual(expected.VerificationSamplingResults.WorkDays, actual.VerificationSamplingResults.WorkDays, 1e-6, "Incorrect work days calculated for verification sampling");
            Assert.AreEqual(expected.VerificationSamplingResults.OnSiteDays, actual.VerificationSamplingResults.OnSiteDays, 1e-6, "Incorrect onsite days calculated for verification sampling");
            Assert.AreEqual(expected.VerificationSamplingResults.ElementCost, actual.VerificationSamplingResults.ElementCost, 1e-6, "Incorrect element cost calculated for verification sampling");
            Assert.AreEqual(expected.VerificationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.A), actual.VerificationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.A), 1e-6, "Incorrect number of ppe level a units calculated for verification sampling");
            Assert.AreEqual(expected.VerificationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.B), actual.VerificationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.B), 1e-6, "Incorrect number of ppe level b units calculated for verification sampling");
            Assert.AreEqual(expected.VerificationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.C), actual.VerificationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.C), 1e-6, "Incorrect number of ppe level c units calculated for verification sampling");
            Assert.AreEqual(expected.VerificationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.D), actual.VerificationSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.D), 1e-6, "Incorrect number of ppe level d units calculated for verification sampling");
            Assert.AreEqual(expected.VerificationSamplingResults.VacuumSamples, actual.VerificationSamplingResults.VacuumSamples, 1e-6, "Incorrect number of vacuum samples calculated for verification sampling");
            Assert.AreEqual(expected.VerificationSamplingResults.WipeSamples, actual.VerificationSamplingResults.WipeSamples, 1e-6, "Incorrect number of wipe samples calculated for verification sampling");

            // Clearance Sampling
            Assert.AreEqual(expected.ClearanceSamplingResults.WorkDays, actual.ClearanceSamplingResults.WorkDays, 1e-6, "Incorrect work days calculated for clearance sampling");
            Assert.AreEqual(expected.ClearanceSamplingResults.OnSiteDays, actual.ClearanceSamplingResults.OnSiteDays, 1e-6, "Incorrect onsite days calculated for clearance sampling");
            Assert.AreEqual(expected.ClearanceSamplingResults.ElementCost, actual.ClearanceSamplingResults.ElementCost, 1e-6, "Incorrect element cost calculated for clearance sampling");
            Assert.AreEqual(expected.ClearanceSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.A), actual.ClearanceSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.A), 1e-6, "Incorrect number of ppe level a units calculated for clearance sampling");
            Assert.AreEqual(expected.ClearanceSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.B), actual.ClearanceSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.B), 1e-6, "Incorrect number of ppe level b units calculated for clearance sampling");
            Assert.AreEqual(expected.ClearanceSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.C), actual.ClearanceSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.C), 1e-6, "Incorrect number of ppe level c units calculated for clearance sampling");
            Assert.AreEqual(expected.ClearanceSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.D), actual.ClearanceSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.D), 1e-6, "Incorrect number of ppe level d units calculated for clearance sampling");
            Assert.AreEqual(expected.ClearanceSamplingResults.VacuumSamples, actual.ClearanceSamplingResults.VacuumSamples, 1e-6, "Incorrect number of vacuum samples calculated for clearance sampling");
            Assert.AreEqual(expected.ClearanceSamplingResults.WipeSamples, actual.ClearanceSamplingResults.WipeSamples, 1e-6, "Incorrect number of wipe samples calculated for clearance sampling");

            // Waste Sampling
            Assert.AreEqual(expected.WasteSamplingResults.WorkDays, actual.WasteSamplingResults.WorkDays, 1e-6, "Incorrect work days calculated for waste sampling");
            Assert.AreEqual(expected.WasteSamplingResults.OnSiteDays, actual.WasteSamplingResults.OnSiteDays, 1e-6, "Incorrect onsite days calculated for waste sampling");
            Assert.AreEqual(expected.WasteSamplingResults.ElementCost, actual.WasteSamplingResults.ElementCost, 1e-6, "Incorrect element cost calculated for waste sampling");
            Assert.AreEqual(expected.WasteSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.A), actual.WasteSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.A), 1e-6, "Incorrect number of ppe level a units calculated for waste sampling");
            Assert.AreEqual(expected.WasteSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.B), actual.WasteSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.B), 1e-6, "Incorrect number of ppe level b units calculated for waste sampling");
            Assert.AreEqual(expected.WasteSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.C), actual.WasteSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.C), 1e-6, "Incorrect number of ppe level c units calculated for waste sampling");
            Assert.AreEqual(expected.WasteSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.D), actual.WasteSamplingResults.PpeUnits.GetValueOrDefault(PpeLevel.D), 1e-6, "Incorrect number of ppe level d units calculated for waste sampling");
            Assert.AreEqual(expected.WasteSamplingResults.AqueousWasteSamples, actual.WasteSamplingResults.AqueousWasteSamples, 1e-6, "Incorrect aqueous waste samples calculated for waste sampling");
            Assert.AreEqual(expected.WasteSamplingResults.SolidWasteSamples, actual.WasteSamplingResults.SolidWasteSamples, 1e-6, "Incorrect solid waste samples calculated for waste sampling");

            // General
            Assert.AreEqual(expected.GeneralResults.TotalCost, actual.GeneralResults.TotalCost, 1e-6, "Incorrect total cost calculated");
            Assert.AreEqual(expected.GeneralResults.DecontaminationTreatments, actual.GeneralResults.DecontaminationTreatments, 1e-6, "Incorrect number of decontamination treatments calculated");
            Assert.AreEqual(expected.GeneralResults.AqueousWasteProduced, actual.GeneralResults.AqueousWasteProduced, 1e-6, "Incorrect produced aqueous waste calculated");
            Assert.AreEqual(expected.GeneralResults.SolidWasteProduced, actual.GeneralResults.SolidWasteProduced, 1e-6, "Incorrect produced solid waste calculated");
            Assert.AreEqual(expected.GeneralResults.AreaContaminated, actual.GeneralResults.AreaContaminated, 1e-6, "Incorrect area contaminated calculated");
        }
    }
}
