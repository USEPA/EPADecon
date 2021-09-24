using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling
{
    public class WasteSamplingCostCalculator : IWasteSamplingCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public EntrancesExitsCostCalculator Calculator_entEx { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workdays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public AnalysisQuantityCostCalculator Calculator_analysis { get; set; }
        public ElementLagCalculator Calculator_elementLag { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Element time for scenario results
        public Dictionary<ElementDays, double> CalculateTime(double numberTeams, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var laborDays = Calculator_laborDays.CalculateLaborDays(numberTeams, fractionSampled, areaContaminated);
            var workDays = Calculator_workdays.CalculateWorkDays(laborDays, numberTeams, ppePerLevelPerTeam);
            var onsiteDays = Calculator_onsiteDays.CalculateOnsiteDays(workDays);

            return new Dictionary<ElementDays, double>()
            {
                { ElementDays.LaborDays, laborDays },
                { ElementDays.WorkDays, workDays },
                { ElementDays.OnsiteDays, onsiteDays }
            };
        }

        //Element lag due to lab analysis duration for scenario results
        public double CalculateElementLag(int numberLabs, double sampleTimeTransmitted, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return Calculator_elementLag.CalculateElementLagTime(numberLabs, sampleTimeTransmitted, fractionSampled, areaContaminated);
        }

        //Element costs for scenario results
        public double CalculateElementCosts(Dictionary<ElementDays, double> elementDays, double numberTeams, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var entExCosts = Calculator_entEx.CalculateEntrancesExitsCost(elementDays[ElementDays.LaborDays], numberTeams, ppePerLevelPerTeam);
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(fractionSampled, areaContaminated);
            var laborCosts = Calculator_labor.CalculateLaborCost(elementDays[ElementDays.OnsiteDays], numberTeams);
            var analysisCosts = Calculator_analysis.CalculateAnalysisQuantityCost(fractionSampled, areaContaminated);

            return (entExCosts + suppliesCosts + laborCosts + analysisCosts);
        }

        //Travel costs for event results
        public double CalculateTravelCost(double roundtripDays, double numberTeams, Dictionary<PersonnelLevel, double> personnelRequired, double onsiteDays)
        {
            return Calculator_travel.CalculateTravelCost(roundtripDays, numberTeams, personnelRequired, onsiteDays);
        }

        public WasteSamplingCostCalculator GetCalculator()
        {
            return new WasteSamplingCostCalculator();
        }
    }
}
