﻿using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public interface IEntranceExitCostCalculator
    {
        public double CalculateEntranceExitCost(double _numberTeams, double saToBeSourceReduced, Dictionary<PpeLevel, double> ppeEachLevelPerTeam);
    }
}