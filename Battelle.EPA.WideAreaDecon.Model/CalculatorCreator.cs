using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class CalculatorCreator
    {
        private readonly Services.ICharacterizationSamplingCalculatorFactory _characterizationSamplingFactory;
        private readonly Services.ISourceReductionCalculatorFactory _sourceReductionFactory;
        private readonly Services.IDecontaminationCalculatorFactory _decontaminationFactory;
        private readonly Services.IOtherCalculatorFactory _otherFactory;
        private readonly Services.IIncidentCommandCalculatorFactory _incidentCommandFactory;

        public CalculatorCreator(
            Services.ParameterArrayCharacterizationSamplingCalculatorFactory csCalculatorFactory,
            Services.ParameterArraySourceReductionCalculatorFactory srCalculatorFactory,
            Services.ParameterArrayDecontaminationCalculatorFactory dcCalculatorFactory,
            Services.ParameterArrayOtherCalculatorFactory otCalculatorFactory,
            Services.ParameterArrayIncidentCommandCalculatorFactory icCalculatorFactory)
        {
            _characterizationSamplingFactory = csCalculatorFactory;
            _sourceReductionFactory = srCalculatorFactory;
            _decontaminationFactory = dcCalculatorFactory;
            _otherFactory = otCalculatorFactory;
            _incidentCommandFactory = icCalculatorFactory;
        }

        public double GetCalculators(
            CharacterizationSamplingParameters csParameters,
            SourceReductionParameters srParameters,
            DecontaminationParameters dcParameters,
            OtherParameters otParameters,
            CostParameters costParameters,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var csCalculator = _characterizationSamplingFactory.GetCalculator();
            var srCalculator = _sourceReductionFactory.GetCalculator();
            var dcCalculator = _decontaminationFactory.GetCalculator();
            var otCalculator = _otherFactory.GetCalculator();
            var icCalculator = _incidentCommandFactory.GetCalculator();

            var csWorkDays = csCalculator.CalculateTime(
                csParameters.numTeams,
                csParameters.fractionSampledWipe,
                csParameters.fractionSampledHepa,
                areaContaminated);

            var csLaborDays = csWorkDays + csParameters.personnelOverheadDays;

            var csCost = csCalculator.CalculateCost(
                csWorkDays,
                csParameters.numTeams, 
                csParameters.fractionSampledWipe, 
                csParameters.fractionSampledHepa,
                areaContaminated,
                otParameters.roundtripDays,
                csParameters.ppeRequired);

            var srWorkDays = srCalculator.CalculateTime(
                srParameters.numTeams,
                srParameters.surfaceAreaToBeSourceReduced);

            var srLaborDays = srWorkDays + srParameters.personnelOverheadDays;

            var srCost = srCalculator.CalculateCost(
                srWorkDays,
                srParameters.numTeams,
                otParameters.roundtripDays,
                srParameters.surfaceAreaToBeSourceReduced,
                costParameters.costPerMassOfMaterialRemoved,
                srParameters.ppeRequired);

            var dcWorkDays = dcCalculator.CalculateTime();

            var dcLaborDays = dcWorkDays + dcParameters.personnelOverhead;

            var dcCost = dcCalculator.CalculateCost(
                dcWorkDays,
                dcParameters.numTeams,
                otParameters.roundtripDays,
                dcParameters.ppeRequired,
                areaContaminated);

            var icOnSiteDays = icCalculator.CalculateTime(
                csWorkDays,
                srWorkDays,
                dcWorkDays,
                dcParameters.numTeams,
                srParameters.surfaceAreaToBeSourceReduced,
                otParameters.roundtripDays,
                csParameters.fractionSampledWipe,
                csParameters.fractionSampledHepa,
                areaContaminated,
                csParameters.numLabs,
                csParameters.resultTransmissionToIC);

            var icCost = icCalculator.CalculateCost(
                icOnSiteDays);

            var otCost = otCalculator.CalculateCost(
                otParameters.totalAvailablePersonnel,
                otParameters.roundtripDays,
                costParameters.roundtripTicketCostPerPerson,
                icOnSiteDays);

            return csCost + srCost + dcCost + otCost + icCost;
        }
    }
}
