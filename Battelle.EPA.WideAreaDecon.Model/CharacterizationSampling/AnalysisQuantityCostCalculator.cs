namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class AnalysisQuantityCostCalculator : IAnalysisQuantityCostCalculator
    {
        private readonly double _costPerHepaAnalysis;
        private readonly double _costPerWipeAnalysis;
        private readonly double _surfaceAreaPerHepaSock;
        private readonly double _surfaceAreaPerWipe;

        public AnalysisQuantityCostCalculator(double surfaceAreaPerWipe, double surfaceAreaPerHepaSock, double costPerWipeAnalysis,
            double costPerHepaAnalysis)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepaSock = surfaceAreaPerHepaSock;
            _costPerWipeAnalysis = costPerWipeAnalysis;
            _costPerHepaAnalysis = costPerHepaAnalysis;
        }

        public double CalculateAnalysisQuantityCost(double _surfaceAreaToBeHep, double _surfaceAreaToBeWiped)
        {
            return _surfaceAreaToBeWiped / _surfaceAreaPerWipe * _costPerWipeAnalysis +
                _surfaceAreaToBeHep / _surfaceAreaPerHepaSock * _costPerHepaAnalysis;
        }
    }
}