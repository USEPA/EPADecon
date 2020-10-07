namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface IAnalysisQuantityCostCalculator
    {
        public double CalculateAnalysisQuantityCost(double _surfaceAreaToBeHep, double _surfaceAreaToBeWiped);
    }
}