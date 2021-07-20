using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public class AnalysisQuantityCostCalculator : IAnalysisQuantityCostCalculator
    {
        private readonly double _costPerWasteSampleAnalysis;
        private readonly double _massPerWasteSample;
        private readonly double _volumePerWasteSample;
        private readonly double _solidWastePerSurfaceArea;
        private readonly double _liquidWastePerSurfaceArea;

        public AnalysisQuantityCostCalculator(
            double massPerWasteSample, 
            double volumePerWasteSample, 
            double costPerWasteSampleAnalysis,
            double solidWastePerSurfaceArea,
            double liquidWastePerSurfaceArea)
        {
            _massPerWasteSample = massPerWasteSample;
            _volumePerWasteSample = volumePerWasteSample;
            _costPerWasteSampleAnalysis = costPerWasteSampleAnalysis;
            _solidWastePerSurfaceArea = solidWastePerSurfaceArea;
            _liquidWastePerSurfaceArea = liquidWastePerSurfaceArea;
        }

        public double CalculateAnalysisQuantityCost(double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var solidWasteToBeSampled = fractionSampled * totalArea * _solidWastePerSurfaceArea;
            var liquidWasteToBeSampled = fractionSampled * totalArea * _liquidWastePerSurfaceArea;

            var solidWasteSamples = solidWasteToBeSampled / _massPerWasteSample;
            var liquidWasteSamples = liquidWasteToBeSampled / _volumePerWasteSample;

            return (solidWasteSamples + liquidWasteSamples) * _costPerWasteSampleAnalysis;
        }
    }
}