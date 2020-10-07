using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly double _massPerSa;
        private readonly double[] _personnelHourlyRate;
        private readonly double _personnelOverhead;
        private readonly double[] _personnelPerTeam;
        private readonly double _teamsRequired;

        private readonly IWorkDaysCalculator _workDaysCalculator;

        public LaborCostCalculator(
            double teamsRequired,
            double personnelOverhead,
            double[] personnelPerTeam,
            double[] personnelHourlyRate,
            double massPerSa,
            IWorkDaysCalculator workDaysCalculator)
        {
            _teamsRequired = teamsRequired;
            _personnelOverhead = personnelOverhead;
            _personnelPerTeam = personnelPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _massPerSa = massPerSa;
            _workDaysCalculator = workDaysCalculator;
        }

        public double CalculateLaborCost(double personnelRoundTripDays, double saToBeSourceReduced,
            double costPerTonRemoved)
        {
            var workDays = _workDaysCalculator.CalculateWorkDays(saToBeSourceReduced);

            var personnelHoursCost = _personnelPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            return (workDays + _personnelOverhead + personnelRoundTripDays) * 8 * _teamsRequired * personnelHoursCost +
                saToBeSourceReduced * _massPerSa * costPerTonRemoved;
        }

        public double CalculateLaborDays(double personnelRoundTripDays, double saToBeSourceReduced)
        {
            var workDays = _workDaysCalculator.CalculateWorkDays(saToBeSourceReduced);

            return workDays + _personnelOverhead + personnelRoundTripDays;
        }
    }
}