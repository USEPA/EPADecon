﻿using System;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time
{
    public class LaborDaysCalculator : ILaborDaysCalculator
    {
        private readonly double _massPerSa;
        private readonly double _massRemovedPerHrPerTeam;

        public LaborDaysCalculator(
            double massRemovedPerHrPerTeam,
            double massPerSa)
        {
            _massRemovedPerHrPerTeam = massRemovedPerHrPerTeam;
            _massPerSa = massPerSa;
        }

        public double CalculateLaborDays(double numberTeams, double massToBeSourceReduced, double area)
        {
            return (massToBeSourceReduced * area * _massPerSa) / (GlobalConstants.HoursPerWorkDay * _massRemovedPerHrPerTeam * numberTeams);
        }
    }
}