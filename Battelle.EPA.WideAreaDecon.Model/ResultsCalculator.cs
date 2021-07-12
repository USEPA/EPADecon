﻿using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
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
        public WasteSamplingCostCalculator _wasteSamplingCostCalculator { get; set; }
        public IncidentCommandCostCalculator _incidentCommandCostCalculator { get; set; }

        public ScenarioRealizationResults CalculateScenarioResults(
            ScenarioParameterManager parameterManager,
            CalculatorManager parameters,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            DecontaminationPhase phase)
        {
            var results = new ScenarioRealizationResults
            {
                preDeconCharacterizationSamplingResults = new GenericPhaseResults(),
                postDeconCharacterizationSamplingResults = new GenericPhaseResults(),
                totalCharacterizationSamplingResults = new GenericPhaseResults(),
                sourceReductionResults = new GenericPhaseResults(),
                decontaminationResults = new GenericPhaseResults(),
                wasteSamplingResults = new GenericPhaseResults(),
                incidentCommandResults = new IncidentCommandResults(),
                generalResults = new GeneralResults()
            };

            // Pre-Decon Characterization Sampling
            if (parameters._characterizationSamplingParameters.fractionSampledHepa == 0 &&
                parameters._characterizationSamplingParameters.fractionSampledWipe == 0)
            {
                results.preDeconCharacterizationSamplingResults.workDays = 0.0;
                results.preDeconCharacterizationSamplingResults.onSiteDays = 0.0;
                results.preDeconCharacterizationSamplingResults.phaseCost = 0;
            }
            else
            {
                var phaseDaysCS = _characterizationSamplingCostCalculator.CalculateTime(
                    parameters._characterizationSamplingParameters.numTeams,
                    parameters._characterizationSamplingParameters.fractionSampledWipe,
                    parameters._characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated);

                results.preDeconCharacterizationSamplingResults.workDays = phaseDaysCS[PhaseDays.WorkDays];

                results.preDeconCharacterizationSamplingResults.onSiteDays = phaseDaysCS[PhaseDays.OnsiteDays] +
                    _characterizationSamplingCostCalculator.CalculatePhaseLag( 
                        parameters._characterizationSamplingParameters.numLabs,
                        parameters._characterizationSamplingParameters.resultTransmissionToIC,
                        parameters._characterizationSamplingParameters.fractionSampledWipe,
                        parameters._characterizationSamplingParameters.fractionSampledHepa,
                        areaContaminated);

                results.preDeconCharacterizationSamplingResults.phaseCost = Convert.ToInt64(_characterizationSamplingCostCalculator.CalculatePhaseCosts(
                    phaseDaysCS,
                    parameters._characterizationSamplingParameters.numTeams,
                    parameters._characterizationSamplingParameters.fractionSampledWipe,
                    parameters._characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated,
                    parameters._characterizationSamplingParameters.ppeRequired));
            }

            // Source Reduction
            if (parameters._sourceReductionParameters.surfaceAreaToBeSourceReduced == 0)
            {
                results.sourceReductionResults.workDays = 0.0;
                results.sourceReductionResults.onSiteDays = 0.0;
                results.sourceReductionResults.phaseCost = 0;
            }
            else
            {
                var phaseDaysSR = _sourceReductionCostCalculator.CalculateTime(
                    parameters._sourceReductionParameters.numTeams,
                    parameters._sourceReductionParameters.surfaceAreaToBeSourceReduced,
                    areaContaminated.Values.Sum(v => v.AreaContaminated));

                results.sourceReductionResults.workDays = phaseDaysSR[PhaseDays.WorkDays];

                results.sourceReductionResults.onSiteDays = phaseDaysSR[PhaseDays.OnsiteDays];

                results.sourceReductionResults.phaseCost = Convert.ToInt64(_sourceReductionCostCalculator.CalculatePhaseCosts(
                    phaseDaysSR,
                    parameters._sourceReductionParameters.numTeams,
                    parameters._sourceReductionParameters.surfaceAreaToBeSourceReduced,
                    parameters._costParameters.costPerMassOfMaterialRemoved,
                    parameters._sourceReductionParameters.ppeRequired,
                    areaContaminated.Values.Sum(v => v.AreaContaminated)));
            }

            // Decontamination
            var decontaminationWorkdays = _decontaminationCostCalculator.CalculateTime();

            results.decontaminationResults.workDays = decontaminationWorkdays.Item2[PhaseDays.WorkDays];
            results.generalResults.decontaminationRounds = decontaminationWorkdays.Item1.Count;

            results.decontaminationResults.onSiteDays = decontaminationWorkdays.Item2[PhaseDays.OnsiteDays];

            results.decontaminationResults.phaseCost = Convert.ToInt64(_decontaminationCostCalculator.CalculatePhaseCosts(
                decontaminationWorkdays.Item2,
                parameters._decontaminationParameters.numTeams,
                parameters._decontaminationParameters.ppeRequired,
                areaContaminated,
                parameters._decontaminationParameters.applicationMethods,
                decontaminationWorkdays.Item1));

            // Post-Decon Characterization Sampling
            results.postDeconCharacterizationSamplingResults.workDays = 0.0;
            results.postDeconCharacterizationSamplingResults.onSiteDays = 0.0;
            results.postDeconCharacterizationSamplingResults.phaseCost = 0;

            for (int i = 0; i < results.generalResults.decontaminationRounds; i++)
            {
                // redraw characterization sampling values for each new round of decontamination
                parameters = parameterManager.RedrawParameters(areaContaminated, phase);

                var resultsCalculator = parameterManager.SetDrawnParameters(parameters);

                if (parameters._characterizationSamplingParameters.fractionSampledHepa > 0 ||
                    parameters._characterizationSamplingParameters.fractionSampledWipe > 0)
                {
                    var phaseDaysCS = _characterizationSamplingCostCalculator.CalculateTime(
                    parameters._characterizationSamplingParameters.numTeams,
                    parameters._characterizationSamplingParameters.fractionSampledWipe,
                    parameters._characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated);

                    results.postDeconCharacterizationSamplingResults.workDays += phaseDaysCS[PhaseDays.WorkDays];

                    results.postDeconCharacterizationSamplingResults.onSiteDays += phaseDaysCS[PhaseDays.OnsiteDays] + 
                        _characterizationSamplingCostCalculator.CalculatePhaseLag(
                            parameters._characterizationSamplingParameters.numLabs,
                            parameters._characterizationSamplingParameters.resultTransmissionToIC,
                            parameters._characterizationSamplingParameters.fractionSampledWipe,
                            parameters._characterizationSamplingParameters.fractionSampledHepa,
                            areaContaminated);

                    results.postDeconCharacterizationSamplingResults.phaseCost += Convert.ToInt64(_characterizationSamplingCostCalculator.CalculatePhaseCosts(
                        phaseDaysCS,
                        parameters._characterizationSamplingParameters.numTeams,
                        parameters._characterizationSamplingParameters.fractionSampledWipe,
                        parameters._characterizationSamplingParameters.fractionSampledHepa,
                        areaContaminated,
                        parameters._characterizationSamplingParameters.ppeRequired));
                }
            }

            // Total Characterization Sampling Results
            results.totalCharacterizationSamplingResults.workDays = results.preDeconCharacterizationSamplingResults.workDays +
                results.postDeconCharacterizationSamplingResults.workDays;
            results.totalCharacterizationSamplingResults.onSiteDays = results.preDeconCharacterizationSamplingResults.onSiteDays +
                results.postDeconCharacterizationSamplingResults.onSiteDays;
            results.totalCharacterizationSamplingResults.phaseCost = results.preDeconCharacterizationSamplingResults.phaseCost +
                results.postDeconCharacterizationSamplingResults.phaseCost;

            // Waste Sampling Results

            for (int i = 0; i < results.generalResults.decontaminationRounds; i++)
            {
                parameters = parameterManager.RedrawParameters(areaContaminated, phase);
                var resultsCalculator = parameterManager.SetDrawnParameters(parameters);

                if (parameters._wasteSamplingParameters.fractionSampled == 0)
                {
                    results.wasteSamplingResults.phaseCost = 0.0;
                    results.wasteSamplingResults.workDays = 0.0;
                    results.wasteSamplingResults.onSiteDays = 0.0;
                }
                else
                {

                    var phaseDaysWS = _wasteSamplingCostCalculator.CalculateTime(
                        parameters._wasteSamplingParameters.numTeams,
                        parameters._wasteSamplingParameters.fractionSampled,
                        areaContaminated);

                    results.wasteSamplingResults.workDays += phaseDaysWS[PhaseDays.WorkDays];

                    results.wasteSamplingResults.onSiteDays += phaseDaysWS[PhaseDays.OnsiteDays] +
                        _wasteSamplingCostCalculator.CalculatePhaseLag(
                            parameters._wasteSamplingParameters.numLabs,
                            parameters._wasteSamplingParameters.resultTransmissionToIC,
                            parameters._wasteSamplingParameters.fractionSampled,
                            areaContaminated);

                    results.wasteSamplingResults.phaseCost += Convert.ToInt64(_wasteSamplingCostCalculator.CalculatePhaseCosts(
                        phaseDaysWS,
                        parameters._wasteSamplingParameters.numTeams,
                        parameters._wasteSamplingParameters.fractionSampled,
                        areaContaminated,
                        parameters._wasteSamplingParameters.ppeRequired));
                }
            }
            
            // Incident Command
            results.incidentCommandResults.onSiteDays = _incidentCommandCostCalculator.CalculateTime(
                results.totalCharacterizationSamplingResults.onSiteDays,
                results.sourceReductionResults.onSiteDays,
                results.decontaminationResults.onSiteDays,
                results.wasteSamplingResults.onSiteDays);

            results.incidentCommandResults.phaseCost = Convert.ToInt64(_incidentCommandCostCalculator.CalculatePhaseCosts(
                results.incidentCommandResults.onSiteDays));

            // Total
            results.generalResults.totalCost = results.totalCharacterizationSamplingResults.phaseCost +
                results.sourceReductionResults.phaseCost +
                results.decontaminationResults.phaseCost +
                results.wasteSamplingResults.phaseCost +
                results.incidentCommandResults.phaseCost;

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
                results.otherResults.incidentCommandTravelCost;

            //Total event cost including travel and per diem costs
            results.totalEventCost = scenarioResults.generalResults.totalCost + results.otherResults.totalTravelCost;

            //Total event contamination area
            results.totalContaminationArea = scenarioResults.generalResults.areaContaminated;

            return results;
        }
    }
}
