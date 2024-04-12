using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost
{
    public interface IEntranceExitCostCalculator
    {
        public SourceReductionResourceAndCostResults CalculateEntranceExitCost(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppeEachLevelPerTeam);
    }
}