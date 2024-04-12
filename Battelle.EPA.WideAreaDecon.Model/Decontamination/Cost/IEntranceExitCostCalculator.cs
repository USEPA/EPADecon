using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;


namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost
{
    public interface IEntranceExitCostCalculator
    {
        public DecontaminationResourceAndCostResults CalculateEntranceExitCost(double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam, List<Dictionary<ApplicationMethod, double>> decontaminationLaborDays);
    }
}