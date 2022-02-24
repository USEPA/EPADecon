using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using Battelle.EPA.WideAreaDecon.Model.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class ResultsCalculator
    {
        public CharacterizationSamplingCostCalculator _characterizationSamplingCostCalculator { get; set; }
        public SourceReductionCostCalculator _sourceReductionCostCalculator { get; set; }
        public DecontaminationCostCalculator _decontaminationCostCalculator { get; set; }
        public ClearanceSamplingCostCalculator _clearanceSamplingCostCalculator { get; set; }
        public WasteSamplingCostCalculator _wasteSamplingCostCalculator { get; set; }
        public IncidentCommandCostCalculator _incidentCommandCostCalculator { get; set; }

        public ScenarioRealizationResults CalculateScenarioResults(
            ScenarioParameterManager parameterManager,
            CalculatorManager parameters,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            DecontaminationElement element)
        {
            var results = new ScenarioRealizationResults
            {
                characterizationSamplingResults = new GenericElementResults(),
                sourceReductionResults = new GenericElementResults(),
                decontaminationResults = new GenericElementResults(),
                clearanceSamplingResults = new GenericElementResults(),
                wasteSamplingResults = new GenericElementResults(),
                incidentCommandResults = new IncidentCommandResults(),
                generalResults = new GeneralResults()
            };

            // Characterization Sampling
            if (parameters._characterizationSamplingParameters.fractionSampledHepa > 0 ||
                parameters._characterizationSamplingParameters.fractionSampledWipe > 0)
            {
                var elementDaysCS = _characterizationSamplingCostCalculator.CalculateTime(
                    parameters._characterizationSamplingParameters.numTeams,
                    parameters._characterizationSamplingParameters.fractionSampledWipe,
                    parameters._characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated,
                    parameters._characterizationSamplingParameters.ppeRequired);

                results.characterizationSamplingResults.workDays = elementDaysCS[ElementDays.WorkDays];

                results.characterizationSamplingResults.onSiteDays = elementDaysCS[ElementDays.OnsiteDays] +
                    _characterizationSamplingCostCalculator.CalculateElementLag( 
                        parameters._characterizationSamplingParameters.numLabs,
                        parameters._characterizationSamplingParameters.resultTransmissionToIC,
                        parameters._characterizationSamplingParameters.fractionSampledWipe,
                        parameters._characterizationSamplingParameters.fractionSampledHepa,
                        areaContaminated);

                results.characterizationSamplingResults.elementCost = Convert.ToInt64(_characterizationSamplingCostCalculator.CalculateElementCosts(
                    elementDaysCS,
                    parameters._characterizationSamplingParameters.numTeams,
                    parameters._characterizationSamplingParameters.fractionSampledWipe,
                    parameters._characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated,
                    parameters._characterizationSamplingParameters.ppeRequired));
            }

            // Source Reduction
            if (parameters._sourceReductionParameters.massToBeSourceReduced == 0)
            {
                results.sourceReductionResults.workDays = 0.0;
                results.sourceReductionResults.onSiteDays = 0.0;
                results.sourceReductionResults.elementCost = 0;
            }
            else
            {
                var elementDaysSR = _sourceReductionCostCalculator.CalculateTime(
                    parameters._sourceReductionParameters.numTeams,
                    parameters._sourceReductionParameters.massToBeSourceReduced,
                    areaContaminated.Values.Sum(v => v.AreaContaminated),
                    parameters._sourceReductionParameters.ppeRequired);

                results.sourceReductionResults.workDays = elementDaysSR[ElementDays.WorkDays];

                results.sourceReductionResults.onSiteDays = elementDaysSR[ElementDays.OnsiteDays];

                results.sourceReductionResults.elementCost = Convert.ToInt64(_sourceReductionCostCalculator.CalculateElementCosts(
                    elementDaysSR,
                    parameters._sourceReductionParameters.numTeams,
                    parameters._sourceReductionParameters.massToBeSourceReduced,
                    parameters._costParameters.costPerMassOfMaterialRemoved,
                    parameters._sourceReductionParameters.ppeRequired,
                    areaContaminated.Values.Sum(v => v.AreaContaminated)));
            }

            // Decontamination
            var decontaminationWorkdays = _decontaminationCostCalculator.CalculateTime();

            results.decontaminationResults.workDays = decontaminationWorkdays.Item2[ElementDays.WorkDays];
            results.generalResults.decontaminationRounds = decontaminationWorkdays.Item1.Count;

            results.decontaminationResults.onSiteDays = decontaminationWorkdays.Item2[ElementDays.OnsiteDays];

            results.decontaminationResults.elementCost = Convert.ToInt64(_decontaminationCostCalculator.CalculateElementCosts(
                decontaminationWorkdays.Item2,
                parameters._decontaminationParameters.numTeams,
                parameters._decontaminationParameters.ppeRequired,
                areaContaminated,
                parameters._decontaminationParameters.applicationMethods,
                decontaminationWorkdays.Item1));

            // Clearance Sampling
            for (int i = 0; i < results.generalResults.decontaminationRounds; i++)
            {
                // redraw clearance sampling values for each new round of decontamination
                parameters = parameterManager.RedrawParameters(areaContaminated, element);

                var resultsCalculator = parameterManager.SetDrawnParameters(parameters);

                if (parameters._clearanceSamplingParameters.fractionSampledHepa > 0 ||
                    parameters._clearanceSamplingParameters.fractionSampledWipe > 0)
                {
                    var elementDaysCLS = _clearanceSamplingCostCalculator.CalculateTime(
                    parameters._clearanceSamplingParameters.numTeams,
                    parameters._clearanceSamplingParameters.fractionSampledWipe,
                    parameters._clearanceSamplingParameters.fractionSampledHepa,
                    areaContaminated,
                    parameters._clearanceSamplingParameters.ppeRequired);

                    results.clearanceSamplingResults.workDays += elementDaysCLS[ElementDays.WorkDays];

                    results.clearanceSamplingResults.onSiteDays += elementDaysCLS[ElementDays.OnsiteDays] +
                        _clearanceSamplingCostCalculator.CalculateElementLag(
                            parameters._clearanceSamplingParameters.numLabs,
                            parameters._clearanceSamplingParameters.resultTransmissionToIC,
                            parameters._clearanceSamplingParameters.fractionSampledWipe,
                            parameters._clearanceSamplingParameters.fractionSampledHepa,
                            areaContaminated);

                    results.clearanceSamplingResults.elementCost += Convert.ToInt64(_clearanceSamplingCostCalculator.CalculateElementCosts(
                        elementDaysCLS,
                        parameters._clearanceSamplingParameters.numTeams,
                        parameters._clearanceSamplingParameters.fractionSampledWipe,
                        parameters._clearanceSamplingParameters.fractionSampledHepa,
                        areaContaminated,
                        parameters._clearanceSamplingParameters.ppeRequired));
                }
            }

            // Waste Sampling Results
            results.generalResults.solidWasteProduced = 0.0;
            results.generalResults.aqueousWasteProduced = 0.0;

            for (int i = 0; i < results.generalResults.decontaminationRounds; i++)
            {
                parameters = parameterManager.RedrawParameters(areaContaminated, element);
                var resultsCalculator = parameterManager.SetDrawnParameters(parameters);

                if (parameters._wasteSamplingParameters.fractionSampled == 0)
                {
                    results.wasteSamplingResults.elementCost = 0.0;
                    results.wasteSamplingResults.workDays = 0.0;
                    results.wasteSamplingResults.onSiteDays = 0.0;
                }
                else
                {
                    var elementDaysWS = _wasteSamplingCostCalculator.CalculateTime(
                        parameters._wasteSamplingParameters.numTeams,
                        parameters._wasteSamplingParameters.fractionSampled,
                        areaContaminated,
                        parameters._wasteSamplingParameters.ppeRequired);

                    results.wasteSamplingResults.workDays += elementDaysWS[ElementDays.WorkDays];

                    results.wasteSamplingResults.onSiteDays += elementDaysWS[ElementDays.OnsiteDays] +
                        _wasteSamplingCostCalculator.CalculateElementLag(
                            parameters._wasteSamplingParameters.numLabs,
                            parameters._wasteSamplingParameters.resultTransmissionToIC,
                            parameters._wasteSamplingParameters.fractionSampled,
                            areaContaminated);

                    results.wasteSamplingResults.elementCost += Convert.ToInt64(_wasteSamplingCostCalculator.CalculateElementCosts(
                        elementDaysWS,
                        parameters._wasteSamplingParameters.numTeams,
                        parameters._wasteSamplingParameters.fractionSampled,
                        areaContaminated,
                        parameters._wasteSamplingParameters.ppeRequired));

                    results.generalResults.solidWasteProduced += areaContaminated.Values.Sum(v => v.AreaContaminated) * parameters._wasteSamplingParameters.solidWastePerSurfaceArea;
                    results.generalResults.aqueousWasteProduced += areaContaminated.Values.Sum(v => v.AreaContaminated) * parameters._wasteSamplingParameters.liquidWastePerSurfaceArea;
                }
            }
            
            // Incident Command
            results.incidentCommandResults.onSiteDays = _incidentCommandCostCalculator.CalculateTime(
                results.characterizationSamplingResults.onSiteDays,
                results.sourceReductionResults.onSiteDays,
                results.decontaminationResults.onSiteDays,
                results.clearanceSamplingResults.onSiteDays,
                results.wasteSamplingResults.onSiteDays);

            results.incidentCommandResults.elementCost = Convert.ToInt64(_incidentCommandCostCalculator.CalculateElementCosts(
                results.incidentCommandResults.onSiteDays));

            // Total
            results.generalResults.totalCost = results.characterizationSamplingResults.elementCost +
                results.sourceReductionResults.elementCost +
                results.decontaminationResults.elementCost +
                results.clearanceSamplingResults.elementCost +
                results.wasteSamplingResults.elementCost +
                results.incidentCommandResults.elementCost;

            results.generalResults.areaContaminated = areaContaminated.Values.Sum(v => v.AreaContaminated);

            return results;
        }

        public EventResults CalculateEventResults(CalculatorManager parameters, ScenarioRealizationResults scenarioResults)
        {
            var results = new EventResults
            {
                otherResults = new OtherResults()
            };

            //Characterization Sampling Travel and Per Diem Costs
            results.otherResults.characterizationSamplingTravelCost = _characterizationSamplingCostCalculator.CalculateTravelCost(
                parameters._characterizationSamplingParameters.roundtripDays,
                parameters._characterizationSamplingParameters.numTeams,
                parameters._characterizationSamplingParameters.personnelReqPerTeam,
                parameters._characterizationSamplingParameters.onsiteDays);

            //Source Reduction Travel and Per Diem Costs
            results.otherResults.sourceReductionTravelCost = _sourceReductionCostCalculator.CalculateTravelCost(
                parameters._sourceReductionParameters.roundtripDays,
                parameters._sourceReductionParameters.numTeams,
                parameters._sourceReductionParameters.personnelReqPerTeam,
                parameters._sourceReductionParameters.onsiteDays);

            //Decontamination Travel and Per Diem Costs
            results.otherResults.decontaminationTravelCost = _decontaminationCostCalculator.CalculateTravelCost(
                parameters._decontaminationParameters.roundtripDays,
                parameters._decontaminationParameters.numTeams,
                parameters._decontaminationParameters.personnelReqPerTeam,
                parameters._decontaminationParameters.onsiteDays);

            //Clearance Sampling Travel and Per Diem Costs
            results.otherResults.clearanceSamplingTravelCost = _clearanceSamplingCostCalculator.CalculateTravelCost(
                parameters._clearanceSamplingParameters.roundtripDays,
                parameters._clearanceSamplingParameters.numTeams,
                parameters._clearanceSamplingParameters.personnelReqPerTeam,
                parameters._clearanceSamplingParameters.onsiteDays);

            //Waste Sampling Travel and Per Diem Costs
            results.otherResults.wasteSamplingTravelCost = _wasteSamplingCostCalculator.CalculateTravelCost(
                parameters._wasteSamplingParameters.roundtripDays,
                parameters._wasteSamplingParameters.numTeams,
                parameters._wasteSamplingParameters.personnelReqPerTeam,
                parameters._wasteSamplingParameters.onsiteDays);

            //Incident Command Travel and Per Diem Costs
            results.otherResults.incidentCommandTravelCost = _incidentCommandCostCalculator.CalculateTravelCost(
                parameters._incidentCommandParameters.roundtripDays,
                parameters._incidentCommandParameters.personnelReqPerTeam,
                parameters._incidentCommandParameters.onsiteDays);

            //Total Travel and Per Diem Costs for the Event
            results.otherResults.totalTravelCost = results.otherResults.characterizationSamplingTravelCost +
                results.otherResults.sourceReductionTravelCost +
                results.otherResults.decontaminationTravelCost +
                results.otherResults.clearanceSamplingTravelCost +
                results.otherResults.wasteSamplingTravelCost +
                results.otherResults.incidentCommandTravelCost;

            //Total event cost including travel and per diem costs
            results.totalEventCost = scenarioResults.generalResults.totalCost + results.otherResults.totalTravelCost;

            //Total event duration (sum of all onsite days)
            results.totalEventDuration = scenarioResults.incidentCommandResults.onSiteDays;

            //Total event contamination area
            results.totalContaminationArea = scenarioResults.generalResults.areaContaminated;

            //Total waste quantities for the event
            results.totalSolidWasteProduced = scenarioResults.generalResults.solidWasteProduced;
            results.totalAqueousWasteProduced = scenarioResults.generalResults.aqueousWasteProduced;

            return results;
        }
    }
}
