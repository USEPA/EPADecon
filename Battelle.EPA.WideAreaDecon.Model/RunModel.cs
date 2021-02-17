using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.Model.Other;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

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

        public double CalculateCost(
            CalculatorManager parameters,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var csWorkDays = characterizationSamplingCostCalculator.CalculateTime(
                parameters.characterizationSamplingParameters.numTeams,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated);

            var csLaborDays = csWorkDays + parameters.characterizationSamplingParameters.personnelOverheadDays;

            var csCost = characterizationSamplingCostCalculator.CalculateCost(
                csWorkDays,
                parameters.characterizationSamplingParameters.numTeams,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated,
                parameters.otherParameters.roundtripDays,
                parameters.characterizationSamplingParameters.ppeRequired);

            var srWorkDays = sourceReductionCostCalculator.CalculateTime(
                parameters.sourceReductionParameters.numTeams,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced);

            var srLaborDays = srWorkDays + parameters.sourceReductionParameters.personnelOverheadDays;

            var srCost = sourceReductionCostCalculator.CalculateCost(
                srWorkDays,
                parameters.sourceReductionParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                parameters.costParameters.costPerMassOfMaterialRemoved,
                parameters.sourceReductionParameters.ppeRequired);

            var dcWorkDays = decontaminationCostCalculator.CalculateTime();

            var dcLaborDays = dcWorkDays + parameters.decontaminationParameters.personnelOverhead;

            var dcCost = decontaminationCostCalculator.CalculateCost(
                dcWorkDays,
                parameters.decontaminationParameters.numTeams,
                parameters.otherParameters.roundtripDays,
                parameters.decontaminationParameters.ppeRequired,
                areaContaminated);

            var icOnSiteDays = incidentCommandCostCalculator.CalculateTime(
                csWorkDays,
                srWorkDays,
                dcWorkDays,
                parameters.decontaminationParameters.numTeams,
                parameters.sourceReductionParameters.surfaceAreaToBeSourceReduced,
                parameters.otherParameters.roundtripDays,
                parameters.characterizationSamplingParameters.fractionSampledWipe,
                parameters.characterizationSamplingParameters.fractionSampledHepa,
                areaContaminated,
                parameters.characterizationSamplingParameters.numLabs,
                parameters.characterizationSamplingParameters.resultTransmissionToIC);

            var icCost = incidentCommandCostCalculator.CalculateCost(
                icOnSiteDays);

            var otCost = otherCostCalculator.CalculateCost(
                parameters.otherParameters.totalAvailablePersonnel,
                parameters.otherParameters.roundtripDays,
                parameters.costParameters.roundtripTicketCostPerPerson,
                icOnSiteDays);

            return csCost + srCost + dcCost + otCost + icCost;
        }
    }
}
