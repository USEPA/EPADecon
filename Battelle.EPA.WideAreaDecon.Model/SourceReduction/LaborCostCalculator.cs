﻿using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class LaborCostCalculator : ILaborCostCalculator
    {
        private readonly double _massPerSa;
        private readonly Dictionary<PersonnelLevel, double> _personnelHourlyRate;
        private readonly double _personnelOverhead;
        private readonly Dictionary<PersonnelLevel, double> _personnelPerTeam;

        private readonly IWorkDaysCalculator _workDaysCalculator;

        public LaborCostCalculator(
            double personnelOverhead,
            Dictionary<PersonnelLevel, double> personnelPerTeam,
            Dictionary<PersonnelLevel, double> personnelHourlyRate,
            double massPerSa,
            IWorkDaysCalculator workDaysCalculator)
        {
            _personnelOverhead = personnelOverhead;
            _personnelPerTeam = personnelPerTeam;
            _personnelHourlyRate = personnelHourlyRate;
            _massPerSa = massPerSa;
            _workDaysCalculator = workDaysCalculator;
        }
        
        public double CalculateLaborCost(double workDays, double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced,
            double costPerTonRemoved)
        {
            var personnelHoursCost = _personnelPerTeam.Values.Zip(_personnelHourlyRate.Values, (x, y) => x * y).Sum();

            return (workDays + _personnelOverhead + personnelRoundTripDays) * GlobalConstants.HoursPerWorkDay * _numberTeams * personnelHoursCost +
                saToBeSourceReduced * _massPerSa * costPerTonRemoved;
        }

        public double CalculateLaborDays(double workDays, double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced)
        {
            return workDays + _personnelOverhead + personnelRoundTripDays;
        }
    }
}