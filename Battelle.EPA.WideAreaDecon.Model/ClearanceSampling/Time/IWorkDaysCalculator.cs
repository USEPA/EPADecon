using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Time
{
    public interface IWorkDaysCalculator
    {
        public double CalculateWorkDays(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam);
    }
}
