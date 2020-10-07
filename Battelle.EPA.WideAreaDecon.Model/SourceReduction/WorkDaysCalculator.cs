namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class WorkDaysCalculator : IWorkDaysCalculator
    {
        private readonly double _massPerSa;
        private readonly double _massRemovedPerHrPerTeam;

        public WorkDaysCalculator(
            double massRemovedPerHrPerTeam,
            double massPerSa)
        {
            _massRemovedPerHrPerTeam = massRemovedPerHrPerTeam;
            _massPerSa = massPerSa;
        }

        public double CalculateWorkDays(double _numberTeams, double saToBeSourceReduced)
        {
            return saToBeSourceReduced * _massPerSa / (8 * _massRemovedPerHrPerTeam * _numberTeams);
        }
    }
}