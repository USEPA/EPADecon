namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time
{
    public class OnsiteDaysCalculator : IOnsiteDaysCalculator
    {
        private readonly double _overheadDays;

        public OnsiteDaysCalculator(double overheadDays)
        {
            _overheadDays = overheadDays;
        }

        public double CalculateOnsiteDays(double workDays)
        {
            return workDays > 0
                ? workDays + _overheadDays
                : 0;
        }
    }
}
