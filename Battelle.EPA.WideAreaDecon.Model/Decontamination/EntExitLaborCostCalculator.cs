﻿using System.Collections.Generic;
using System.Linq;
using static Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
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