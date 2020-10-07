using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly double _numTeams;
        private readonly double[] _personnelHourlyRate;
        private readonly double _personnelOverhead;
        private readonly double[] _personnelReqPerTeam;
        private readonly double[] _workDaysPerAppMethod;

        public LaborCostCalculator(
            double numTeams,
            double[] personnelReqPerTeam,
            double[] personnelHourlyRate,
            double personnelOverhead,
            double[] workDaysPerAppMethod)
        {
            _numTeams = numTeams;
            _personnelReqPerTeam = personnelReqPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _personnelOverhead = personnelOverhead;
            _workDaysPerAppMethod = workDaysPerAppMethod;
        }

        public double CalculateLaborCost(double personnelRoundTripDays)
        {
            var personnelHoursCost = _personnelReqPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var totalWorkDays = _workDaysPerAppMethod.Sum();

            return (totalWorkDays + _personnelOverhead + personnelRoundTripDays) * 8 * _numTeams * personnelHoursCost;
        }

        public double CalculateLaborDays(double personnelRoundTripDays)
        {
            var totalWorkDays = _workDaysPerAppMethod.Sum();

            return totalWorkDays + _personnelOverhead + personnelRoundTripDays;
        }
    }
}