using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class AnalysisQuantCostCalculator : IAnalysisQuantCostCalculator
    {
        private readonly double _saPerWipe;
        private readonly double _saPerHepaSock;
        private readonly double _saToBeWiped;
        private readonly double _saToBeHepa;
        private readonly double _costPerWipeAnalysis;
        private readonly double _costPerHepaAnalysis;

        public AnalysisQuantCostCalculator(double saPerWipe, double saPerHepaSock, double saToBeWiped, double saToBeHepa, double costPerWipeAnalysis, double costPerHepaAnalysis)
        {
            _saPerWipe = saPerWipe;
            _saPerHepaSock = saPerHepaSock;
            _saToBeWiped = saToBeWiped;
            _saToBeHepa = saToBeHepa;
            _costPerWipeAnalysis = costPerWipeAnalysis;
            _costPerHepaAnalysis = costPerHepaAnalysis;
        }

        public double CalculateAnalysisQuantCost()
        {
            return ((_saToBeWiped / _saPerWipe) * _costPerWipeAnalysis) + ((_saToBeHepa / _saPerHepaSock) * _costPerHepaAnalysis);
        }
    }
}
