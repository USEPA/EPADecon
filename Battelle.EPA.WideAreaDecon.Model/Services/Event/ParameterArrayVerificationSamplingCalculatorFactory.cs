using Battelle.EPA.WideAreaDecon.Model.VerificationSampling;
using Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Cost;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Event
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayVerificationSamplingCalculatorFactory : IVerificationSamplingCalculatorFactory
    {
        public TravelCostCalculator Calculator_travel { get; set; }

        public ParameterArrayVerificationSamplingCalculatorFactory(
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

        public VerificationSamplingCostCalculator GetCalculator()
        {
            return new VerificationSamplingCostCalculator
            {
                Calculator_travel = Calculator_travel
            };
        }
    }
}
