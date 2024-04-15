using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling;
using Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Cost;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Event
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayClearanceSamplingCalculatorFactory : IClearanceSamplingCalculatorFactory
    {
        public TravelCostCalculator Calculator_travel { get; set; }

        public ParameterArrayClearanceSamplingCalculatorFactory(
            OtherParameters otParameters,
            CostParameters costParameters)
        {
            Calculator_travel = new TravelCostCalculator(
                costParameters.RentalCarCostPerDay,
                costParameters.RoundtripTicketCostPerPerson,
                costParameters.PerDiem,
                otParameters.PersonnelPerRentalCar
            );
        }

        public ClearanceSamplingCostCalculator GetCalculator()
        {
            return new ClearanceSamplingCostCalculator
            {
                Calculator_travel = Calculator_travel
            };
        }
    }
}
