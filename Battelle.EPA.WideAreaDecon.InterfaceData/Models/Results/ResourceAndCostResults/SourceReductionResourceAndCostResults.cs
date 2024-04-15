﻿using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults
{
    // Strictly used for returning cost and resource results from the cost calculator
    // so we can return multiple results (since the cost calculators actually calculate all of the resource
    // demands in order to then calculate costs)
    public class SourceReductionResourceAndCostResults
    {
        public double SourceReductionCost;
        public Dictionary<PpeLevel, int> TotalPpeUnits;
    }
}
