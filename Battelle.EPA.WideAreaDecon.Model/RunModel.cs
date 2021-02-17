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

            results.workDays[PhaseCategory.CharacterizationSampling] = 
                characterizationSamplingCostCalculator.CalculateTime(
                    parameters.characterizationSamplingParameters.numTeams,
                    parameters.characterizationSamplingParameters.fractionSampledWipe,
                    parameters.characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated);

            results.onSiteDays[PhaseCategory.CharacterizationSampling] = 
                results.workDays[PhaseCategory.CharacterizationSampling] +
                parameters.characterizationSamplingParameters.personnelOverheadDays;

            results.phaseCost[PhaseCategory.CharacterizationSampling] = 
                characterizationSamplingCostCalculator.CalculateCost(
                    results.workDays[PhaseCategory.CharacterizationSampling],
                    parameters.characterizationSamplingParameters.numTeams,
                    parameters.characterizationSamplingParameters.fractionSampledWipe,
                    parameters.characterizationSamplingParameters.fractionSampledHepa,
                    areaContaminated,
                    parameters.otherParameters.roundtripDays,
                    parameters.characterizationSamplingParameters.ppeRequired);

            results.workDays[PhaseCategory.SourceReduction] = sourceReductionCostCalculator.CalculateTime(
                parameters.sourceReductionParameters.numTeams,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced);

            results.onSiteDays[PhaseCategory.SourceReduction] = results.workDays[PhaseCategory.SourceReduction] +
                parameters.sourceReductionParameters.personnelOverheadDays;

            results.phaseCost[PhaseCategory.SourceReduction] = sourceReductionCostCalculator.CalculateCost(
                results.workDays[PhaseCategory.SourceReduction],
                parameters.sourceReductionParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                parameters.costParameters.costPerMassOfMaterialRemoved,
                parameters.sourceReductionParameters.ppeRequired);

            results.workDays[PhaseCategory.Decontamination] = decontaminationCostCalculator.CalculateTime();

            results.onSiteDays[PhaseCategory.Decontamination] = results.workDays[PhaseCategory.Decontamination] + 
                parameters.decontaminationParameters.personnelOverhead;

            results.phaseCost[PhaseCategory.Decontamination] = decontaminationCostCalculator.CalculateCost(
                results.workDays[PhaseCategory.Decontamination],
                parameters.decontaminationParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.decontaminationParameters.ppeRequired,
                areaContaminated);

            results.onSiteDays[PhaseCategory.IncidentCommand] = incidentCommandCostCalculator.CalculateTime(
                results.workDays[PhaseCategory.CharacterizationSampling],
                results.workDays[PhaseCategory.SourceReduction],
                results.workDays[PhaseCategory.Decontamination],
                parameters.decontaminationParameters.numTeams,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                parameters.otherParameters.roundtripDays,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated,
                parameters.characterizationSamplingParameters.numLabs,
                parameters.characterizationSamplingParameters.resultTransmissionToIC);

            results.phaseCost[PhaseCategory.IncidentCommand] = incidentCommandCostCalculator.CalculateCost(
                results.onSiteDays[PhaseCategory.IncidentCommand]);

            results.phaseCost[PhaseCategory.Other] = otherCostCalculator.CalculateCost(
                parameters.otherParameters.totalAvailablePersonnel,
                parameters.otherParameters.roundtripDays,
                parameters.costParameters.roundtripTicketCostPerPerson,
                results.onSiteDays[PhaseCategory.IncidentCommand]);

            results.totalCost = results.phaseCost.Values.Sum();

            return results;
        }
    }
}
