using System.Collections.Generic;
using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Cost
{
    public class AnalysisQuantityCostCalculator : IAnalysisQuantityCostCalculator
    {
        private readonly double _costPerHepaAnalysis;
        private readonly double _costPerWipeAnalysis;
        private readonly double _surfaceAreaPerHepaSock;
        private readonly double _surfaceAreaPerWipe;

        public AnalysisQuantityCostCalculator(
            double surfaceAreaPerWipe, 
            double surfaceAreaPerHepaSock, 
            double costPerWipeAnalysis,
            double costPerHepaAnalysis)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepaSock = surfaceAreaPerHepaSock;
            _costPerWipeAnalysis = costPerWipeAnalysis;
            _costPerHepaAnalysis = costPerHepaAnalysis;
        }

        public double CalculateAnalysisQuantityCost(double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var surfaceAreaToBeWiped = fractionSampledWipe * totalArea;
            var surfaceAreaToBeHepa = fractionSampledHepa * totalArea;

            return surfaceAreaToBeWiped / _surfaceAreaPerWipe * _costPerWipeAnalysis +
                surfaceAreaToBeHepa / _surfaceAreaPerHepaSock * _costPerHepaAnalysis;
        }
    }
}