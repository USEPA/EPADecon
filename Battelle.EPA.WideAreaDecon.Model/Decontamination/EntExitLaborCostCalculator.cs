using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public enum PersonnelLevel
    {
        [EnumMember(Value = "OSC")] OSC,
        [EnumMember(Value = "PL-1")] PL1,
        [EnumMember(Value = "PL-2")] PL2,
        [EnumMember(Value = "PL-3")] PL3,
        [EnumMember(Value = "PL-4")] PL4
    }

    public class EntExitLaborCostCalculator : IEntExitLaborCostCalculator
    {
        private readonly double _hoursPerEntryPerTeam;
        private readonly double _hoursPerExitPerTeam;
        private readonly double _numEntriesPerTeamPerDay;
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly Dictionary<PersonnelLevel, double> _personnelReqPerTeam;
        private readonly Dictionary<ApplicationMethodType, double> _workDaysPerAppMethod;


        public EntExitLaborCostCalculator(
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double numEntriesPerTeamPerDay,
            double hoursPerEntryPerTeam,
            double hoursPerExitPerTeam,
            Dictionary<PersonnelLevel, double> personnelHourlyRate,
            Dictionary<ApplicationMethodType, double> workDaysPerAppMethod)
        {
            _personnelReqPerTeam = personnelReqPerTeam;
            _numEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
            _hoursPerEntryPerTeam = hoursPerEntryPerTeam;
            _hoursPerExitPerTeam = hoursPerExitPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _workDaysPerAppMethod = workDaysPerAppMethod;
        }

        public double CalculateEntExitLaborCost(double _numberTeams)
        {
            var personnelHoursCost = _personnelReqPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            var totalWorkDays = _workDaysPerAppMethod.Values.Sum();

            return (totalWorkDays * _numEntriesPerTeamPerDay * _numberTeams * _hoursPerEntryPerTeam +
                totalWorkDays * _numEntriesPerTeamPerDay * _numberTeams * _hoursPerExitPerTeam) * personnelHoursCost;
        }
    }
}