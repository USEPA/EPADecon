using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public class AnalysisQuantityCostCalculator : IAnalysisQuantityCostCalculator
    {
        private readonly double _costPerSolidWasteSampleAnalysis;
        private readonly double _costPerLiquidWasteSampleAnalysis;
        private readonly double _massPerWasteSample;
        private readonly double _volumePerWasteSample;
        private readonly double _solidWastePerSurfaceArea;
        private readonly double _liquidWastePerSurfaceArea;

        public AnalysisQuantityCostCalculator(
            double massPerWasteSample, 
            double volumePerWasteSample, 
            double costPerSolidWasteSampleAnalysis,
            double costPerliquidWasteSampleAnalysis,
            double solidWastePerSurfaceArea,
            double liquidWastePerSurfaceArea)
        {
            _massPerWasteSample = massPerWasteSample;
            _volumePerWasteSample = volumePerWasteSample;
            _costPerSolidWasteSampleAnalysis = costPerSolidWasteSampleAnalysis;
            _costPerLiquidWasteSampleAnalysis = costPerliquidWasteSampleAnalysis;
            _solidWastePerSurfaceArea = solidWastePerSurfaceArea;
            _liquidWastePerSurfaceArea = liquidWastePerSurfaceArea;
        }

        public double CalculateAnalysisQuantityCost(int deconTreatments, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var solidWasteToBeSampled = fractionSampled * totalArea * _solidWastePerSurfaceArea * 0.5 * deconTreatments;
            var liquidWasteToBeSampled = fractionSampled * totalArea * _liquidWastePerSurfaceArea * 0.5 * deconTreatments;

            var solidWasteSamples = solidWasteToBeSampled / _massPerWasteSample;
            var liquidWasteSamples = liquidWasteToBeSampled / _volumePerWasteSample;

            return (solidWasteSamples * _costPerSolidWasteSampleAnalysis) + (_costPerLiquidWasteSampleAnalysis * liquidWasteSamples);
        }
    }
}