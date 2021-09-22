using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;


namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost
{
    public interface IEntranceExitCostCalculator
    {
        public double CalculateEntranceExitCost(double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam, List<Dictionary<ApplicationMethod, double>> decontaminationLaborDays);
    }
}