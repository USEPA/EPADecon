using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time
{
    public class ElementLagCalculator : IElementLagCalculator
    {
        private readonly double _solidWastePerSurfaceArea;
        private readonly double _liquidWastePerSurfaceArea;
        private readonly double _massPerWasteSample;
        private readonly double _volumePerWasteSample;
        private readonly double _samplePackageTime;
        private readonly List<double> _labUptimesHours;
        private readonly List<double> _sampleShippingTime;
        private readonly List<double> _labThroughput;

        public ElementLagCalculator(
            double solidWastePerSurfaceArea,  
            double liquidWastePerSurfaceArea, 
            double massPerWasteSample,
            double volumePerWasteSample,
            List<double> labUptimesHours, 
            double samplePackageTime,
            List<double> sampleShippingTime,
            List<double> labThroughput)
        {
            _solidWastePerSurfaceArea = solidWastePerSurfaceArea;
            _liquidWastePerSurfaceArea = liquidWastePerSurfaceArea;
            _massPerWasteSample = massPerWasteSample;
            _volumePerWasteSample = volumePerWasteSample;
            _labUptimesHours = labUptimesHours;
            _samplePackageTime = samplePackageTime;
            _sampleShippingTime = sampleShippingTime;
            _labThroughput = labThroughput;
        }

        public double CalculateElementLagTime(int numberLabs, double sampleTimeTransmitted, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            numberLabs = _sampleShippingTime.Count;

            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var solidWasteToBeSampled = fractionSampled * totalArea * _solidWastePerSurfaceArea * 0.5;
            var liquidWasteToBeSampled = fractionSampled * totalArea * _liquidWastePerSurfaceArea * 0.5;

            var solidWasteSamples = solidWasteToBeSampled / _massPerWasteSample;
            var liquidWasteSamples = liquidWasteToBeSampled / _volumePerWasteSample;

            var wasteSamples = solidWasteSamples + liquidWasteSamples;

            double samplesPerLab = wasteSamples / numberLabs;

            double maxLabTime = 0;

            double[] shippingTimePerLab = new double[numberLabs], analysisTimePerLab = new double[numberLabs];

            for (int i = 0; i < numberLabs; i++)
            {
                shippingTimePerLab[i] = _sampleShippingTime[i] / (GlobalConstants.HoursPerWorkDay * 2);

                analysisTimePerLab[i] = samplesPerLab / _labThroughput[i];

                if ((analysisTimePerLab[i] + shippingTimePerLab[i]) > maxLabTime)
                {
                    maxLabTime = (analysisTimePerLab[i] + shippingTimePerLab[i]);
                }
            }

            double totalPackagingTime = (_samplePackageTime * wasteSamples) / (GlobalConstants.MinutesToHours * GlobalConstants.HoursPerWorkDay);

            return totalPackagingTime + maxLabTime + (sampleTimeTransmitted / (GlobalConstants.HoursPerWorkDay * 2));
        }
    }
}