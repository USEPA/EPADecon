using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly CharacterizationSampling.ILaborCostCalculator _laborCostCalculatorCs;
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
            SourceReduction.ILaborCostCalculator laborCostCalculatorSr,
            Decontamination.ILaborCostCalculator laborCostCalculatorDc)
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _personnelOverheadDays = personnelOverheadDays;
            _personnelHourlyRate = personnelHourlyRate;
            _laborCostCalculatorCs = laborCostCalculatorCs;
            _laborCostCalculatorSr = laborCostCalculatorSr;
            _laborCostCalculatorDc = laborCostCalculatorDc;
        }
        
        public double CalculateOnSiteDays(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,
            double _surfaceAreaToBeHepa,double _surfaceAreaToBeWiped, double numberLabs, double sampleTimeTransmitted)
        {
            var laborDaysCs = _laborCostCalculatorCs.CalculateLaborDays( _numberTeams, personnelRoundTripDays, _surfaceAreaToBeHepa,
                _surfaceAreaToBeWiped, numberLabs, sampleTimeTransmitted);
            var laborDaysSr = _laborCostCalculatorSr.CalculateLaborDays( _numberTeams, personnelRoundTripDays, surfaceAreaToBeSourceReduced);
            var laborDaysDc = _laborCostCalculatorDc.CalculateLaborDays(personnelRoundTripDays);

            return laborDaysCs + laborDaysSr + laborDaysDc + _personnelOverheadDays;
        }

        public double CalculateLaborCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays,double _surfaceAreaToBeHepa,double _surfaceAreaToBeWiped)
        {
            var laborDaysCs = _laborCostCalculatorCs.CalculateLaborDays( _numberTeams, personnelRoundTripDays, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped);
            var laborDaysSr = _laborCostCalculatorSr.CalculateLaborDays( _numberTeams,  surfaceAreaToBeSourceReduced, personnelRoundTripDays);
            var laborDaysDc = _laborCostCalculatorDc.CalculateLaborDays(personnelRoundTripDays);

            var totalPersonnel = _personnelReqPerTeam.Values.Sum();

            var personnelHoursCost = _personnelReqPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            var laborHours = GlobalConstants.HoursPerWorkDay * (laborDaysCs + laborDaysSr + laborDaysDc + _personnelOverheadDays +
                personnelRoundTripDays);

            return(GlobalConstants.HoursPerWorkDay * (CalculateOnSiteDays(_numberTeams,surfaceAreaToBeSourceReduced, personnelRoundTripDays, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped) + personnelRoundTripDays) *
                personnelHoursCost);
        }
    }
}