using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class SourceReductionCostCalculator : ISourceReductionCalculatorFactory
    {
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workDays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public LaborCostCalculator Calculator_labor { get; set; }
        public EntranceExitCostCalculator Calculator_entEx { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Element time for scenario results
        public Dictionary<ElementDays, double> CalculateTime(double numberTeams, double massToBeSourceReduced, double area, Dictionary<PpeLevel, double> ppeLevelPerTeam)
        {
            var laborDays = Calculator_laborDays.CalculateLaborDays(numberTeams, massToBeSourceReduced, area);
            var workDays = Calculator_workDays.CalculateWorkDays(laborDays, numberTeams, ppeLevelPerTeam);
            var onsiteDays = Calculator_onsiteDays.CalculateOnsiteDays(workDays);

            return new Dictionary<ElementDays, double>
            {
                { ElementDays.LaborDays, laborDays },
                { ElementDays.WorkDays, workDays },
                { ElementDays.OnsiteDays, onsiteDays }
            };
        }

        //Element costs for scenario results
        public double CalculateElementCosts(Dictionary<ElementDays, double> elementDays, double numberTeams, double massToBeSourceReduced, double costPerTonRemoved, Dictionary<PpeLevel, double> ppePerLevelPerTeam, double area)
        {
            var laborCosts = Calculator_labor.CalculateLaborCost(elementDays[ElementDays.OnsiteDays], numberTeams, massToBeSourceReduced, costPerTonRemoved, area);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(elementDays[ElementDays.LaborDays], numberTeams, ppePerLevelPerTeam);
            
            return (laborCosts + entExCosts);
        }

        //Travel costs for event results
        public double CalculateTravelCost(double roundtripDays, double numberTeams, Dictionary<PersonnelLevel, double> personnelRequired, double onsiteDays)
        {
            return Calculator_travel.CalculateTravelCost(roundtripDays, numberTeams, personnelRequired, onsiteDays);
        }

        public SourceReductionCostCalculator GetCalculator()
        {
            return new SourceReductionCostCalculator();
        }
    }
}