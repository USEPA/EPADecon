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

        public double CalculateSuppliesCost(double saToBeSourceReduced, double personnelRoundTripDays)
        {
            var onSiteDays = _laborCostCalculator.CalculateOnSiteDays(saToBeSourceReduced, personnelRoundTripDays);

            return onSiteDays * (_equipmentRentalCostPerDay + _suppliesCostPerDay);
        }
    }
}