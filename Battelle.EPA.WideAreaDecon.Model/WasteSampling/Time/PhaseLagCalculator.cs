using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time
{
    public class PhaseLagCalculator : IPhaseLagCalculator
    {
        private readonly double _solidWastePerSurfaceArea;
        private readonly double _liquidWastePerSurfaceArea;
        private readonly double _surfaceAreaPerWasteSample;
        private readonly double _volumePerWasteSample;
        private readonly double _samplePackageTime;
        private readonly List<double> _labUptimesHours;
        private readonly List<double> _labDistanceFromSite;
        private readonly List<double> _labThroughput;

        public PhaseLagCalculator(
            double solidWastePerSurfaceArea,  
            double liquidWastePerSurfaceArea, 
            double surfaceAreaPerWasteSample,
            double volumePerWasteSample,
            List<double> labUptimesHours, 
            double samplePackageTime,
            List<double> labDistanceFromSite,
            List<double> labThroughput)
        {
            _solidWastePerSurfaceArea = solidWastePerSurfaceArea;
            _liquidWastePerSurfaceArea = liquidWastePerSurfaceArea;
            _surfaceAreaPerWasteSample = surfaceAreaPerWasteSample;
            _volumePerWasteSample = volumePerWasteSample;
            _labUptimesHours = labUptimesHours;
            _samplePackageTime = samplePackageTime;
            _labDistanceFromSite = labDistanceFromSite;
            _labThroughput = labThroughput;
        }

        public double CalculatePhaseLagTime(int numberLabs, double sampleTimeTransmitted, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var solidWasteToBeSampled = fractionSampled * totalArea * _solidWastePerSurfaceArea * 0.5;
            var liquidWasteToBeSampled = fractionSampled * totalArea * _liquidWastePerSurfaceArea * 0.5;

            var solidWasteSamples = (solidWasteToBeSampled / _solidWastePerSurfaceArea) / _surfaceAreaPerWasteSample;
            var liquidWasteSamples = liquidWasteToBeSampled / _volumePerWasteSample;

            var wasteSamples = solidWasteSamples + liquidWasteSamples;

            double samplesPerLab = wasteSamples / numberLabs;

            double maxLabTime = 0;

            double[] shippingTimePerLab = new double[numberLabs], analysisTimePerLab = new double[numberLabs];

            for (int i = 0; i < numberLabs; i++)
            {
                shippingTimePerLab[i] = _labDistanceFromSite[i] / (GlobalConstants.HoursPerWorkDay * GlobalConstants.AssumedDriverSpeed);

                analysisTimePerLab[i] = samplesPerLab / _labThroughput[i];

                if ((analysisTimePerLab[i] + shippingTimePerLab[i]) > maxLabTime)
                {
                    maxLabTime = (analysisTimePerLab[i] + shippingTimePerLab[i]);
                }
            }

            double totalPackagingTime = (_samplePackageTime * wasteSamples) / (GlobalConstants.MinutesToHours * GlobalConstants.HoursPerWorkDay);

            return totalPackagingTime + maxLabTime + (sampleTimeTransmitted / GlobalConstants.HoursPerWorkDay);
        }
    }
}