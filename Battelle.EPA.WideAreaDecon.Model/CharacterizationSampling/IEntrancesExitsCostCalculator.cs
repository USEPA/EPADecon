using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface IEntrancesExitsCostCalculator
    {
        public double CalculateEntrancesExitsCost(double _numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);
    }
}