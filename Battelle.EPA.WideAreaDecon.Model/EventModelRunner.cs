using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.Model.Interface;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class EventModelRunner : IEventModelRunner
    {
        private readonly IResultsCalculator _resultsCalculator;
        private readonly ICalculatorManager _calculatorManager;
        private readonly IAssignmentGenerator _assignmentGenerator;

        public EventModelRunner(
            IResultsCalculator resultsCalculator,
            ICalculatorManager calculatorManager,
            IAssignmentGenerator assignmentGenerator)
        {
            _resultsCalculator = resultsCalculator;
            _calculatorManager = calculatorManager;
            _assignmentGenerator = assignmentGenerator;
        }

        public EventResults RunEventModel(
            Dictionary<BuildingCategory, BuildingCategoryResults> indoorResults,
            ScenarioRealizationResults outdoorResults,
            ScenarioRealizationResults undergroundResults,
            ParameterList scenarioParameters)
        {
            bool hasIndoorResults = indoorResults != null && indoorResults.Values.Any();
            if (!hasIndoorResults && outdoorResults == null && undergroundResults == null)
            {
                throw new ApplicationException("An indoor, outdoor, or underground scenario must be run");
            }

            var scenarioRealizationResults = new List<ScenarioRealizationResults>();
            var generalResultObjects = new List<GeneralResults>();
            if (hasIndoorResults)
            {
                var buildingResults = indoorResults
                    .Where(ir => ir.Value != null)
                    .Select(ir => ir.Value.RealizationResults);
                generalResultObjects.AddRange(buildingResults.Select(br => br.GeneralResults));
                scenarioRealizationResults.AddRange(buildingResults);
            }

            if (outdoorResults != null)
            {
                generalResultObjects.Add(outdoorResults.GeneralResults);
                scenarioRealizationResults.Add(outdoorResults);
            }

            if (undergroundResults != null)
            {
                generalResultObjects.Add(undergroundResults.GeneralResults);
                scenarioRealizationResults.Add(undergroundResults);
            }

            var generalResults = SumGeneralResults(generalResultObjects);
            var elementOnsiteDays = SumOnsiteDays(indoorResults, outdoorResults, undergroundResults);

            var parameterManager = new EventParameterManager(
                _calculatorManager,
                scenarioParameters,
                elementOnsiteDays);

            var parameters = parameterManager.RedrawParameters();
            var calculatorSet = parameterManager.SetDrawnParameters(parameters);

            var assignments = _assignmentGenerator.GetAssignments(
                scenarioRealizationResults,
                generalResults.DecontaminationTreatments,
                parameters.VerificationSamplingParameters.SamplingFrequency,
                parameters.ClearanceSamplingParameters.SamplingFrequency);

            return _resultsCalculator.CalculateEventResults(parameters, calculatorSet, generalResults, assignments);
        }

        private static GeneralResults SumGeneralResults(List<GeneralResults> generalResultSet)
        {
            var overallGeneralResults = new GeneralResults();

            foreach (var result in generalResultSet)
            {
                overallGeneralResults.TotalCost += result.TotalCost;
                overallGeneralResults.AreaContaminated += result.AreaContaminated;
                overallGeneralResults.DecontaminationTreatments += result.DecontaminationTreatments;
                overallGeneralResults.SolidWasteProduced += result.SolidWasteProduced;
                overallGeneralResults.AqueousWasteProduced += result.AqueousWasteProduced;
            }

            return overallGeneralResults;
        }

        private static Dictionary<ElementCategory, double> SumOnsiteDays(
            Dictionary<BuildingCategory, BuildingCategoryResults> indoorResults,
            ScenarioRealizationResults outdoorResults,
            ScenarioRealizationResults undergroundResults) => new Dictionary<ElementCategory, double>
        {
            {
                ElementCategory.CharacterizationSampling,
                indoorResults.Aggregate(0.0, (x, y) => (y.Value?.RealizationResults.CharacterizationSamplingResults.OnSiteDays ?? 0.0) + x)
                    + outdoorResults?.CharacterizationSamplingResults.OnSiteDays ?? 0.0
                    + undergroundResults?.CharacterizationSamplingResults.OnSiteDays ?? 0.0
            },
            {
                ElementCategory.SourceReduction,
                indoorResults.Aggregate(0.0, (x, y) => (y.Value?.RealizationResults.SourceReductionResults.OnSiteDays ?? 0.0) + x)
                    + outdoorResults?.SourceReductionResults.OnSiteDays ?? 0.0
                    + undergroundResults?.SourceReductionResults.OnSiteDays ?? 0.0
            },
            {
                ElementCategory.Decontamination,
                indoorResults.Aggregate(0.0, (x, y) => (y.Value?.RealizationResults.DecontaminationResults.OnSiteDays ?? 0.0) + x)
                    + outdoorResults?.DecontaminationResults.OnSiteDays ?? 0.0
                    + undergroundResults?.DecontaminationResults.OnSiteDays ?? 0.0
            },
            {
                ElementCategory.VerificationSampling,
                indoorResults.Aggregate(0.0, (x, y) => (y.Value?.RealizationResults.VerificationSamplingResults.OnSiteDays ?? 0.0) + x)
                    + outdoorResults?.VerificationSamplingResults.OnSiteDays ?? 0.0
                    + undergroundResults?.VerificationSamplingResults.OnSiteDays ?? 0.0
            },
            {
                ElementCategory.ClearanceSampling,
                indoorResults.Aggregate(0.0, (x, y) => (y.Value?.RealizationResults.ClearanceSamplingResults.OnSiteDays ?? 0.0) + x)
                    + outdoorResults?.ClearanceSamplingResults.OnSiteDays ?? 0.0
                    + undergroundResults?.ClearanceSamplingResults.OnSiteDays ?? 0.0
            },
            {
                ElementCategory.WasteSampling,
                indoorResults.Aggregate(0.0, (x, y) => (y.Value?.RealizationResults.WasteSamplingResults.OnSiteDays ?? 0.0) + x)
                    + outdoorResults?.WasteSamplingResults.OnSiteDays ?? 0.0
                    + undergroundResults?.WasteSamplingResults.OnSiteDays ?? 0.0
            }
        };
    }
}
