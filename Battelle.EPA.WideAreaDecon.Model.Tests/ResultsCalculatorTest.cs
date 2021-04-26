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

            var contaminationInfo = new ContaminationInformation(500, 40);
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
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

            Assert.AreEqual(2.6909787627956, results.preDeconCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for pre-decon characterization sampling");
            Assert.AreEqual(33.8902598509935, results.preDeconCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for pre-decon characterization sampling");
            Assert.AreEqual(666877, results.preDeconCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for pre-decon characterization sampling");

            Assert.AreEqual(2.6909787627956, results.postDeconCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for post-decon characterization sampling");
            Assert.AreEqual(33.8902598509935, results.postDeconCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for post-decon characterization sampling");
            Assert.AreEqual(666877, results.postDeconCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for post-decon characterization sampling");

            Assert.AreEqual(2.6909787627956, results.totalCharacterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for total characterization sampling");
            Assert.AreEqual(33.8902598509935, results.totalCharacterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for total characterization sampling");
            Assert.AreEqual(666877, results.totalCharacterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for total characterization sampling");

            Assert.AreEqual(2.75302474470449, results.sourceReductionResults.workDays, 1e-6, "Incorrect work days calculated for source reduction");
            Assert.AreEqual(2.75302474470449, results.sourceReductionResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for source reduction");
            Assert.AreEqual(259638, results.sourceReductionResults.phaseCost, 1e-6, "Incorrect phase cost calculated for source reduction");

            Assert.AreEqual(12.0, results.decontaminationResults.workDays, 1e-6, "Incorrect work days calculated for decontamination");
            Assert.AreEqual(14.0, results.decontaminationResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for decontamination");
            //Assert.AreEqual(611701, results.decontaminationResults.phaseCost, 1e-6, "Incorrect phase cost calculated for decontamination");

            Assert.AreEqual(58.643284595698, results.incidentCommandResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for incident command");
            Assert.AreEqual(1051034, results.incidentCommandResults.phaseCost, 1e-6, "Incorrect phase cost calculated for incident command");

            Assert.AreEqual(49161, results.otherResults.otherCosts, 1e-6, "Incorrect cost calculated for other costs");

            Assert.AreEqual(2638411, results.generalResults.totalCost, 1e-6, "Incorrect total cost calculated");
            Assert.AreEqual(4, results.generalResults.decontaminationRounds, 1e-6, "Incorrect number of decontamination rounds calculated");
        }
    }
}
