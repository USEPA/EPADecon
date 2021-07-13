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
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workdays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public AnalysisQuantityCostCalculator Calculator_analysis { get; set; }
        public PhaseLagCalculator Calculator_phaseLag { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Phase time for scenario results
        public Dictionary<PhaseDays, double> CalculateTime(double numberTeams, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var laborDays = Calculator_laborDays.CalculateLaborDays(numberTeams, fractionSampled, areaContaminated);
            var workDays = Calculator_workdays.CalculateWorkDays(laborDays);
            var onsiteDays = Calculator_onsiteDays.CalculateOnsiteDays(workDays);

            return new Dictionary<PhaseDays, double>()
            {
                { PhaseDays.LaborDays, laborDays },
                { PhaseDays.WorkDays, workDays },
                { PhaseDays.OnsiteDays, onsiteDays }
            };
        }

        //Phase lag due to lab analysis duration for scenario results
        public double CalculatePhaseLag(int numberLabs, double sampleTimeTransmitted, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return Calculator_phaseLag.CalculatePhaseLagTime(numberLabs, sampleTimeTransmitted, fractionSampled, areaContaminated);
        }

        //Phase costs for scenario results
        public double CalculatePhaseCosts(Dictionary<PhaseDays, double> phaseDays, double numberTeams, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
             Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(fractionSampled, areaContaminated);
            var laborCosts = Calculator_labor.CalculateLaborCost(phaseDays[PhaseDays.OnsiteDays], numberTeams);
            var analysisCosts = Calculator_analysis.CalculateAnalysisQuantityCost(fractionSampled, areaContaminated);

            return (suppliesCosts + laborCosts + analysisCosts);
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
