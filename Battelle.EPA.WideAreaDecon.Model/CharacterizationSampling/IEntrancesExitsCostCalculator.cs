using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface IEntrancesExitsCostCalculator
    {
        public double CalculateEntrancesExitsCost(IEnumerable<double> ppePerLevelPerTeam);
    }
}