using System;
using System.Linq;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results.ResourceAndCostResults;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Cost
{
    public class SuppliesCostCalculator : ISuppliesCostCalculator
    {
        private readonly double _costPerWasteSample;
        private readonly double _massPerWasteSample;
        private readonly double _volumePerWasteSample;
        private readonly double _solidWastePerSurfaceArea;
        private readonly double _liquidWastePerSurfaceArea;

        public SuppliesCostCalculator(
            double massPerWasteSample,
            double volumePerWasteSample,
            double solidWastePerSurfaceArea,
            double liquidWastePerSurfaceArea,
            double costPerWasteSample)
        {
            _massPerWasteSample = massPerWasteSample;
            _volumePerWasteSample = volumePerWasteSample;
            _solidWastePerSurfaceArea = solidWastePerSurfaceArea;
            _liquidWastePerSurfaceArea = liquidWastePerSurfaceArea;
            _costPerWasteSample = costPerWasteSample;
        }

        public WasteSamplingResourceAndCostResults CalculateSuppliesCost(int deconTreatments, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var solidWasteToBeSampled = fractionSampled * totalArea * _solidWastePerSurfaceArea * 0.5 * deconTreatments;
            var liquidWasteToBeSampled = fractionSampled * totalArea * _liquidWastePerSurfaceArea * 0.5 * deconTreatments;

            var solidWasteSamples = solidWasteToBeSampled / _massPerWasteSample;
            var liquidWasteSamples = liquidWasteToBeSampled / _volumePerWasteSample;

            var wasteSamples = solidWasteSamples + liquidWasteSamples;

            return new WasteSamplingResourceAndCostResults()
            {
                WasteSamplingCost = _costPerWasteSample * wasteSamples,
                TotalPpEUnits = new Dictionary<PpeLevel, int>(),
                TotalAqueousWasteSamples = (int)Math.Ceiling(liquidWasteSamples),
                TotalSolidWasteSamples = (int)Math.Ceiling(solidWasteSamples)
            };
        }
    }
}