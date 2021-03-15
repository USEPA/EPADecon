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
                characterizationSamplingResults = new GenericPhaseResults(),
                sourceReductionResults = new GenericPhaseResults(),
                decontaminationResults = new GenericPhaseResults(),
                incidentCommandResults = new IncidentCommandResults(),
                otherResults = new OtherResults(),
                generalResults = new GeneralResults()
            };

            if (parameters.characterizationSamplingParameters.fractionSampledHepa == 0 && 
                parameters.characterizationSamplingParameters.fractionSampledWipe == 0)
            {
                results.characterizationSamplingResults.workDays = 0.0;
                results.characterizationSamplingResults.onSiteDays = 0.0;
                results.characterizationSamplingResults.phaseCost = 0;
            } else
            {
                results.characterizationSamplingResults.workDays = characterizationSamplingCostCalculator.CalculateTime(
                parameters.characterizationSamplingParameters.numTeams,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated);

                results.characterizationSamplingResults.onSiteDays = results.characterizationSamplingResults.workDays +
                    parameters.characterizationSamplingParameters.personnelOverheadDays +
                    characterizationSamplingCostCalculator.CalculatePhaseLag(
                        parameters.characterizationSamplingParameters.numLabs,
                        parameters.characterizationSamplingParameters.resultTransmissionToIC,
                        parameters.characterizationSamplingParameters.fractionSampledWipe,
                        parameters.characterizationSamplingParameters.fractionSampledHepa,
                        areaContaminated);

                results.characterizationSamplingResults.phaseCost = Convert.ToInt64(characterizationSamplingCostCalculator.CalculateCost(
                    results.characterizationSamplingResults.workDays,
                    parameters.characterizationSamplingParameters.numTeams,
                    parameters.characterizationSamplingParameters.fractionSampledWipe,
                    parameters.characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated,
                    parameters.otherParameters.roundtripDays,
                    parameters.characterizationSamplingParameters.ppeRequired));
            }

            if (parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced == 0)
            {
                results.sourceReductionResults.workDays = 0.0;
                results.sourceReductionResults.onSiteDays = 0.0;
                results.sourceReductionResults.phaseCost = 0;
            } else
            {
                results.sourceReductionResults.workDays = sourceReductionCostCalculator.CalculateTime(
                    parameters.sourceReductionParameters.numTeams,
                    parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced);

                results.sourceReductionResults.onSiteDays = results.sourceReductionResults.workDays +
                    parameters.sourceReductionParameters.personnelOverheadDays;

                results.sourceReductionResults.phaseCost = Convert.ToInt64(sourceReductionCostCalculator.CalculateCost(
                    results.sourceReductionResults.workDays,
                    parameters.sourceReductionParameters.numTeams,
                    parameters.otherParameters.roundtripDays,
                    parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                    parameters.costParameters.costPerMassOfMaterialRemoved,
                    parameters.sourceReductionParameters.ppeRequired));
            }
            
            results.decontaminationResults.workDays = decontaminationCostCalculator.CalculateTime();

            results.decontaminationResults.onSiteDays = results.decontaminationResults.workDays +
                parameters.decontaminationParameters.personnelOverhead;

            results.decontaminationResults.phaseCost = Convert.ToInt64(decontaminationCostCalculator.CalculateCost(
                results.decontaminationResults.workDays,
                parameters.decontaminationParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.decontaminationParameters.ppeRequired,
                areaContaminated,
                parameters.decontaminationParameters.applicationMethods));

            results.incidentCommandResults.onSiteDays = incidentCommandCostCalculator.CalculateTime(
                results.characterizationSamplingResults.workDays,
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

            results.otherResults.otherCosts = Convert.ToInt64(otherCostCalculator.CalculateCost(
                parameters.otherParameters.totalAvailablePersonnel,
                parameters.otherParameters.roundtripDays,
                parameters.costParameters.roundtripTicketCostPerPerson,
                results.incidentCommandResults.onSiteDays));

            results.generalResults.totalCost = results.characterizationSamplingResults.phaseCost +
                results.sourceReductionResults.phaseCost +
                results.decontaminationResults.phaseCost +
                results.incidentCommandResults.phaseCost +
                results.otherResults.otherCosts;

            results.generalResults.areaContaminated = areaContaminated.Values.Sum(v => v.AreaContaminated);

            return results;
        }
    }
}
