using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public class IncidentCommandCostCalculator : IIncidentCommandCalculatorFactory
    {
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public TravelCostCalculator Calculator_travel { get; set; }

        //Phase time for scenario results
        public double CalculateTime(double onsiteDaysCS, double onsiteDaysSR, double onsiteDaysDC, double onsiteDaysCLS, double onsiteDaysWS)
        {
            return Calculator_onsiteDays.CalculateOnSiteDays(onsiteDaysCS, onsiteDaysSR, onsiteDaysDC, onsiteDaysCLS, onsiteDaysWS);
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
