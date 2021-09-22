﻿using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public interface IEntrancesExitsCostCalculator
    {
        public double CalculateEntrancesExitsCost(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam);
    }
}