using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public enum PersonnelLevel
    {

    }

    public class EntExitLaborCostCalculator : IEntExitLaborCostCalculator
    {
        private readonly Dictionary<PpeLevel, double> _costPerPpe;
        private readonly double _costPerRespirator;

        private readonly IEntExitLaborCostCalculator _entExitLaborCostCalculator;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;

        private readonly double _hoursPerEntryPerTeam;
        private readonly double _hoursPerExitPerTeam;
        private readonly double _massPerSa;
        private readonly double _numEntriesPerTeamPerDay;
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;

        private readonly double _teamsRequired;

        private readonly IWorkDaysCalculator _workDaysCalculator;

        public EntExitLaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelHourlyRate,
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double numEntriesPerTeamPerDay,
            double massPerSa,
            double hoursPerEntryPerTeam,
            double hoursPerExitPerTeam,
            IWorkDaysCalculator workDaysCalculator)
        {
            _personnelPerTeam = personnelPerTeam;
            _numEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
            _massPerSa = massPerSa;
            _hoursPerEntryPerTeam = hoursPerEntryPerTeam;
            _hoursPerExitPerTeam = hoursPerExitPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _workDaysCalculator = workDaysCalculator;
        }
        
        public double CalculateEntExitLaborCost(double _numberTeams, double saToBeSourceReduced)
        {
            var personnelHoursCost = _personnelPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var workDays = _workDaysCalculator.CalculateWorkDays(saToBeSourceReduced);

            return (workDays * _numEntriesPerTeamPerDay * _numberTeams * _hoursPerEntryPerTeam +
                workDays * _numEntriesPerTeamPerDay * _numberTeams * _hoursPerExitPerTeam) * personnelHoursCost;
        }
    }
}