using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.Model.Interface;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.VerificationSampling;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class ResultsCalculator : IResultsCalculator
    {
        #region Scenarios
        // For use with indoor
        public Dictionary<BuildingCategory, ScenarioRealizationResults> CalculateScenarioResults(
            Dictionary<BuildingCategory, Dictionary<SurfaceType, ContaminationInformation>> contaminatedAreaByBuildingCategory,
            ScenarioParameterManager parameterManager,
            DecontaminationElement element)
        {
            var results = contaminatedAreaByBuildingCategory
                .Select(kv => new KeyValuePair<BuildingCategory, ScenarioRealizationResults>(
                    kv.Key,
                    new ScenarioRealizationResults()))
                .ToDictionary(kv => kv.Key, kv => kv.Value);

            foreach (var (category, areaContaminated) in contaminatedAreaByBuildingCategory)
            {
                results[category] = CalculateScenarioRealizationResults(
                    parameterManager,
                    areaContaminated,
                    element);
            }

            return results;
        }

        public ScenarioRealizationResults CalculateScenarioResults(
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            ScenarioParameterManager parameterManager,
            DecontaminationElement element)
        {
            return CalculateScenarioRealizationResults(
                parameterManager,
                areaContaminated,
                element);
        }
        #endregion

        #region Event
        public EventResults CalculateEventResults(
            EventParameters parameters,
            EventCalculators calculators,
            GeneralResults generalScenarioResults,
            List<Assignment> assignments)
        {
            var results = new EventResults
            {
                IncidentCommandResults = new IncidentCommandResults(),
                OtherResults = new OtherResults(),
            };

            // Incident Command
            results.IncidentCommandResults = CalculateIncidentCommandResults(
                assignments,
                calculators.IncidentCommandCostCalculator);

            // Incident Command Travel and Per Diem Costs
            results.OtherResults.IncidentCommandTravelCost = calculators.IncidentCommandCostCalculator
                .CalculateTravelCost(
                    parameters.IncidentCommandParameters.RoundtripDays,
                    parameters.IncidentCommandParameters.PersonnelReqPerTeam,
                    results.IncidentCommandResults.OnSiteDays);

            // Characterization Sampling Travel and Per Diem Costs
            results.OtherResults.CharacterizationSamplingTravelCost = calculators.CharacterizationSamplingCostCalculator
                .CalculateTravelCost(
                    parameters.CharacterizationSamplingParameters.RoundtripDays,
                    parameters.CharacterizationSamplingParameters.NumTeams,
                    parameters.CharacterizationSamplingParameters.PersonnelReqPerTeam,
                    parameters.CharacterizationSamplingParameters.OnsiteDays);

            // Source Reduction Travel and Per Diem Costs
            results.OtherResults.SourceReductionTravelCost = calculators.SourceReductionCostCalculator
                .CalculateTravelCost(
                    parameters.SourceReductionParameters.RoundtripDays,
                    parameters.SourceReductionParameters.NumTeams,
                    parameters.SourceReductionParameters.PersonnelReqPerTeam,
                    parameters.SourceReductionParameters.OnsiteDays);

            // Decontamination Travel and Per Diem Costs
            results.OtherResults.DecontaminationTravelCost = calculators.DecontaminationCostCalculator
                .CalculateTravelCost(
                    parameters.DecontaminationParameters.RoundtripDays,
                    parameters.DecontaminationParameters.NumTeams,
                    parameters.DecontaminationParameters.PersonnelReqPerTeam,
                    parameters.DecontaminationParameters.OnsiteDays);

            // Verification Sampling Travel and Per Diem Costs
            results.OtherResults.VerificationSamplingTravelCost = calculators.VerificationSamplingCostCalculator
                .CalculateTravelCost(
                    parameters.VerificationSamplingParameters.RoundtripDays,
                    parameters.VerificationSamplingParameters.NumTeams,
                    parameters.VerificationSamplingParameters.PersonnelReqPerTeam,
                    parameters.VerificationSamplingParameters.OnsiteDays);

            // Clearance Sampling Travel and Per Diem Costs
            results.OtherResults.ClearanceSamplingTravelCost = calculators.ClearanceSamplingCostCalculator
                .CalculateTravelCost(
                    parameters.ClearanceSamplingParameters.RoundtripDays,
                    parameters.ClearanceSamplingParameters.NumTeams,
                    parameters.ClearanceSamplingParameters.PersonnelReqPerTeam,
                    parameters.ClearanceSamplingParameters.OnsiteDays);

            // Waste Sampling Travel and Per Diem Costs
            results.OtherResults.WasteSamplingTravelCost = calculators.WasteSamplingCostCalculator
                .CalculateTravelCost(
                    parameters.WasteSamplingParameters.RoundtripDays,
                    parameters.WasteSamplingParameters.NumTeams,
                    parameters.WasteSamplingParameters.PersonnelReqPerTeam,
                    parameters.WasteSamplingParameters.OnsiteDays);

            // Total Travel and Per Diem Costs for the Event
            results.OtherResults.TotalTravelCost = results.OtherResults.CharacterizationSamplingTravelCost
                + results.OtherResults.SourceReductionTravelCost
                + results.OtherResults.DecontaminationTravelCost
                + results.OtherResults.VerificationSamplingTravelCost
                + results.OtherResults.ClearanceSamplingTravelCost
                + results.OtherResults.WasteSamplingTravelCost
                + results.OtherResults.IncidentCommandTravelCost;

            // Total Event Cost (including travel and per diem costs)
            results.TotalEventCost = generalScenarioResults.TotalCost
                + results.OtherResults.TotalTravelCost
                + results.IncidentCommandResults.ElementCost;

            // Total Event Contamination Area
            results.TotalContaminationArea = generalScenarioResults.AreaContaminated;

            // Total Waste Quantities for the Event
            results.TotalSolidWasteProduced = generalScenarioResults.SolidWasteProduced;
            results.TotalAqueousWasteProduced = generalScenarioResults.AqueousWasteProduced;

            // Total Event Duration (sum of all the onsite days)
            results.TotalEventDuration = results.IncidentCommandResults.OnSiteDays;

            return results;
        }
        #endregion

        #region Calculation Helpers
        private static ScenarioRealizationResults CalculateScenarioRealizationResults(
            ScenarioParameterManager parameterManager,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            DecontaminationElement element)
        {
            var results = new ScenarioRealizationResults
            {
                CharacterizationSamplingResults = new CharacterizationSamplingResults(),
                SourceReductionResults = new SourceReductionResults(),
                DecontaminationResults = new DecontaminationResults(),
                VerificationSamplingResults = new VerificationSamplingResults(),
                ClearanceSamplingResults = new ClearanceSamplingResults(),
                WasteSamplingResults = new WasteSamplingResults(),
                GeneralResults = new GeneralResults()
            };

            ScenarioParameters parameters = parameterManager.RedrawParameters(areaContaminated, element);
            ScenarioCalculators calculators = parameterManager.SetDrawnParameters(parameters);

            // Characterization Sampling
            results.CharacterizationSamplingResults = CalcualteCharacterizationSamplingResults(
                parameters.CharacterizationSamplingParameters,
                calculators.CharacterizationSamplingCostCalculator,
                areaContaminated);

            // Source Reduction
            results.SourceReductionResults = CalculateSourceReductionResults(
                parameters.SourceReductionParameters,
                parameters.CostParameters.CostPerMassOfMaterialRemoved,
                calculators.SourceReductionCostCalculator,
                areaContaminated);

            // Decontamination
            results.DecontaminationResults = CalculateDecontaminationResults(
                parameters.DecontaminationParameters,
                results.GeneralResults,
                calculators.DecontaminationCostCalculator,
                areaContaminated);
            var deconTreatments = results.GeneralResults.DecontaminationTreatments;

            // Verification Sampling
            results.VerificationSamplingResults = CalculateVerificationSamplingResults(
                parameters.VerificationSamplingParameters,
                deconTreatments,
                calculators.VerificationSamplingCostCalculator,
                areaContaminated);

            // Clearance Sampling
            results.ClearanceSamplingResults = CalculateClearanceSamplingResults(
                parameters.ClearanceSamplingParameters,
                deconTreatments,
                calculators.ClearanceSamplingCostCalculator,
                areaContaminated);

            // Waste Sampling
            results.WasteSamplingResults = CalculateWasteSamplingResults(
                parameters.WasteSamplingParameters,
                deconTreatments,
                results.GeneralResults,
                calculators.WasteSamplingCostCalculator,
                areaContaminated);

            // Total
            var totalContaminatedArea = areaContaminated.Values.Sum(v => v.AreaContaminated);

            results.GeneralResults = new GeneralResults
            {
                TotalCost = results.CharacterizationSamplingResults.ElementCost +
                    results.SourceReductionResults.ElementCost +
                    results.DecontaminationResults.ElementCost +
                    results.VerificationSamplingResults.ElementCost +
                    results.ClearanceSamplingResults.ElementCost +
                    results.WasteSamplingResults.ElementCost,

                AreaContaminated = totalContaminatedArea,

                DecontaminationTreatments = deconTreatments,

                SolidWasteProduced = totalContaminatedArea
                    * parameters.WasteSamplingParameters.SolidWastePerSurfaceArea
                    * parameters.WasteSamplingParameters.FractionSampled
                    * deconTreatments,

                AqueousWasteProduced = totalContaminatedArea
                    * parameters.WasteSamplingParameters.LiquidWastePerSurfaceArea
                    * parameters.WasteSamplingParameters.FractionSampled
                    * deconTreatments,
            };

            return results;
        }

        private static CharacterizationSamplingResults CalcualteCharacterizationSamplingResults(
            CharacterizationSamplingParameters parameters,
            CharacterizationSamplingCostCalculator calculator,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var result = new CharacterizationSamplingResults();

            if (parameters.FractionSampledHepa > 0 &&
                parameters.FractionSampledWipe > 0)
            {
                // CS Time Calculations
                var elementDaysCS = calculator.CalculateTime(
                    parameters.NumTeams,
                    parameters.FractionSampledWipe,
                    parameters.FractionSampledHepa,
                    areaContaminated,
                    parameters.PpeRequired);

                result.WorkDays = elementDaysCS[ElementDays.WorkDays];

                result.OnSiteDays = elementDaysCS[ElementDays.OnsiteDays] +
                    calculator.CalculateElementLag(
                        parameters.NumLabs,
                        parameters.ResultTransmissionToIC,
                        parameters.FractionSampledWipe,
                        parameters.FractionSampledHepa,
                        areaContaminated);

                // CS Cost and Resource Calculations
                var csCostAndResources = calculator.CalculateElementCosts(
                    elementDaysCS,
                    parameters.NumTeams,
                    parameters.FractionSampledWipe,
                    parameters.FractionSampledHepa,
                    areaContaminated,
                    parameters.PpeRequired);

                // CS Cost Storage
                result.ElementCost = Convert.ToInt64(csCostAndResources.SamplingCost);

                // CS Resources Storage
                result.PpeUnits = csCostAndResources.TotalPpeUnits;
                result.VacuumSamples = csCostAndResources.TotalVacuumSamples;
                result.WipeSamples = csCostAndResources.TotalWipeSamples;
            }

            return result;
        }

        private static SourceReductionResults CalculateSourceReductionResults(
            SourceReductionParameters parameters,
            double costPerMassOfMaterialRemoved,
            SourceReductionCostCalculator calculator,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var result = new SourceReductionResults();

            if (parameters.MassToBeSourceReduced > 0)
            {
                // SR Time Calculations
                var elementDaysSR = calculator.CalculateTime(
                    parameters.NumTeams,
                    parameters.MassToBeSourceReduced,
                    areaContaminated.Values.Sum(v => v.AreaContaminated),
                    parameters.PpeRequired);

                result.WorkDays = elementDaysSR[ElementDays.WorkDays];

                result.OnSiteDays = elementDaysSR[ElementDays.OnsiteDays];

                // SR Cost and Resource Calculations
                var srCostAndResources = calculator.CalculateElementCosts(
                    elementDaysSR,
                    parameters.NumTeams,
                    parameters.MassToBeSourceReduced,
                    costPerMassOfMaterialRemoved,
                    parameters.PpeRequired,
                    areaContaminated.Values.Sum(v => v.AreaContaminated));

                // SR Cost Storage
                result.ElementCost = Convert.ToInt64(srCostAndResources.SourceReductionCost);

                // SR Resources Storage
                result.PpeUnits = srCostAndResources.TotalPpeUnits;
            }

            return result;
        }

        private static DecontaminationResults CalculateDecontaminationResults(
            DecontaminationParameters parameters,
            GeneralResults generalResults,
            DecontaminationCostCalculator calcualtor,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var result = new DecontaminationResults();

            // DC Time Calculations
            var decontaminationTimeInformation = calcualtor.CalculateTime();

            result.WorkDays = decontaminationTimeInformation.DecontaminationDays[ElementDays.WorkDays];

            result.OnSiteDays = decontaminationTimeInformation.DecontaminationDays[ElementDays.OnsiteDays];

            // DC Rounds Storage
            generalResults.DecontaminationTreatments = decontaminationTimeInformation.DecontaminationTreatments.Count;

            // DC Cost and Resource Calculations
            var dcCostAndResources = calcualtor.CalculateElementCosts(
                decontaminationTimeInformation.DecontaminationDays,
                parameters.NumTeams,
                parameters.PpeRequired,
                areaContaminated,
                parameters.ApplicationMethods,
                decontaminationTimeInformation.DecontaminationTreatments,
                decontaminationTimeInformation.SurfaceTreatments);

            // DC Cost Storage
            result.ElementCost = Convert.ToInt64(dcCostAndResources.DecontaminationCost);

            // DC Resources Storage
            result.DeconAgentVolume = dcCostAndResources.TotalDeconAgentVolume;
            result.PpeUnits = dcCostAndResources.TotalPpeUnits;

            return result;

        }

        private static VerificationSamplingResults GetRoundOfVerificationSamplingResults(
            VerificationSamplingParameters parameters,
            VerificationSamplingCostCalculator calculator,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var results = new VerificationSamplingResults();

            // VS Time Calculations
            var elementDaysVS = calculator.CalculateTime(
                parameters.NumTeams,
                parameters.FractionSampledWipe,
                parameters.FractionSampledHepa,
                areaContaminated,
                parameters.PpeRequired);

            results.WorkDays = elementDaysVS[ElementDays.WorkDays];

            results.Lag = calculator.CalculateElementLag(
                parameters.NumLabs,
                parameters.ResultTransmissionToIC,
                parameters.FractionSampledWipe,
                parameters.FractionSampledHepa,
                areaContaminated);

            results.OnSiteDays = elementDaysVS[ElementDays.OnsiteDays] + results.Lag;

            // VS Cost and Resource Calculations
            var vsCostAndResources = calculator.CalculateElementCosts(
                elementDaysVS,
                parameters.NumTeams,
                parameters.FractionSampledWipe,
                parameters.FractionSampledHepa,
                areaContaminated,
                parameters.PpeRequired);

            // VS Cost Storage
            results.ElementCost = Convert.ToInt64(vsCostAndResources.SamplingCost);

            // VS Resources Storage
            results.PpeUnits = vsCostAndResources.TotalPpeUnits;
            results.VacuumSamples += vsCostAndResources.TotalVacuumSamples;
            results.WipeSamples += vsCostAndResources.TotalWipeSamples;

            return results;
        }

        private static VerificationSamplingResults CalculateVerificationSamplingResults(
            VerificationSamplingParameters parameters,
            int numberOfDeconTreatments,
            VerificationSamplingCostCalculator calculator,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var result = new VerificationSamplingResults
            {
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 0 },
                    { PpeLevel.C, 0 },
                    { PpeLevel.D, 0 },
                },
            };

            if (parameters.SamplingFrequency != FrequencyValueType.Never &&
                 parameters.FractionSampledHepa > 0 &&
                 parameters.FractionSampledWipe > 0)
            {
                var segmentedVsResults = new List<VerificationSamplingResults>();
                if (parameters.SamplingFrequency == FrequencyValueType.Once)
                {
                    // VS Occurs Once After All Decontamination
                    segmentedVsResults.Add(GetRoundOfVerificationSamplingResults(parameters, calculator, areaContaminated));
                }
                else if (parameters.SamplingFrequency == FrequencyValueType.Multiple)
                {
                    // VS Occurs After Each Decontamination Treatment
                    for (var deconTreatment = 0; deconTreatment < numberOfDeconTreatments; deconTreatment++)
                    {
                        segmentedVsResults.Add(GetRoundOfVerificationSamplingResults(parameters, calculator, areaContaminated));
                    }
                }

                result = VerificationSamplingResults.SumResults(segmentedVsResults);
            }

            return result;
        }

        private static ClearanceSamplingResults GetRoundOfClearanceSamplingResults(
            ClearanceSamplingParameters parameters,
            ClearanceSamplingCostCalculator calculator,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var results = new ClearanceSamplingResults();

            //CL Time Calculations
            var elementDaysCL = calculator.CalculateTime(
                parameters.NumTeams,
                parameters.FractionSampledWipe,
                parameters.FractionSampledHepa,
                areaContaminated,
                parameters.PpeRequired);

            results.WorkDays = elementDaysCL[ElementDays.WorkDays];

            results.Lag = calculator.CalculateElementLag(
                parameters.NumLabs,
                parameters.ResultTransmissionToIC,
                parameters.FractionSampledWipe,
                parameters.FractionSampledHepa,
                areaContaminated);

            results.OnSiteDays = elementDaysCL[ElementDays.OnsiteDays] + results.Lag;

            // CL Cost and Resource Calculations
            var clCostAndResources = calculator.CalculateElementCosts(
                elementDaysCL,
                parameters.NumTeams,
                parameters.FractionSampledWipe,
                parameters.FractionSampledHepa,
                areaContaminated,
                parameters.PpeRequired);

            // CL Cost Storage
            results.ElementCost = Convert.ToInt64(clCostAndResources.SamplingCost);

            // CL Resources Storage
            results.PpeUnits = clCostAndResources.TotalPpeUnits;
            results.VacuumSamples = clCostAndResources.TotalVacuumSamples;
            results.WipeSamples = clCostAndResources.TotalWipeSamples;

            return results;
        }

        private static ClearanceSamplingResults CalculateClearanceSamplingResults(
            ClearanceSamplingParameters parameters,
            int numberOfDeconTreatments,
            ClearanceSamplingCostCalculator calculator,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var result = new ClearanceSamplingResults
            {
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 0 },
                    { PpeLevel.C, 0 },
                    { PpeLevel.D, 0 },
                }
            };

            if (parameters.SamplingFrequency != FrequencyValueType.Never &&
                parameters.FractionSampledHepa > 0 &&
                parameters.FractionSampledWipe > 0)
            {
                var segmentedClResults = new List<ClearanceSamplingResults>();
                if (parameters.SamplingFrequency == FrequencyValueType.Once)
                {
                    // CL Occurs Once After All Decontamination
                    segmentedClResults.Add(GetRoundOfClearanceSamplingResults(parameters, calculator, areaContaminated));
                }
                else if (parameters.SamplingFrequency == FrequencyValueType.Multiple)
                {
                    // CL Occurs After Each Decontamination Treatment
                    for (var deconTreatment = 0; deconTreatment < numberOfDeconTreatments; deconTreatment++)
                    {
                        segmentedClResults.Add(GetRoundOfClearanceSamplingResults(parameters, calculator, areaContaminated));
                    }
                }
                result = ClearanceSamplingResults.SumResults(segmentedClResults);
            }

            return result;
        }

        private static WasteSamplingResults CalculateWasteSamplingResults(
            WasteSamplingParameters parameters,
            int numberOfDeconTreatments,
            GeneralResults generalResults,
            WasteSamplingCostCalculator calculator,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var result = new WasteSamplingResults();

            if (parameters.FractionSampled > 0)
            {
                // WS Time Calculations
                var elementDaysWS = calculator.CalculateTime(
                    numberOfDeconTreatments,
                    parameters.NumTeams,
                    parameters.FractionSampled,
                    areaContaminated,
                    parameters.PpeRequired);

                result.WorkDays = elementDaysWS[ElementDays.WorkDays];

                result.OnSiteDays = elementDaysWS[ElementDays.OnsiteDays] +
                    calculator.CalculateElementLag(
                        numberOfDeconTreatments,
                        parameters.NumLabs,
                        parameters.ResultTransmissionToIC,
                        parameters.FractionSampled,
                        areaContaminated);

                // WS Cost and Resource Calculations
                var wsCostAndResources = calculator.CalculateElementCosts(
                    numberOfDeconTreatments,
                    elementDaysWS,
                    parameters.NumTeams,
                    parameters.FractionSampled,
                    areaContaminated,
                    parameters.PpeRequired);

                // WS Cost Storage
                result.ElementCost = Convert.ToInt64(wsCostAndResources.WasteSamplingCost);

                // WS Resources Storage
                result.PpeUnits = wsCostAndResources.TotalPpEUnits;
                result.AqueousWasteSamples = wsCostAndResources.TotalAqueousWasteSamples;
                result.SolidWasteSamples = wsCostAndResources.TotalSolidWasteSamples;

                // Waste Quantities Calculations
                generalResults.SolidWasteProduced = areaContaminated.Values.Sum(v => v.AreaContaminated) * parameters.SolidWastePerSurfaceArea * numberOfDeconTreatments;
                generalResults.AqueousWasteProduced = areaContaminated.Values.Sum(v => v.AreaContaminated) * parameters.LiquidWastePerSurfaceArea * numberOfDeconTreatments;
            }

            return result;
        }

        private static IncidentCommandResults CalculateIncidentCommandResults(
            List<Assignment> assignments,
            IncidentCommandCostCalculator calculator)
        {
            var result = new IncidentCommandResults();

            // IC Time Calculations
            result.OnSiteDays = calculator.CalculateTime(assignments);

            // IC Cost Calculations
            result.ElementCost = Convert.ToInt64(calculator.CalculateElementCosts(
                result.OnSiteDays));

            return result;
        }
        #endregion
    }
}
