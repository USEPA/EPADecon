using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.Model.Other;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models;

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

            results.characterizationSamplingWorkDays = characterizationSamplingCostCalculator.CalculateTime(
                parameters.characterizationSamplingParameters.numTeams,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated);

            results.characterizationSamplingOnSiteDays = results.characterizationSamplingWorkDays +
                parameters.characterizationSamplingParameters.personnelOverheadDays;

            results.characterizationSamplingPhaseCost = characterizationSamplingCostCalculator.CalculateCost(
                results.characterizationSamplingWorkDays,
                parameters.characterizationSamplingParameters.numTeams,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated,
                parameters.otherParameters.roundtripDays,
                parameters.characterizationSamplingParameters.ppeRequired);

            results.sourceReductionWorkDays = sourceReductionCostCalculator.CalculateTime(
                parameters.sourceReductionParameters.numTeams,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced);

            results.sourceReductionOnSiteDays = results.sourceReductionWorkDays +
                parameters.sourceReductionParameters.personnelOverheadDays;

            results.sourceReductionPhaseCost = sourceReductionCostCalculator.CalculateCost(
                results.sourceReductionWorkDays,
                parameters.sourceReductionParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                parameters.costParameters.costPerMassOfMaterialRemoved,
                parameters.sourceReductionParameters.ppeRequired);

            results.decontaminationWorkDays = decontaminationCostCalculator.CalculateTime();

            results.decontaminationOnSiteDays = results.decontaminationWorkDays +
                parameters.decontaminationParameters.personnelOverhead;

            results.decontaminationPhaseCost = decontaminationCostCalculator.CalculateCost(
                results.decontaminationWorkDays,
                parameters.decontaminationParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.decontaminationParameters.ppeRequired,
                areaContaminated);

            results.incidentCommandOnSiteDays = incidentCommandCostCalculator.CalculateTime(
                results.characterizationSamplingWorkDays,
                results.sourceReductionWorkDays,
                results.decontaminationWorkDays,
                parameters.decontaminationParameters.numTeams,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                parameters.otherParameters.roundtripDays,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated,
                parameters.characterizationSamplingParameters.numLabs,
                parameters.characterizationSamplingParameters.resultTransmissionToIC);

            results.incidentCommandPhaseCost = incidentCommandCostCalculator.CalculateCost(
                results.incidentCommandOnSiteDays);

            results.otherCosts = otherCostCalculator.CalculateCost(
                parameters.otherParameters.totalAvailablePersonnel,
                parameters.otherParameters.roundtripDays,
                parameters.costParameters.roundtripTicketCostPerPerson,
                results.incidentCommandOnSiteDays);

            results.totalCost = results.characterizationSamplingPhaseCost +
                results.sourceReductionPhaseCost +
                results.decontaminationPhaseCost +
                results.incidentCommandPhaseCost +
                results.otherCosts;

            return results;
        }
    }
}
