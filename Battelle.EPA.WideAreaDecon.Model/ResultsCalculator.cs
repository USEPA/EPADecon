using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.Model.Other;
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
        public IncidentCommandCostCalculator _incidentCommandCostCalculator { get; set; }
        public OtherCostCalculator _otherCostCalculator { get; set; }

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
                results.preDeconCharacterizationSamplingResults.workDays = _characterizationSamplingCostCalculator.CalculateTime(
                parameters._characterizationSamplingParameters.numTeams,
                parameters._characterizationSamplingParameters.fractionSampledWipe,
                parameters._characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated);

                results.preDeconCharacterizationSamplingResults.onSiteDays = results.preDeconCharacterizationSamplingResults.workDays +
                    parameters._characterizationSamplingParameters.personnelOverheadDays +
                    _characterizationSamplingCostCalculator.CalculatePhaseLag(
                        parameters._characterizationSamplingParameters.numLabs,
                        parameters._characterizationSamplingParameters.resultTransmissionToIC,
                        parameters._characterizationSamplingParameters.fractionSampledWipe,
                        parameters._characterizationSamplingParameters.fractionSampledHepa,
                        areaContaminated);

                results.preDeconCharacterizationSamplingResults.phaseCost = Convert.ToInt64(_characterizationSamplingCostCalculator.CalculatePhaseCosts(
                    results.preDeconCharacterizationSamplingResults.workDays,
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
                results.sourceReductionResults.workDays = _sourceReductionCostCalculator.CalculateTime(
                    parameters._sourceReductionParameters.numTeams,
                    parameters._sourceReductionParameters.surfaceAreaToBeSourceReduced,
                    areaContaminated.Values.Sum(v => v.AreaContaminated));

                results.sourceReductionResults.onSiteDays = results.sourceReductionResults.workDays +
                    parameters._sourceReductionParameters.personnelOverheadDays;

                results.sourceReductionResults.phaseCost = Convert.ToInt64(_sourceReductionCostCalculator.CalculatePhaseCosts(
                    results.sourceReductionResults.workDays,
                    parameters._sourceReductionParameters.numTeams,
                    parameters._sourceReductionParameters.surfaceAreaToBeSourceReduced,
                    parameters._costParameters.costPerMassOfMaterialRemoved,
                    parameters._sourceReductionParameters.ppeRequired,
                    areaContaminated.Values.Sum(v => v.AreaContaminated)));
            }

            // Decontamination
            List<Dictionary<ApplicationMethod, double>> decontaminationWorkdays = _decontaminationCostCalculator.CalculateTime();
            var workdays = new List<double>();
            foreach (var item in decontaminationWorkdays)
            {
                workdays.Add(item.Sum(x => x.Value));
            }

            results.decontaminationResults.workDays = workdays.Sum();
            results.generalResults.decontaminationRounds = decontaminationWorkdays.Count;

            results.decontaminationResults.onSiteDays = results.decontaminationResults.workDays +
                parameters._decontaminationParameters.personnelOverhead;

            results.decontaminationResults.phaseCost = Convert.ToInt64(_decontaminationCostCalculator.CalculatePhaseCosts(
                results.decontaminationResults.workDays,
                parameters._decontaminationParameters.numTeams,
                parameters._decontaminationParameters.ppeRequired,
                areaContaminated,
                parameters._decontaminationParameters.applicationMethods,
                decontaminationWorkdays));

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
                    var postDeconWorkDays = _characterizationSamplingCostCalculator.CalculateTime(
                    parameters._characterizationSamplingParameters.numTeams,
                    parameters._characterizationSamplingParameters.fractionSampledWipe,
                    parameters._characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated);

                    results.postDeconCharacterizationSamplingResults.workDays += postDeconWorkDays;

                    results.postDeconCharacterizationSamplingResults.onSiteDays += postDeconWorkDays +
                        parameters._characterizationSamplingParameters.personnelOverheadDays +
                        _characterizationSamplingCostCalculator.CalculatePhaseLag(
                            parameters._characterizationSamplingParameters.numLabs,
                            parameters._characterizationSamplingParameters.resultTransmissionToIC,
                            parameters._characterizationSamplingParameters.fractionSampledWipe,
                            parameters._characterizationSamplingParameters.fractionSampledHepa,
                            areaContaminated);

                    results.postDeconCharacterizationSamplingResults.phaseCost += Convert.ToInt64(_characterizationSamplingCostCalculator.CalculatePhaseCosts(
                        postDeconWorkDays,
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

            // Incident Command
            results.incidentCommandResults.onSiteDays = _incidentCommandCostCalculator.CalculateTime(
                results.totalCharacterizationSamplingResults.onSiteDays,
                results.sourceReductionResults.onSiteDays,
                results.decontaminationResults.onSiteDays);

            results.incidentCommandResults.phaseCost = Convert.ToInt64(_incidentCommandCostCalculator.CalculatePhaseCosts(
                results.incidentCommandResults.onSiteDays));

            // Total
            results.generalResults.totalCost = results.totalCharacterizationSamplingResults.phaseCost +
                results.sourceReductionResults.phaseCost +
                results.decontaminationResults.phaseCost +
                results.incidentCommandResults.phaseCost;

            results.generalResults.areaContaminated = areaContaminated.Values.Sum(v => v.AreaContaminated);

            return results;
        }

        public EventResults CalculateEventResults(CalculatorManager parameters,
            Dictionary<BuildingCategory, ScenarioRealizationResults> _indoorResults,
            ScenarioRealizationResults _outdoorResults,
            ScenarioRealizationResults _undergroundResults)
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
            results.totalEventCost = _outdoorResults.generalResults.totalCost + _undergroundResults.generalResults.totalCost + results.otherResults.totalTravelCost;

            foreach (var building in _indoorResults.Keys.ToList())
            {
                results.totalEventCost += _indoorResults[building].generalResults.totalCost;
            }

            //Total event contamination area
            results.totalContaminationArea = _outdoorResults.generalResults.areaContaminated + _undergroundResults.generalResults.areaContaminated;

            foreach (var building in _indoorResults.Keys.ToList())
            {
                results.totalContaminationArea += _indoorResults[building].generalResults.areaContaminated;
            }

            return results;
        }
    }
}
