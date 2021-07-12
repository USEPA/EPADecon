using System.Collections.Generic;
using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
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
            var contaminationArea = new Dictionary<SurfaceType, double>();
            foreach (SurfaceType surface in areaContaminated.Keys.ToList())
            {
                contaminationArea.Add(surface, areaContaminated[surface].AreaContaminated);
            }
            var surfaceAreaToBeWiped = fractionSampledWipe * contaminationArea.Values.Sum();
            var surfaceAreaToBeHepa = fractionSampledHepa * contaminationArea.Values.Sum();

            return surfaceAreaToBeWiped / _surfaceAreaPerWipe * _costPerWipeAnalysis +
                surfaceAreaToBeHepa / _surfaceAreaPerHepaSock * _costPerHepaAnalysis;
        }
    }
}