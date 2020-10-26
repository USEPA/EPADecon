namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _equipmentRentalCostPerDay;

        private readonly ILaborCostCalculator _laborCostCalculator;
        private readonly double _suppliesCostPerDay;

        public SuppliesCostCalculator(
            double equipmentRentalCostPerDay,
            double suppliesCostPerDay,
            ILaborCostCalculator laborCostCalculator)
        {
            _equipmentRentalCostPerDay = equipmentRentalCostPerDay;
            _suppliesCostPerDay = suppliesCostPerDay;
            _laborCostCalculator = laborCostCalculator;
        }

        public double CalculateSuppliesCost(double _numberTeams, double surfaceAreaToBeSourceReduced, double personnelRoundTripDays, double _surfaceAreaToBeHepa
            ,double _surfaceAreaToBeWiped, double numberLabs, double sampleTimeTransmitted)
        {
            var onSiteDays = _laborCostCalculator.CalculateOnSiteDays(   _numberTeams,  surfaceAreaToBeSourceReduced,  personnelRoundTripDays,
             _surfaceAreaToBeHepa, _surfaceAreaToBeWiped,  numberLabs,  sampleTimeTransmitted);

            return onSiteDays * (_equipmentRentalCostPerDay + _suppliesCostPerDay);
        }
    }
}