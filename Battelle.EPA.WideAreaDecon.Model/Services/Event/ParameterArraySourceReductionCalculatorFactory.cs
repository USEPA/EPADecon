using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.SourceReduction.Cost;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Event
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArraySourceReductionCalculatorFactory : ISourceReductionCalculatorFactory
    {
        public TravelCostCalculator Calculator_travel { get; set; }

        public ParameterArraySourceReductionCalculatorFactory(
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
        public SourceReductionCostCalculator GetCalculator()
        {
            return new SourceReductionCostCalculator
            {
                Calculator_travel = Calculator_travel
            };
        }
    }
}
