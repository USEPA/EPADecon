using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Cost;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class CharacterizationSamplingCostCalculator : ICharacterizationSamplingCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public LaborDaysCalculator Calculator_laborDays { get; set; }
        public WorkDaysCalculator Calculator_workdays { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public EntrancesExitsCostCalculator Calculator_entEx { get; set; }
        public AnalysisQuantityCostCalculator Calculator_analysis { get; set; }
        public PhaseLagCalculator Calculator_phaseLag { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Phase time for scenario results
        public Dictionary<PhaseDays, double> CalculateTime(double numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var laborDays = Calculator_laborDays.CalculateLaborDays(numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated);
            var workDays = Calculator_workdays.CalculateWorkDays(laborDays, numberTeams);
            var onsiteDays = Calculator_onsiteDays.CalculateOnsiteDays(workDays);

            return new Dictionary<PhaseDays, double>()
            {
                { PhaseDays.LaborDays, laborDays },
                { PhaseDays.WorkDays, workDays },
                { PhaseDays.OnsiteDays, onsiteDays }
            };
        }

        //Phase lag due to lab analysis duration for scenario results
        public double CalculatePhaseLag(int numberLabs, double sampleTimeTransmitted, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return Calculator_phaseLag.CalculatePhaseLagTime(numberLabs, sampleTimeTransmitted, fractionSampledWipe, fractionSampledHepa, areaContaminated);
        }

        //Phase costs for scenario results
        public double CalculatePhaseCosts(Dictionary<PhaseDays, double> phaseDays, double numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
             Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated);
            var laborCosts = Calculator_labor.CalculateLaborCost(phaseDays[PhaseDays.OnsiteDays], numberTeams);
            var entExCosts = Calculator_entEx.CalculateEntrancesExitsCost(phaseDays[PhaseDays.LaborDays], numberTeams, ppePerLevelPerTeam);
            var analysisCosts = Calculator_analysis.CalculateAnalysisQuantityCost(fractionSampledWipe, fractionSampledHepa, areaContaminated);
            
            return (suppliesCosts + laborCosts + entExCosts + analysisCosts);
        }

        //Travel costs for event results
        public double CalculateTravelCost(double roundtripDays, double numberTeams, Dictionary<PersonnelLevel, double> personnelRequired, Dictionary<PhaseDays, double> phaseDays)
        {
            return Calculator_travel.CalculateTravelCost(roundtripDays, numberTeams, personnelRequired, phaseDays[PhaseDays.OnsiteDays]);
        }

        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            return new CharacterizationSamplingCostCalculator();
        }
    }
}