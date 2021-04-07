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

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class RunModel
    {
        private readonly CharacterizationSamplingCostCalculator characterizationSamplingCostCalculator;
        private readonly SourceReductionCostCalculator sourceReductionCostCalculator;
        private readonly DecontaminationCostCalculator decontaminationCostCalculator;
        private readonly IncidentCommandCostCalculator incidentCommandCostCalculator;
        private readonly OtherCostCalculator otherCostCalculator;

        public RunModel(
            CharacterizationSamplingCostCalculator _characterizationSamplingCostCalculator,
            SourceReductionCostCalculator _sourceReductionCostCalculator,
            DecontaminationCostCalculator _decontaminationCostCalculator,
            IncidentCommandCostCalculator _incidentCommandCostCalculator,
            OtherCostCalculator _otherCostCalculator)
        {
            characterizationSamplingCostCalculator = _characterizationSamplingCostCalculator;
            sourceReductionCostCalculator = _sourceReductionCostCalculator;
            decontaminationCostCalculator = _decontaminationCostCalculator;
            incidentCommandCostCalculator = _incidentCommandCostCalculator;
            otherCostCalculator = _otherCostCalculator;
        }

        public Results CalculateCost(
            CalculatorManager parameters,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var results = new Results {
                preDeconCharacterizationSamplingResults = new GenericPhaseResults(),
                postDeconCharacterizationSamplingResults = new GenericPhaseResults(),
                totalCharacterizationSamplingResults = new GenericPhaseResults(),
                sourceReductionResults = new GenericPhaseResults(),
                decontaminationResults = new GenericPhaseResults(),
                incidentCommandResults = new IncidentCommandResults(),
                otherResults = new OtherResults(),
                generalResults = new GeneralResults()
            };

            // Pre-Decon Characterization Sampling
            if (parameters.characterizationSamplingParameters.fractionSampledHepa == 0 &&
                parameters.characterizationSamplingParameters.fractionSampledWipe == 0)
            {
                results.preDeconCharacterizationSamplingResults.workDays = 0.0;
                results.preDeconCharacterizationSamplingResults.onSiteDays = 0.0;
                results.preDeconCharacterizationSamplingResults.phaseCost = 0;
            }
            else
            {
                results.preDeconCharacterizationSamplingResults.workDays = characterizationSamplingCostCalculator.CalculateTime(
                parameters.characterizationSamplingParameters.numTeams,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated);

                results.preDeconCharacterizationSamplingResults.onSiteDays = results.preDeconCharacterizationSamplingResults.workDays +
                    parameters.characterizationSamplingParameters.personnelOverheadDays +
                    characterizationSamplingCostCalculator.CalculatePhaseLag(
                        parameters.characterizationSamplingParameters.numLabs,
                        parameters.characterizationSamplingParameters.resultTransmissionToIC,
                        parameters.characterizationSamplingParameters.fractionSampledWipe,
                        parameters.characterizationSamplingParameters.fractionSampledHepa,
                        areaContaminated);

                results.preDeconCharacterizationSamplingResults.phaseCost = Convert.ToInt64(characterizationSamplingCostCalculator.CalculateCost(
                    results.preDeconCharacterizationSamplingResults.workDays,
                    parameters.characterizationSamplingParameters.numTeams,
                    parameters.characterizationSamplingParameters.fractionSampledWipe,
                    parameters.characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated,
                    parameters.otherParameters.roundtripDays,
                    parameters.characterizationSamplingParameters.ppeRequired));
            }

            // Source Reduction
            if (parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced == 0)
            {
                results.sourceReductionResults.workDays = 0.0;
                results.sourceReductionResults.onSiteDays = 0.0;
                results.sourceReductionResults.phaseCost = 0;
            } else
            {
                results.sourceReductionResults.workDays = sourceReductionCostCalculator.CalculateTime(
                    parameters.sourceReductionParameters.numTeams,
                    parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                    areaContaminated.Values.Sum(v => v.AreaContaminated));

                results.sourceReductionResults.onSiteDays = results.sourceReductionResults.workDays +
                    parameters.sourceReductionParameters.personnelOverheadDays;

                results.sourceReductionResults.phaseCost = Convert.ToInt64(sourceReductionCostCalculator.CalculateCost(
                    results.sourceReductionResults.workDays,
                    parameters.sourceReductionParameters.numTeams,
                    parameters.otherParameters.roundtripDays,
                    parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                    parameters.costParameters.costPerMassOfMaterialRemoved,
                    parameters.sourceReductionParameters.ppeRequired,
                    areaContaminated.Values.Sum(v => v.AreaContaminated)));
            }

            //Decontamination
            Tuple<double, int> decontaminationLabor = decontaminationCostCalculator.CalculateTime();

            results.decontaminationResults.workDays = decontaminationLabor.Item1;
            results.generalResults.decontaminationRounds = decontaminationLabor.Item2;

            results.decontaminationResults.onSiteDays = results.decontaminationResults.workDays +
                parameters.decontaminationParameters.personnelOverhead;

            results.decontaminationResults.phaseCost = Convert.ToInt64(decontaminationCostCalculator.CalculateCost(
                results.decontaminationResults.workDays,
                parameters.decontaminationParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.decontaminationParameters.ppeRequired,
                areaContaminated,
                parameters.decontaminationParameters.applicationMethods));

            // Post-Decon Characterization Sampling
            results.postDeconCharacterizationSamplingResults.workDays = 0.0;
            results.postDeconCharacterizationSamplingResults.onSiteDays = 0.0;
            results.postDeconCharacterizationSamplingResults.phaseCost = 0;

            for (int i = 0; i < results.generalResults.decontaminationRounds; i++)
            {
                if (parameters.characterizationSamplingParameters.fractionSampledHepa > 0 ||
                    parameters.characterizationSamplingParameters.fractionSampledWipe > 0)
                {
                    results.postDeconCharacterizationSamplingResults.workDays += characterizationSamplingCostCalculator.CalculateTime(
                    parameters.characterizationSamplingParameters.numTeams,
                    parameters.characterizationSamplingParameters.fractionSampledWipe,
                    parameters.characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated);

                    results.postDeconCharacterizationSamplingResults.onSiteDays += results.postDeconCharacterizationSamplingResults.workDays +
                        parameters.characterizationSamplingParameters.personnelOverheadDays +
                        characterizationSamplingCostCalculator.CalculatePhaseLag(
                            parameters.characterizationSamplingParameters.numLabs,
                            parameters.characterizationSamplingParameters.resultTransmissionToIC,
                            parameters.characterizationSamplingParameters.fractionSampledWipe,
                            parameters.characterizationSamplingParameters.fractionSampledHepa,
                            areaContaminated);

                    results.postDeconCharacterizationSamplingResults.phaseCost += Convert.ToInt64(characterizationSamplingCostCalculator.CalculateCost(
                        results.postDeconCharacterizationSamplingResults.workDays,
                        parameters.characterizationSamplingParameters.numTeams,
                        parameters.characterizationSamplingParameters.fractionSampledWipe,
                        parameters.characterizationSamplingParameters.fractionSampledHepa,
                        areaContaminated,
                        parameters.otherParameters.roundtripDays,
                        parameters.characterizationSamplingParameters.ppeRequired));
                }
            }

            //Total Characterization Sampling Results
            results.totalCharacterizationSamplingResults.workDays = results.preDeconCharacterizationSamplingResults.workDays +
                results.postDeconCharacterizationSamplingResults.workDays;
            results.totalCharacterizationSamplingResults.onSiteDays = results.preDeconCharacterizationSamplingResults.onSiteDays +
                results.postDeconCharacterizationSamplingResults.onSiteDays;
            results.totalCharacterizationSamplingResults.phaseCost = results.preDeconCharacterizationSamplingResults.phaseCost +
                results.postDeconCharacterizationSamplingResults.phaseCost;

            //Incident Command
            results.incidentCommandResults.onSiteDays = incidentCommandCostCalculator.CalculateTime(
                results.totalCharacterizationSamplingResults.workDays,
                results.sourceReductionResults.workDays,
                results.decontaminationResults.workDays,
                parameters.decontaminationParameters.numTeams,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                parameters.otherParameters.roundtripDays,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated,
                parameters.characterizationSamplingParameters.numLabs,
                parameters.characterizationSamplingParameters.resultTransmissionToIC);

            results.incidentCommandResults.phaseCost = Convert.ToInt64(incidentCommandCostCalculator.CalculateCost(
                results.incidentCommandResults.onSiteDays));

            //Other
            results.otherResults.otherCosts = Convert.ToInt64(otherCostCalculator.CalculateCost(
                parameters.otherParameters.totalAvailablePersonnel,
                parameters.otherParameters.roundtripDays,
                parameters.costParameters.roundtripTicketCostPerPerson,
                results.incidentCommandResults.onSiteDays));

            //Total
            results.generalResults.totalCost = results.totalCharacterizationSamplingResults.phaseCost +
                results.sourceReductionResults.phaseCost +
                results.decontaminationResults.phaseCost +
                results.incidentCommandResults.phaseCost +
                results.otherResults.otherCosts;

            results.generalResults.areaContaminated = areaContaminated.Values.Sum(v => v.AreaContaminated);

            return results;
        }
    }
}
