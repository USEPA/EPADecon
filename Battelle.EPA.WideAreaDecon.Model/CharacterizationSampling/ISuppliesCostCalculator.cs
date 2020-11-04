namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);

        public double CalculateWorkDays(double _numberTeams, double _surfaceAreaToBeHepa, double _surfaceAreaToBeWiped);
    }
}