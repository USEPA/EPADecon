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

        //Phase time for scenario results
        public Dictionary<PhaseDays, double> CalculateTime(double numberTeams, double saToBeSourceReduced, double area)
        {
            var laborDays = Calculator_laborDays.CalculateLaborDays(numberTeams, saToBeSourceReduced, area);
            var workDays = Calculator_workDays.CalculateWorkDays(laborDays, numberTeams);
            var onsiteDays = Calculator_onsiteDays.CalculateOnsiteDays(workDays);

            return new Dictionary<PhaseDays, double>
            {
                { PhaseDays.LaborDays, laborDays },
                { PhaseDays.WorkDays, workDays },
                { PhaseDays.OnsiteDays, onsiteDays }
            };
        }

        //Phase costs for scenario results
        public double CalculatePhaseCosts(Dictionary<PhaseDays, double> phaseDays, double numberTeams, double saToBeSourceReduced, double costPerTonRemoved, Dictionary<PpeLevel, double> ppePerLevelPerTeam, double area)
        {
            var laborCosts = Calculator_labor.CalculateLaborCost(phaseDays[PhaseDays.OnsiteDays], numberTeams, saToBeSourceReduced, costPerTonRemoved, area);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(phaseDays[PhaseDays.LaborDays], numberTeams, ppePerLevelPerTeam);
            
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