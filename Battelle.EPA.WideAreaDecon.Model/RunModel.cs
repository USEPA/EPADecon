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
            var results = new Results();

            results.characterizationSamplingResults.workDays = characterizationSamplingCostCalculator.CalculateTime(
                parameters.characterizationSamplingParameters.numTeams,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated);

            results.characterizationSamplingResults.onSiteDays = results.characterizationSamplingResults.workDays +
                parameters.characterizationSamplingParameters.personnelOverheadDays;

            results.characterizationSamplingResults.phaseCost = characterizationSamplingCostCalculator.CalculateCost(
                results.characterizationSamplingResults.workDays,
                parameters.characterizationSamplingParameters.numTeams,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated,
                parameters.otherParameters.roundtripDays,
                parameters.characterizationSamplingParameters.ppeRequired);

            results.sourceReductionResults.workDays = sourceReductionCostCalculator.CalculateTime(
                parameters.sourceReductionParameters.numTeams,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced);

            results.sourceReductionResults.onSiteDays = results.sourceReductionResults.workDays +
                parameters.sourceReductionParameters.personnelOverheadDays;

            results.sourceReductionResults.phaseCost = sourceReductionCostCalculator.CalculateCost(
                results.sourceReductionResults.workDays,
                parameters.sourceReductionParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                parameters.costParameters.costPerMassOfMaterialRemoved,
                parameters.sourceReductionParameters.ppeRequired);

            results.decontaminationResults.workDays = decontaminationCostCalculator.CalculateTime();

            results.decontaminationResults.onSiteDays = results.decontaminationResults.workDays +
                parameters.decontaminationParameters.personnelOverhead;

            results.decontaminationResults.phaseCost = decontaminationCostCalculator.CalculateCost(
                results.decontaminationResults.workDays,
                parameters.decontaminationParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.decontaminationParameters.ppeRequired,
                areaContaminated);

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

            results.incidentCommandResults.phaseCost = incidentCommandCostCalculator.CalculateCost(
                results.incidentCommandResults.onSiteDays);

            results.otherResults.otherCosts = otherCostCalculator.CalculateCost(
                parameters.otherParameters.totalAvailablePersonnel,
                parameters.otherParameters.roundtripDays,
                parameters.costParameters.roundtripTicketCostPerPerson,
                results.incidentCommandResults.onSiteDays);

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
