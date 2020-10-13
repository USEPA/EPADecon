using System.Collections.Generic;
using static Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public interface IEntranceExitCostCalculator
    {
        public double CalculateEntranceExitCost(double _numberTeams, double saToBeSourceReduced, Dictionary<PpeLevel, double> ppeEachLevelPerTeam);
    }
}