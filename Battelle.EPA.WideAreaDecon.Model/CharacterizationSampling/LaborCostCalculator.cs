using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly double _hoursPerEntryPerTeam;
        private readonly double _hoursPerExitPerTeam;
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly double _numberTeams;
        private readonly double[] _personnelHourlyRate;
        private readonly double _personnelOverhead;
        private readonly double[] _personnelRequiredPerTeam;

        private readonly ISuppliesCostCalculator _suppliesCostCalculator;

        public LaborCostCalculator(
            double numberTeams,
            double[] personnelRequiredPerTeam,
            double personnelOverhead,
            double numberEntriesPerTeamPerDay,
            double hoursPerEntryPerTeam,
            double hoursPerExitPerTeam,
            double[] personnelHourlyRate,
            ISuppliesCostCalculator suppliesCostCalculator)
        {
            _numberTeams = numberTeams;
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _personnelOverhead = personnelOverhead;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _hoursPerEntryPerTeam = hoursPerEntryPerTeam;
            _hoursPerExitPerTeam = hoursPerExitPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _suppliesCostCalculator = suppliesCostCalculator;
        }

        public double CalculateLaborCost(double personnelRoundTripDays)
        {
            var personnelHoursCost = _personnelRequiredPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var workDays = _suppliesCostCalculator.CalculateWorkDays();

            return (workDays + _personnelOverhead + personnelRoundTripDays) * 8 * _numberTeams * personnelHoursCost;
        }

        //return double if Elabor cost is not longer readonly
        public double CalculateEntExitLaborCost()
        {
            var personnelHoursCost = _personnelRequiredPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var workDays = _suppliesCostCalculator.CalculateWorkDays();

            return (workDays * _numberEntriesPerTeamPerDay * _numberTeams * _hoursPerEntryPerTeam +
                workDays * _numberEntriesPerTeamPerDay * _numberTeams * _hoursPerExitPerTeam) * personnelHoursCost;
        }

        public double CalculateLaborDays(double personnelRoundTripDays)
        {
            var workDays = _suppliesCostCalculator.CalculateWorkDays();

            return workDays + _personnelOverhead + personnelRoundTripDays;
        }
    }
}