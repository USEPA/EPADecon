﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time
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
            return workDays + _overheadDays;
        }
    }
}
