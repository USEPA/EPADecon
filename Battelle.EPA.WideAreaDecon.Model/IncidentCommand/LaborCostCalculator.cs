using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public enum PersonnelLevel
    {

    }

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

        public double CalculateOnSiteDays(double _numberTeams, double saToBeSourceReduced, double personnelRoundTripDays)
        {
            var laborDaysCs = _laborCostCalculatorCs.CalculateLaborDays( _numberTeams, personnelRoundTripDays);
            var laborDaysSr = _laborCostCalculatorSr.CalculateLaborDays( _numberTeams, personnelRoundTripDays, saToBeSourceReduced);
            var laborDaysDc = _laborCostCalculatorDc.CalculateLaborDays(personnelRoundTripDays);

            return laborDaysCs + laborDaysSr + laborDaysDc + _personnelOverheadDays;
        }

        public double CalculateLaborCost(double _numberDays, double saToBeSourceReduced, double personnelRoundTripDays,double _surfaceAreaToBeHepa,double _surfaceAreaToBeWiped)
        {
            var laborDaysCs = _laborCostCalculatorCs.CalculateLaborDays( _numberTeams, personnelRoundTripDays, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped);
            var laborDaysSr = _laborCostCalculatorSr.CalculateLaborDays( _numberDays,  saToBeSourceReduced, personnelRoundTripDays);
            var laborDaysDc = _laborCostCalculatorDc.CalculateLaborDays(personnelRoundTripDays);

            var totalPersonnel = _personnelReqPerTeam.Sum();

            var personnelHoursCost = _personnelReqPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var laborHours = GlobalConsants.HoursPerWorkDay * (laborDaysCs + laborDaysSr + laborDaysDc + _personnelOverheadDays +
                personnelRoundTripDays);

            return(GlobalConsants.HoursPerWorkDay * (CalculateOnSiteDays(_numberDays,saToBeSourceReduced, personnelRoundTripDays) + personnelRoundTripDays) *
                personnelHoursCost);
        }
    }
}