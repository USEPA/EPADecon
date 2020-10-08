using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public enum PersonnelLevel
    {

    }

    public class EntExitLaborCostCalculator : IEntExitLaborCostCalculator
    {
        private readonly Dictionary<PersonnelLevel, double> _personnelRequiredPerTeam;
        private readonly double _hoursPerEntryPerTeam;
        private readonly double _hoursPerExitPerTeam;
        private readonly double _massPerSurfaceArea;
        private readonly double _numEntriesPerTeamPerDay;
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;

        private readonly IWorkDaysCalculator _workDaysCalculator;

        public EntExitLaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelHourlyRate,
            Dictionary<PersonnelLevel, double> personnelRequiredPerTeam,
            double numEntriesPerTeamPerDay,
            double massPerSurfaceArea,
            double hoursPerEntryPerTeam,
            double hoursPerExitPerTeam,
            IWorkDaysCalculator workDaysCalculator)
        {
            _personnelRequiredPerTeam = personnelRequiredPerTeam;
            _numEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
            _massPerSurfaceArea = massPerSurfaceArea;
            _hoursPerEntryPerTeam = hoursPerEntryPerTeam;
            _hoursPerExitPerTeam = hoursPerExitPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _workDaysCalculator = workDaysCalculator;
        }
        
        public double CalculateEntExitLaborCost(double _numberTeams, double surfaceAreaToBeSourceReduced)
        {
            var personnelHoursCost = _personnelRequiredPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            var workDays = _workDaysCalculator.CalculateWorkDays( _numberTeams,  surfaceAreaToBeSourceReduced);

            return (workDays * _numEntriesPerTeamPerDay * _numberTeams * _hoursPerEntryPerTeam +
                workDays * _numEntriesPerTeamPerDay * _numberTeams * _hoursPerExitPerTeam) * personnelHoursCost;
        }
    }
}