namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class WorkDaysCalculator : IWorkDaysCalculator
    {
        private readonly double _massPerSa;
        private readonly double _massRemovedPerHrPerTeam;
        private readonly double _teamsRequired;

        public WorkDaysCalculator(
            double teamsRequired,
            double massRemovedPerHrPerTeam,
            double massPerSa)
        {
            _teamsRequired = teamsRequired;
            _massRemovedPerHrPerTeam = massRemovedPerHrPerTeam;
            _massPerSa = massPerSa;
        }

        public double CalculateWorkDays(double saToBeSourceReduced)
        {
            return saToBeSourceReduced * _massPerSa / (8 * _massRemovedPerHrPerTeam * _teamsRequired);
        }
    }
}