using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public class IncidentCommandCostCalculator : IIncidentCommandCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }
        public CharacterizationSampling.LaborCostCalculator Calculator_laborCs { get; set; }
        public CharacterizationSampling.PhaseLagCalculator Calculator_phaseLag { get; set; }
        public CharacterizationSampling.SuppliesCostCalculator Calculator_suppliesCs { get; set; }
        public SourceReduction.LaborCostCalculator Calculator_laborSr { get; set; }
        public SourceReduction.WorkDaysCalculator Calculator_workDaysSr { get; set; }
        public Decontamination.LaborCostCalculator Calculator_laborDc { get; set; }
        public Decontamination.EfficacyCalculator Calculator_efficacy { get; set; }
        public Decontamination.WorkDaysCalculator Calculator_workDaysDc { get; set; }

        //Phase time for scenario results
        public double CalculateTime(double onsiteDaysCS, double onsiteDaysSR, double onsiteDaysDC)
        {
            return Calculator_labor.CalculateOnSiteDays(onsiteDaysCS, onsiteDaysSR, onsiteDaysDC);
        }

        //Phase costs for scenario results
        public double CalculatePhaseCosts(double onSiteDays)
        {
            var laborCosts = Calculator_labor.CalculateLaborCost(onSiteDays);
            var suppliesCosts = Calculator_supplies.CalculateSuppliesCost(onSiteDays);
            return (suppliesCosts + laborCosts);
        }

        //Travel costs for event results
        public double CalculateTravelCost(double roundtripDays, Dictionary<PersonnelLevel, double> personnelRequired, double onsiteDays)
        {
            return Calculator_travel.CalculateTravelCost(roundtripDays, personnelRequired, onsiteDays);
        }

        public IncidentCommandCostCalculator GetCalculator()
        {
            return new IncidentCommandCostCalculator();
        }
    }
}
