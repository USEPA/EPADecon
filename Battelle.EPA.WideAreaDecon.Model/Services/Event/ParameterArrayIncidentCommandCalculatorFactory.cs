using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Event
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayIncidentCommandCalculatorFactory : IIncidentCommandCalculatorFactory
    {
        public TravelCostCalculator Calculator_travel { get; set; }
        public LaborCostCalculator Calculator_labor { get; set; }
        public SuppliesCostCalculator Calculator_supplies { get; set; }
        public OnsiteDaysCalculator Calculator_onsiteDays { get; set; }

        public ParameterArrayIncidentCommandCalculatorFactory(
            IncidentCommandParameters icParameters,
            OtherParameters otParameters,
            CostParameters costParameters)
        {
            Calculator_travel = new TravelCostCalculator(
                costParameters.RentalCarCostPerDay,
                costParameters.RoundtripTicketCostPerPerson,
                costParameters.PerDiem,
                otParameters.PersonnelPerRentalCar);

            Calculator_labor = new LaborCostCalculator(
                icParameters.PersonnelReqPerTeam,
                costParameters.HourlyRate);

            Calculator_supplies = new SuppliesCostCalculator(
                costParameters.IcRentalCostPerDay,
                costParameters.IcSuppliesCostPerDay);

            Calculator_onsiteDays = new OnsiteDaysCalculator(
                icParameters.PersonnelOverheadDays);
        }

        public IncidentCommandCostCalculator GetCalculator()
        {
            return new IncidentCommandCostCalculator
            {
                Calculator_travel = Calculator_travel,
                Calculator_labor = Calculator_labor,
                Calculator_supplies = Calculator_supplies,
                Calculator_onsiteDays = Calculator_onsiteDays
            };
        }
    }
}
