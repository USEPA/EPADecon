using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.Decontamination.Cost;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services.Event
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// </summary>
    public class ParameterArrayDecontaminationCalculatorFactory : IDecontaminationCalculatorFactory
    {
        public TravelCostCalculator Calculator_travel { get; set; }

        public ParameterArrayDecontaminationCalculatorFactory(
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
        public DecontaminationCostCalculator GetCalculator()
        {
            return new DecontaminationCostCalculator
            {
                Calculator_travel = Calculator_travel
            };
        }
    }
}
