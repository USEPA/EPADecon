using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public enum PersonnelLevel
    {

    }

    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly double _hoursPerEntryPerTeam;
        private readonly double _hoursPerExitPerTeam;
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly double _personnelOverhead;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;

        private readonly ISuppliesCostCalculator _suppliesCostCalculator;

        public LaborCostCalculator(
            Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam,
            double personnelOverhead,
            double numberEntriesPerTeamPerDay,
            double hoursPerEntryPerTeam,
            double hoursPerExitPerTeam,
            Dictionary<PersonnelLevel, double> _personnelHourlyRate,
            ISuppliesCostCalculator suppliesCostCalculator)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _personnelOverhead = personnelOverhead;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _hoursPerEntryPerTeam = hoursPerEntryPerTeam;
            _hoursPerExitPerTeam = hoursPerExitPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _suppliesCostCalculator = suppliesCostCalculator;
        }
        
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays)
        {
            var personnelHoursCost = _personnelRequiredPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var workDays = _suppliesCostCalculator.CalculateWorkDays();

            return (workDays + _personnelOverhead + personnelRoundTripDays) * 8 * _numberTeams * personnelHoursCost;
        }

        //return double if Elabor cost is not longer readonly
        public double CalculateEntExitLaborCost(double _numberTeams)
        {
            var personnelHoursCost = _personnelRequiredPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var workDays = _suppliesCostCalculator.CalculateWorkDays();

            return (workDays * _numberEntriesPerTeamPerDay * _numberTeams * _hoursPerEntryPerTeam +
                workDays * _numberEntriesPerTeamPerDay * _numberTeams * _hoursPerExitPerTeam) * personnelHoursCost;
        }

        public double CalculateLaborDays(double _numberTeams, double personnelRoundTripDays)
        {
            var workDays = _suppliesCostCalculator.CalculateWorkDays();

            return workDays + _personnelOverhead + personnelRoundTripDays;
        }
    }
}