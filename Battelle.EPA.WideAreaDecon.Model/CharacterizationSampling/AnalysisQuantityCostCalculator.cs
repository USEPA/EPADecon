namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class AnalysisQuantityCostCalculator : IAnalysisQuantityCostCalculator
    {
        private readonly double _costPerHepaAnalysis;
        private readonly double _costPerWipeAnalysis;
        private readonly double _surfaceAreaPerHepaSock;
        private readonly double _surfaceAreaPerWipe;
        private readonly double _surfaceAreaToBeHepa;
        private readonly double _surfaceAreaToBeWiped;

        public AnalysisQuantityCostCalculator(double surfaceAreaPerWipe, double surfaceAreaPerHepaSock,
            double surfaceAreaToBeWiped, double surfaceAreaToBeHepa, double costPerWipeAnalysis,
            double costPerHepaAnalysis)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepaSock = surfaceAreaPerHepaSock;
            _surfaceAreaToBeWiped = surfaceAreaToBeWiped;
            _surfaceAreaToBeHepa = surfaceAreaToBeHepa;
            _costPerWipeAnalysis = costPerWipeAnalysis;
            _costPerHepaAnalysis = costPerHepaAnalysis;
        }

        public double CalculateAnalysisQuantityCost()
        {
            return _surfaceAreaToBeWiped / _surfaceAreaPerWipe * _costPerWipeAnalysis +
                _surfaceAreaToBeHepa / _surfaceAreaPerHepaSock * _costPerHepaAnalysis;
        }
    }
}