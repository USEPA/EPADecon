using Battelle.EPA.WideAreaDecon.Model.WasteSampling;
using Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Event
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayWasteSamplingCalculatorFactory : IWasteSamplingCalculatorFactory
    {
        public TravelCostCalculator Calculator_travel { get; set; }

        public ParameterArrayWasteSamplingCalculatorFactory(
            OtherParameters otParameters,
            CostParameters costParameters)
        {
            Calculator_travel = new TravelCostCalculator(
                costParameters.rentalCarCostPerDay,
                costParameters.roundtripTicketCostPerPerson,
                costParameters.perDiem,
                otParameters.personnelPerRentalCar
            );
        }

        public WasteSamplingCostCalculator GetCalculator()
        {
            return new WasteSamplingCostCalculator
            {
                Calculator_travel = Calculator_travel
            };
        }
    }
}
