using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class AnalysisQuantCostCalculator : IAnalysisQuantCostCalculator
    {
        private readonly double SAPerWipe;
        private readonly double SAPerHEPASock;
        private readonly double SAToBeWiped;
        private readonly double SAToBeHEPA;
        private readonly double CostPerWipeAnalysis;
        private readonly double CostPerHEPAAnalysis;

        public AnalysisQuantCostCalculator(double saPerWipe, double saPerHEPASock, double saToBeWiped, double saToBeHEPA, double costPerWipeAnalysis, double costPerHEPAAnalysis)
        {
            SAPerWipe = saPerWipe;
            SAPerHEPASock = saPerHEPASock;
            SAToBeWiped = saToBeWiped;
            SAToBeHEPA = saToBeHEPA;
            CostPerWipeAnalysis = costPerWipeAnalysis;
            CostPerHEPAAnalysis = costPerHEPAAnalysis;
        }

        public double CalculateAnalysisQuantCost()
        {
            return ((SAToBeWiped / SAPerWipe) * CostPerWipeAnalysis) + ((SAToBeHEPA / SAPerHEPASock) * CostPerHEPAAnalysis);
        }
    }
}
