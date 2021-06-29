namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time
{
    public interface IWorkDaysCalculator
    {
        public double CalculateWorkDays(double laborDays, double numberTeams);
    }
}