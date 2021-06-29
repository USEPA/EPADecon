namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class WorkDaysCalculator : IWorkDaysCalculator
    {
        private readonly double _massPerSa;
        private readonly double _massRemovedPerHrPerTeam;
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly double _prepTimePerTeamPerEntry;
        private readonly double _deconLineTimePerTeamPerExit;

        public WorkDaysCalculator(
            double massRemovedPerHrPerTeam,
            double massPerSa,
            double numberEntriesPerTeamPerDay,
            double prepTimePerTeamPerEntry,
            double deconLineTimePerTeamPerExit)
        {
            _massRemovedPerHrPerTeam = massRemovedPerHrPerTeam;
            _massPerSa = massPerSa;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _prepTimePerTeamPerEntry = prepTimePerTeamPerEntry;
            _deconLineTimePerTeamPerExit = deconLineTimePerTeamPerExit;
        }

        public double CalculateWorkDays(double _numberTeams, double saToBeSourceReduced, double area)
        {
            var workDays = (saToBeSourceReduced * area) * _massPerSa / (GlobalConstants.HoursPerWorkDay * _massRemovedPerHrPerTeam * _numberTeams);

            var totalEntries = workDays * _numberEntriesPerTeamPerDay * _numberTeams;

            var totalPrepTime = totalEntries * _prepTimePerTeamPerEntry;
            var totalDeconLineTime = totalEntries * _deconLineTimePerTeamPerExit;

            return workDays + ((totalPrepTime + totalDeconLineTime) / GlobalConstants.HoursPerWorkDay);
        }
    }
}