using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Event
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayCharacterizationSamplingCalculatorFactory : ICharacterizationSamplingCalculatorFactory
    {
        public TravelCostCalculator Calculator_travel { get; set; }

        public ParameterArrayCharacterizationSamplingCalculatorFactory(
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

        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            return new CharacterizationSamplingCostCalculator
            {
                Calculator_travel = Calculator_travel
            };
        }
    }
}
