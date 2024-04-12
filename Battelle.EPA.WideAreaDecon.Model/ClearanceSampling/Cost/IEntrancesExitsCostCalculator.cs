using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;

namespace Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Cost
{
    public interface IEntrancesExitsCostCalculator
    {
        public SiteSamplingResourceAndCostResults CalculateEntrancesExitsCost(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam);
    }
}