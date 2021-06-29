using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost
{
    public interface IEntranceExitCostCalculator
    {
        public double CalculateEntranceExitCost(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppeEachLevelPerTeam);
    }
}