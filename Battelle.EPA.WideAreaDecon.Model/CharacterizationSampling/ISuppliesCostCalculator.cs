namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface ISuppliesCostCalculator
    {
        public double CalculateSuppliesCost();

        public double CalculateWorkDays();
    }
}
