using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly CharacterizationSampling.ILaborCostCalculator _laborCostCalculatorCs;
        private readonly CharacterizationSampling.IPhaseLagCalculator _phaseLagCalculator;
        private readonly Decontamination.ILaborCostCalculator _laborCostCalculatorDc;
        private readonly SourceReduction.ILaborCostCalculator _laborCostCalculatorSr;
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly double _personnelOverheadDays;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;

        public LaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double personnelOverheadDays,
            Dictionary<PersonnelLevel, double> personnelHourlyRate,
            CharacterizationSampling.ILaborCostCalculator laborCostCalculatorCs,
            CharacterizationSampling.IPhaseLagCalculator phaseLagCalculator,
            SourceReduction.ILaborCostCalculator laborCostCalculatorSr,
            Decontamination.ILaborCostCalculator laborCostCalculatorDc)
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _personnelOverheadDays = personnelOverheadDays;
            _personnelHourlyRate = personnelHourlyRate;
            _laborCostCalculatorCs = laborCostCalculatorCs;
            _phaseLagCalculator = phaseLagCalculator;
            _laborCostCalculatorSr = laborCostCalculatorSr;
            _laborCostCalculatorDc = laborCostCalculatorDc;
        }
        
        public double CalculateOnSiteDays(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated, int numberLabs, double sampleTimeTransmitted)
        {
            var laborDaysCs = _laborCostCalculatorCs.CalculateLaborDays( _numberTeams, personnelRoundTripDays, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated, numberLabs, sampleTimeTransmitted);
            var laborDaysSr = _laborCostCalculatorSr.CalculateLaborDays( _numberTeams, personnelRoundTripDays, surfaceAreaToBeSourceReduced);
            var laborDaysDc = _laborCostCalculatorDc.CalculateLaborDays(personnelRoundTripDays);

            var lagTime = _phaseLagCalculator.CalculatePhaseLagTime(numberLabs, sampleTimeTransmitted, _fractionSampledWipe, _fractionSampledHepa, _areaContaminated);

            return laborDaysCs + lagTime + laborDaysSr + laborDaysDc + _personnelOverheadDays;
        }

        public double CalculateLaborCost(double onSiteDays, double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated, int numberLabs, double sampleTimeTransmitted)
        {
            var totalPersonnel = _personnelReqPerTeam.Values.Sum();

            var personnelHoursCost = _personnelReqPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            var laborHours = GlobalConstants.HoursPerWorkDay * (onSiteDays + personnelRoundTripDays);

            return(laborHours * personnelHoursCost);
        }
    }
}