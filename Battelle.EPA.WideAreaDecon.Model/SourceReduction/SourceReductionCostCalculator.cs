using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
    public class SourceReductionCostCalculator : ISourceReductionCalculatorFactory
    {
        public WorkDaysCalculator Calculator_workDays { get; set; }
        public LaborCostCalculator Calculator_labor { get; set; }
        public EntranceExitCostCalculator Calculator_entEx { get; set; }
        public EntExitLaborCostCalculator Calculator_entExLabor { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Phase time for scenario results
        public double CalculateTime(double _numberTeams, double saToBeSourceReduced, double area)
        {
            return Calculator_workDays.CalculateWorkDays(_numberTeams, saToBeSourceReduced, area);
        }

        //Phase costs for scenario results
        public double CalculatePhaseCosts(double workDays, double _numberTeams, double saToBeSourceReduced, double costPerTonRemoved, Dictionary<PpeLevel, double> ppePerLevelPerTeam, double area)
        {
            var laborCosts = Calculator_labor.CalculateLaborCost(workDays, _numberTeams, saToBeSourceReduced, costPerTonRemoved, area);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(workDays, _numberTeams, ppePerLevelPerTeam);
            return (laborCosts + entExCosts);
        }

        //Travel costs for event results
        public double CalculateTravelCost(double roundtripDays, double numTeams, Dictionary<PersonnelLevel, double> personnelRequired, double onsiteDays)
        {
            return Calculator_travel.CalculateTravelCost(roundtripDays, numTeams, personnelRequired, onsiteDays);
        }

        public SourceReductionCostCalculator GetCalculator()
        {
            return new SourceReductionCostCalculator();
        }
    }
}