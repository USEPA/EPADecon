using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling
{
    public interface IWorkDaysCalculator
    {
        public double CalculateWorkDays(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam);
    }
}
