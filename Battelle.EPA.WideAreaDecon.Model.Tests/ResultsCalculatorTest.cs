using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Providers;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class ResultsCalculatorTest
    {
        private ResultsCalculator Calculator { get; set; }
        private ParameterManager ManageParameters { get; set; }
        private CalculatorManager ManageCalculators { get; set; }
        private DecontaminationPhase Phase { get; set; } 
        private Dictionary<SurfaceType, ContaminationInformation> ScenarioDefinitionDetails { get; set; }

        [SetUp]
        public void Setup()
        {
            Phase = DecontaminationPhase.Indoor;

            ScenarioDefinitionDetails = new Dictionary<SurfaceType, ContaminationInformation>();
            var contaminationInfo = new ContaminationInformation(500, 40);

            var surfaces = SurfaceTypeHelper.GetSurfaceTypesForPhase(Phase).ToList();

            foreach (SurfaceType surface in surfaces)
            {
                ScenarioDefinitionDetails.Add(surface, contaminationInfo);
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
            var scenarioDetails = modifyParameters.GetParameterList();

            ManageParameters = new ParameterManager(
                scenarioDetails.Filters.First(f => f.Name == "Characterization Sampling").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Source Reduction").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Decontamination").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Efficacy").Parameters,
                scenarioDetails.Filters.First(f => f.Name == "Other").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Incident Command").Filters,
                scenarioDetails.Filters.First(f => f.Name == "Cost per Parameter").Filters);

            ManageCalculators = ManageParameters.RedrawParameters(ScenarioDefinitionDetails, Phase);

            Calculator = ManageParameters.SetDrawnParameters(ManageCalculators);
        }

        [Test]
        public void CalculateCost()
        {

            var results = Calculator.CalculateResults(ManageParameters, ManageCalculators, ScenarioDefinitionDetails, Phase);

            Assert.AreEqual(1.68186172674725, results.preDeconCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for pre-decon characterization sampling");
            Assert.AreEqual(8.54526895658592, results.preDeconCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for pre-decon characterization sampling");
            Assert.AreEqual(371736, results.preDeconCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for pre-decon characterization sampling");

            Assert.AreEqual(6.727446906989, results.postDeconCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for post-decon characterization sampling");
            Assert.AreEqual(34.18107582634368, results.postDeconCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for post-decon characterization sampling");
            Assert.AreEqual(1486944, results.postDeconCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for post-decon characterization sampling");

            Assert.AreEqual(8.40930863373625, results.totalCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for total characterization sampling");
            Assert.AreEqual(42.7263447829296, results.totalCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for total characterization sampling");
            Assert.AreEqual(1858680, results.totalCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for total characterization sampling");

            Assert.AreEqual(1.019638794335, results.sourceReductionResults.workDays, 1e-6, "Incorrect work days calculated for source reduction");
            Assert.AreEqual(1.019638794335, results.sourceReductionResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for source reduction");
            Assert.AreEqual(79747, results.sourceReductionResults.phaseCost, 1e-6, "Incorrect phase cost calculated for source reduction");

            Assert.AreEqual(12.0, results.decontaminationResults.workDays, 1e-6, "Incorrect work days calculated for decontamination");
            Assert.AreEqual(14.0, results.decontaminationResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for decontamination");
            //Assert.AreEqual(611701, results.decontaminationResults.phaseCost, 1e-6, "Incorrect phase cost calculated for decontamination");

            Assert.AreEqual(65.7459835772646, results.incidentCommandResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for incident command");
            Assert.AreEqual(1178333, results.incidentCommandResults.phaseCost, 1e-6, "Incorrect phase cost calculated for incident command");

            Assert.AreEqual(50936, results.otherResults.otherCosts, 1e-6, "Incorrect cost calculated for other costs");

            //Assert.AreEqual(3730260, results.generalResults.totalCost, 1e-6, "Incorrect total cost calculated");
            Assert.AreEqual(4, results.generalResults.decontaminationRounds, 1e-6, "Incorrect number of decontamination rounds calculated");
        }
    }
}
