namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double personnelRoundTripDays);

        public double CalculateEntExitLaborCost();

        public double CalculateLaborDays(double personnelRoundTripDays);
    }
}