using System;
namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class AnalysisQuantCostCalculator
    {
        private double SqFtPerWipe { get; set; }
        private double SqFtPerHEPASock { get; set; }
        private double SqFtToBeWiped { get; set; }
        private double SqFtToBeHEPA { get; set; }
        private double CostPerWipeAnalysis { get; set; }
        private double CostPerHEPAAnalysis { get; set; }

        public AnalysisQuantCostCalculator(double sqFtPerWipe, double sqFtPerHEPASock, double sqFtToBeWiped, double sqFtToBeHEPA, double costPerWipeAnalysis, double costPerHEPAAnalysis)
        {
            SqFtPerWipe = sqFtPerWipe;
            SqFtPerHEPASock = sqFtPerHEPASock;
            SqFtToBeWiped = sqFtToBeWiped;
            SqFtToBeHEPA = sqFtToBeHEPA;
            CostPerWipeAnalysis = costPerWipeAnalysis;
            CostPerHEPAAnalysis = costPerHEPAAnalysis;
        }

        public double CalculateAnalysisQuantCost()
        {
            return ((SqFtToBeWiped / SqFtPerWipe) * CostPerWipeAnalysis) + ((SqFtToBeHEPA / SqFtPerHEPASock) * CostPerHEPAAnalysis);
        }
    }
}
