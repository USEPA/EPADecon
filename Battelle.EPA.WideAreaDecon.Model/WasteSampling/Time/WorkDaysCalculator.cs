using System;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time
{
    public class WorkDaysCalculator : IWorkDaysCalculator
    {
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly double _prepTimePerTeamPerEntry;
        private readonly double _deconLineTimePerTeamPerExit;

        public WorkDaysCalculator(
            double numberEntriesPerTeamPerDay,
            double prepTimePerTeamPerEntry,
            double deconLineTimePerTeamPerExit)
        {
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _prepTimePerTeamPerEntry = prepTimePerTeamPerEntry;
            _deconLineTimePerTeamPerExit = deconLineTimePerTeamPerExit;
        }

        public double CalculateWorkDays(double laborDays, double numberTeams)
        {
            var totalEntries = laborDays * _numberEntriesPerTeamPerDay * numberTeams;

            var totalPrepTime = totalEntries * _prepTimePerTeamPerEntry;
            var totalDeconLineTime = totalEntries * _deconLineTimePerTeamPerExit;

            return laborDays + ((totalPrepTime + totalDeconLineTime) / GlobalConstants.HoursPerWorkDay);
        }
    }
}
