using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Scenario
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayIncidentCommandCalculatorFactory : IIncidentCommandCalculatorFactory
    {
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }

        public ParameterArrayIncidentCommandCalculatorFactory(
            IncidentCommandParameters icParameters,
            CostParameters costParameters)
        {
            Calculator_labor = new LaborCostCalculator(
                icParameters.personnelReqPerTeam,
                costParameters.hourlyRate
            );

            Calculator_supplies = new SuppliesCostCalculator(
                costParameters.icRentalCostPerDay,
                costParameters.icSuppliesCostPerDay
            );

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                icParameters.personnelOverheadDays
            );
        }

        public IncidentCommandCostCalculator GetCalculator()
        {
            return new IncidentCommandCostCalculator
            {
                Calculator_labor = Calculator_labor,
                Calculator_supplies = Calculator_supplies,
                Calculator_onsiteDays = Calculator_onsiteDays
            };
        }
    }
}
