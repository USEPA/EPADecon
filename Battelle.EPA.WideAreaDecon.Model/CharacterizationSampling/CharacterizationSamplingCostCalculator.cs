using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Cost;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;
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
        public ElementLagCalculator Calculator_elementLag { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Element time for scenario results
        public Dictionary<ElementDays, double> CalculateTime(double numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated, Dictionary<PpeLevel, double> ppeLevelPerTeam)
        {
            var laborDays = Calculator_laborDays.CalculateLaborDays(numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated);
            var workDays = Calculator_workdays.CalculateWorkDays(laborDays, numberTeams, ppeLevelPerTeam);
            var onsiteDays = Calculator_onsiteDays.CalculateOnsiteDays(workDays);

            return new Dictionary<ElementDays, double>()
            {
                { ElementDays.LaborDays, laborDays },
                { ElementDays.WorkDays, workDays },
                { ElementDays.OnsiteDays, onsiteDays }
            };
        }

        //Element lag due to lab analysis duration for scenario results
        public double CalculateElementLag(int numberLabs, double sampleTimeTransmitted, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            return Calculator_elementLag.CalculateElementLagTime(numberLabs, sampleTimeTransmitted, fractionSampledWipe, fractionSampledHepa, areaContaminated);
        }

        //Element costs for scenario results
        public SiteSamplingResourceAndCostResults CalculateElementCosts(Dictionary<ElementDays, double> elementDays, double numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
             Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var supplies = Calculator_supplies.CalculateSuppliesCost(numberTeams, fractionSampledWipe, fractionSampledHepa, areaContaminated);
            var laborCosts = Calculator_labor.CalculateLaborCost(elementDays[ElementDays.OnsiteDays], numberTeams);
            var entEx = Calculator_entEx.CalculateEntrancesExitsCost(elementDays[ElementDays.LaborDays], numberTeams, ppePerLevelPerTeam);
            var analysisCosts = Calculator_analysis.CalculateAnalysisQuantityCost(fractionSampledWipe, fractionSampledHepa, areaContaminated);

            return new SiteSamplingResourceAndCostResults()
            {
                SamplingCost = supplies.SamplingCost + laborCosts + entEx.SamplingCost + analysisCosts,
                TotalPpeUnits = entEx.TotalPpeUnits,
                TotalVacuumSamples = supplies.TotalVacuumSamples,
                TotalWipeSamples = supplies.TotalWipeSamples
            };
        }

        //Travel costs for event results
        public double CalculateTravelCost(double roundtripDays, double numberTeams, Dictionary<PersonnelLevel, double> personnelRequired, double onsiteDays)
        {
            return Calculator_travel.CalculateTravelCost(roundtripDays, numberTeams, personnelRequired, onsiteDays);
        }

        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            return new CharacterizationSamplingCostCalculator();
        }
    }
}