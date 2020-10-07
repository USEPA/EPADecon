﻿using System.Collections.Generic;
using System.Linq;

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
        
        public double CalculateLaborCost(double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced,
            double costPerTonRemoved)
        {
            var workDays = _workDaysCalculator.CalculateWorkDays( _numberTeams, saToBeSourceReduced);

            var personnelHoursCost = _personnelPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

            return (workDays + _personnelOverhead + personnelRoundTripDays) * GlobalConsants.HoursPerWorkDay * _numberTeams * personnelHoursCost +
                saToBeSourceReduced * _massPerSa * costPerTonRemoved;
        }

        public double CalculateLaborDays(double _numberTeams, double personnelRoundTripDays, double saToBeSourceReduced)
        {
            var workDays = _workDaysCalculator.CalculateWorkDays(_numberTeams, saToBeSourceReduced);

            return workDays + _personnelOverhead + personnelRoundTripDays;
        }
    }
}