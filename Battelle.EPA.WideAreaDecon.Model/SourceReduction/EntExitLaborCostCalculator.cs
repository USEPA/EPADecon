using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class EntExitLaborCostCalculator : IEntExitLaborCostCalculator
    {
        private readonly double _hoursPerEntryPerTeam;
        private readonly double _hoursPerExitPerTeam;
        private readonly double _massPerSa;
        private readonly double _numEntriesPerTeamPerDay;
        private readonly double[] _personnelHourlyRate;
        private readonly double[] _personnelPerTeam;
        private readonly double _teamsRequired;

        private readonly IWorkDaysCalculator _workDaysCalculator;

        public EntExitLaborCostCalculator(
            double teamsRequired,
            double[] personnelPerTeam,
            double[] personnelHourlyRate,
            double numEntriesPerTeamPerDay,
            double massPerSa,
            double hoursPerEntryPerTeam,
            double hoursPerExitPerTeam,
            IWorkDaysCalculator workDaysCalculator)
        {
            _teamsRequired = teamsRequired;
            _personnelPerTeam = personnelPerTeam;
            _numEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
            _massPerSa = massPerSa;
            _hoursPerEntryPerTeam = hoursPerEntryPerTeam;
            _hoursPerExitPerTeam = hoursPerExitPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _workDaysCalculator = workDaysCalculator;
        }

        public double CalculateEntExitLaborCost(double saToBeSourceReduced)
        {
            var personnelHoursCost = _personnelPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var workDays = _workDaysCalculator.CalculateWorkDays(saToBeSourceReduced);

            return (workDays * _numEntriesPerTeamPerDay * _teamsRequired * _hoursPerEntryPerTeam +
                workDays * _numEntriesPerTeamPerDay * _teamsRequired * _hoursPerExitPerTeam) * personnelHoursCost;
        }
    }
}