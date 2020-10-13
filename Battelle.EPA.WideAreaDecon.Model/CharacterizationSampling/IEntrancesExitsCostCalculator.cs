using System.Collections.Generic;
using static Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface IEntrancesExitsCostCalculator
    {
        public double CalculateEntrancesExitsCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);
    }
}