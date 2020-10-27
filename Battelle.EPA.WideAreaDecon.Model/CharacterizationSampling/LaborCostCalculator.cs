using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly double _hoursPerEntryPerTeam;
        private readonly double _hoursPerExitPerTeam;
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly double _personnelOverhead;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;

        private readonly ISuppliesCostCalculator _suppliesCostCalculator;

        private readonly IPhaseLagCalculator _phaseLagCalculator;

        public LaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double personnelOverhead,
            double numberEntriesPerTeamPerDay,
            double hoursPerEntryPerTeam,
            double hoursPerExitPerTeam,
            Dictionary<PersonnelLevel, double> personnelHourlyRate,
            ISuppliesCostCalculator suppliesCostCalculator,
            IPhaseLagCalculator phaseLagCalculator)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _personnelOverhead = personnelOverhead;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _hoursPerEntryPerTeam = hoursPerEntryPerTeam;
            _hoursPerExitPerTeam = hoursPerExitPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _suppliesCostCalculator = suppliesCostCalculator;
            _phaseLagCalculator = phaseLagCalculator;
        }
        
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            var personnelHoursCost = _personnelRequiredPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            var workDays = _suppliesCostCalculator.CalculateWorkDays( _numberTeams,  _surfaceAreaToBeHepa,  _surfaceAreaToBeWiped);

            return (workDays + _personnelOverhead + personnelRoundTripDays) * GlobalConstants.HoursPerWorkDay * _numberTeams * personnelHoursCost;
        }
        
        //return double if Elabor cost is not longer readonly
        public double CalculateEntExitLaborCost(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped)
        {
            var personnelHoursCost = _personnelRequiredPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            var workDays = _suppliesCostCalculator.CalculateWorkDays( _numberTeams, _surfaceAreaToBeHepa, _surfaceAreaToBeWiped);

            var totalEntries = workDays * _numberEntriesPerTeamPerDay * _numberTeams;

            return ((totalEntries * _hoursPerEntryPerTeam) +
                (totalEntries * _hoursPerExitPerTeam)) * personnelHoursCost;
        }

        public double CalculateLaborDays(double _numberTeams, double personnelRoundTripDays, double _surfaceAreaToBeHepa, 
            double _surfaceAreaToBeWiped, double numberLabs, double sampleTimeTransmitted)
        {
            var workDays = _suppliesCostCalculator.CalculateWorkDays( _numberTeams, _surfaceAreaToBeHepa,  _surfaceAreaToBeWiped);

            var phaseLag = _phaseLagCalculator.CalculatePhaseLagTime( numberLabs,  sampleTimeTransmitted,  _surfaceAreaToBeHepa,  _surfaceAreaToBeWiped);

            return workDays + _personnelOverhead + personnelRoundTripDays;
        }
    }
}