using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class AnalysisQuantCostCalculator
    {
        private double SAPerWipe { get; set; }
        private double SAPerHEPASock { get; set; }
        private double SAToBeWiped { get; set; }
        private double SAToBeHEPA { get; set; }
        private double CostPerWipeAnalysis { get; set; }
        private double CostPerHEPAAnalysis { get; set; }

        public AnalysisQuantCostCalculator()
        {

        }

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
