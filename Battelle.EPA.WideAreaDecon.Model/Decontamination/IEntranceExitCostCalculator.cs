using System.Collections.Generic;
using static Battelle.EPA.WideAreaDecon.Model.Enumeration;


namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public interface IEntranceExitCostCalculator
    {
        public double CalculateEntranceExitCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam);
    }
}