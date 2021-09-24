﻿using System;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time
{
    public class OnsiteDaysCalculator : IOnsiteDaysCalculator
    {
        private readonly double _overheadDays;

        public OnsiteDaysCalculator(double overheadDays)
        {
            _overheadDays = overheadDays;
        }

        public double CalculateOnSiteDays(double onsiteDaysCS, double onsiteDaysSR, double onsiteDaysDC, double onsiteDaysCLS, double onsiteDaysWS)
        {
            return onsiteDaysCS + onsiteDaysSR + onsiteDaysDC + onsiteDaysCLS + onsiteDaysWS + _overheadDays;
        }
    }
}