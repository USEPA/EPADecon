using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

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
            double _surfaceAreaToBeHepa,double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted)
        {
            var laborDaysCs = _laborCostCalculatorCs.CalculateLaborDays( _numberTeams, personnelRoundTripDays, _surfaceAreaToBeHepa,
                _surfaceAreaToBeWiped, numberLabs, sampleTimeTransmitted);
            var laborDaysSr = _laborCostCalculatorSr.CalculateLaborDays( _numberTeams, personnelRoundTripDays, surfaceAreaToBeSourceReduced);
            var laborDaysDc = _laborCostCalculatorDc.CalculateLaborDays(personnelRoundTripDays);

            var lagTime = _phaseLagCalculator.CalculatePhaseLagTime(numberLabs, sampleTimeTransmitted, _surfaceAreaToBeWiped, _surfaceAreaToBeHepa);

            return laborDaysCs + lagTime + laborDaysSr + laborDaysDc + _personnelOverheadDays;
        }

        public double CalculateLaborCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _surfaceAreaToBeHepa,double _surfaceAreaToBeWiped, int numberLabs, double sampleTimeTransmitted)
        {
            
            var totalPersonnel = _personnelReqPerTeam.Values.Sum();

            var personnelHoursCost = _personnelReqPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            var onSiteDays = CalculateOnSiteDays(_numberTeams, surfaceAreaToBeSourceReduced, personnelRoundTripDays,
             _surfaceAreaToBeHepa, _surfaceAreaToBeWiped, numberLabs, sampleTimeTransmitted);

            var laborHours = GlobalConstants.HoursPerWorkDay * (onSiteDays + personnelRoundTripDays);

            return(laborHours * personnelHoursCost);
        }
    }
}