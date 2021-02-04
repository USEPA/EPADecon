using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class DecontaminationCostCalculator : IDecontaminationCalculatorFactory
    {
        private WorkDaysCalculator Calculator_workDays { get; set; }
        private LaborCostCalculator Calculator_labor { get; set; }
        private SuppliesCostCalculator Calculator_supplies { get; set; }
        private EntranceExitCostCalculator Calculator_entEx { get; set; }

        public double CalculateCost(double _numberTeams, double personnelRoundTripDays, Dictionary<PpeLevel, double> ppeEachLevelPerTeam, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var workDays = Calculator_workDays.CalculateWorkDays();
            var suppliesCosts = Calculator_supplies.FoggingSuppliesCostCalculator(areaContaminated); //TODO: Fix this method call
            var laborCosts = Calculator_labor.CalculateLaborCost(workDays, _numberTeams, personnelRoundTripDays);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(workDays, _numberTeams, ppeEachLevelPerTeam);
            return (suppliesCosts + laborCosts + entExCosts);
        }

        public DecontaminationCostCalculator GetCalculator()
        {
            return new DecontaminationCostCalculator();
        }
    }
}