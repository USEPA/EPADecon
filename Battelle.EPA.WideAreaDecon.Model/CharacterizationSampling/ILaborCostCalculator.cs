namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface ILaborCostCalculator
    {
        public double CalculateLaborCost(double PersonnelRoundTripDays);

        public double CalculateEntExitLaborCost();

        public double CalculateLaborDays(double PersonnelRoundTripDays);
    }
}