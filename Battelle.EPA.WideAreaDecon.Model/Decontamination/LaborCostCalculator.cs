using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public enum PersonnelLevel
    {

    }

    public enum ApplicationMethodType
    {

    }

    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly double _personnelOverhead;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;
        private readonly Dictionary<ApplicationMethodType, double> _workDaysPerAppMethod;

        public LaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam;
            Dictionary<PersonnelLevel, double> personnelHourlyRate;
            double personnelOverhead,
            Dictionary<ApplicationMethodType, double> workDaysPerAppMethodd)
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _personnelOverhead = personnelOverhead;
            _workDaysPerAppMethod = workDaysPerAppMethod;
        }

        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays)
        {
            var personnelHoursCost = _personnelReqPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            var totalWorkDays = _workDaysPerAppMethod.Sum();

            return (totalWorkDays + _personnelOverhead + personnelRoundTripDays) * 8 * _numberTeams * personnelHoursCost;
        }

        public double CalculateLaborDays(double personnelRoundTripDays)
        {
            var totalWorkDays = _workDaysPerAppMethod.Sum();

            return totalWorkDays + _personnelOverhead + personnelRoundTripDays;
        }
    }
}