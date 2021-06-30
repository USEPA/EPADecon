using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
    public class DecontaminationCostCalculator : IDecontaminationCalculatorFactory
    {
        public WorkDaysCalculator Calculator_workDays { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public EntranceExitCostCalculator Calculator_entEx { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Phase time for scenario results
        public Tuple<List<Dictionary<ApplicationMethod, double>>, Dictionary<PhaseDays, double>> CalculateTime()
        {
            var laborDays = Calculator_laborDays.CalculateLaborDays();
            var workDays = Calculator_workDays.CalculateWorkDays(laborDays);
            var onsiteDays = Calculator_onsiteDays.CalculateOnsiteDays(workDays);

            var phaseDays = new Dictionary<PhaseDays, double>
            {
                { PhaseDays.WorkDays, workDays },
                { PhaseDays.OnsiteDays, onsiteDays }
            };

            return new Tuple<List<Dictionary<ApplicationMethod, double>>, Dictionary<PhaseDays, double>> (laborDays, phaseDays);
        }

        //Phase costs for scenario results
        public double CalculatePhaseCosts(Dictionary<PhaseDays, double> phaseDays, double numberTeams, Dictionary<PpeLevel, double> ppeEachLevelPerTeam, Dictionary<SurfaceType, ContaminationInformation> areaContaminated, Dictionary<SurfaceType, ApplicationMethod> treatmentMethods, List<Dictionary<ApplicationMethod, double>> decontaminationWorkdays)
        {
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(areaContaminated, treatmentMethods);
            var laborCosts = Calculator_labor.CalculateLaborCost(phaseDays[PhaseDays.OnsiteDays], numberTeams);
            var entExCosts = Calculator_entEx.CalculateEntranceExitCost(numberTeams, ppeEachLevelPerTeam, decontaminationWorkdays);
            
            return (suppliesCosts + laborCosts + entExCosts);
        }

        //Travel costs for event results
        public double CalculateTravelCost(double roundtripDays, double numberTeams, Dictionary<PersonnelLevel, double> personnelRequired, double onsiteDays)
        {
            return Calculator_travel.CalculateTravelCost(roundtripDays, numberTeams, personnelRequired, onsiteDays);
        }

        public DecontaminationCostCalculator GetCalculator()
        {
            return new DecontaminationCostCalculator();
        }
    }
}