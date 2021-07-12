using System;
using System.Linq;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _costPerWasteSample;
        private readonly double _surfaceAreaPerWasteSample;
        private readonly double _volumePerWasteSample;
        private readonly double _solidWastePerSurfaceArea;
        private readonly double _liquidWastePerSurfaceArea;

        public SuppliesCostCalculator(
            double surfaceAreaPerWasteSample,
            double volumePerWasteSample,
            double solidWastePerSurfaceArea,
            double liquidWastePerSurfaceArea,
            double costPerWasteSample)
        {
            _surfaceAreaPerWasteSample = surfaceAreaPerWasteSample;
            _volumePerWasteSample = volumePerWasteSample;
            _solidWastePerSurfaceArea = solidWastePerSurfaceArea;
            _liquidWastePerSurfaceArea = liquidWastePerSurfaceArea;
            _costPerWasteSample = costPerWasteSample;
        }

        public double CalculateSuppliesCost(double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var solidWasteToBeSampled = fractionSampled * totalArea * _solidWastePerSurfaceArea;
            var liquidWasteToBeSampled = fractionSampled * totalArea * _liquidWastePerSurfaceArea;

            var solidWasteSamples = (solidWasteToBeSampled / _solidWastePerSurfaceArea) / _surfaceAreaPerWasteSample;
            var liquidWasteSamples = liquidWasteToBeSampled / _volumePerWasteSample;

            var wasteSamples = solidWasteSamples + liquidWasteSamples;

            return _costPerWasteSample * wasteSamples;
        }
    }
}