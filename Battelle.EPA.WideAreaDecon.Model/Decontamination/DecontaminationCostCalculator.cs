using System.Collections.Generic;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class DecontaminationCostCalculator : IDecontaminationCalculatorFactory
    {
        public WorkDaysCalculator Calculator_workDays { get; set; }
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public EntranceExitCostCalculator Calculator_entEx { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Phase time for scenario results
        public List<Dictionary<ApplicationMethod, double>> CalculateTime()
        {
            return Calculator_workDays.CalculateWorkDays();
        }

        //Phase costs for scenario results
        public double CalculatePhaseCosts(double workDays, double _numberTeams, Dictionary<PpeLevel, double> ppeEachLevelPerTeam, Dictionary<SurfaceType, ContaminationInformation> areaContaminated, Dictionary<SurfaceType, ApplicationMethod> treatmentMethods, List<Dictionary<ApplicationMethod, double>> decontaminationWorkdays)
        {
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(areaContaminated, treatmentMethods);
            var laborCosts = Calculator_labor.CalculateLaborCost(workDays, _numberTeams);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(_numberTeams, ppeEachLevelPerTeam, decontaminationWorkdays);
            return (suppliesCosts + laborCosts + entExCosts);
        }

        //Travel costs for event results
        public double CalculateTravelCost(double roundtripDays, double numTeams, Dictionary<PersonnelLevel, double> personnelRequired, double onsiteDays)
        {
            return Calculator_travel.CalculateTravelCost(roundtripDays, numTeams, personnelRequired, onsiteDays);
        }

        public DecontaminationCostCalculator GetCalculator()
        {
            return new DecontaminationCostCalculator();
        }
    }
}