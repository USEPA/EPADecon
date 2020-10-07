using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface IEntranceExitCostCalculator
    {
        public double CalculateEntranceExitCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam);
    }
}