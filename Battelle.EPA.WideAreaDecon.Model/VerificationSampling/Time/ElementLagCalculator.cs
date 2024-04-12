using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.VerificationSampling.Time
{
    public class ElementLagCalculator : IElementLagCalculator
    {
        private readonly double _surfaceAreaPerWipe;
        private readonly double _surfaceAreaPerHepa;
        private readonly double _samplePackageTime;
        private readonly List<double> _labUptimesHours;
        private readonly List<double> _sampleShippingTime;
        private readonly List<double> _labThroughput;

        public ElementLagCalculator(
            double surfaceAreaPerWipe,  
            double surfaceAreaPerHepa, 
            List<double> labUptimesHours, 
            double samplePackageTime,
            List<double> sampleShippingTime,
            List<double> labThroughput)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepa = surfaceAreaPerHepa;
            _labUptimesHours = labUptimesHours;
            _samplePackageTime = samplePackageTime;
            _sampleShippingTime = sampleShippingTime;
            _labThroughput = labThroughput;
        }

        public double CalculateElementLagTime(int numberLabs, double sampleTimeTransmitted, double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            numberLabs = _sampleShippingTime.Count;

            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var surfaceAreaToBeWiped = _fractionSampledWipe * totalArea;
            var surfaceAreaToBeHepa = _fractionSampledHepa * totalArea;

            double totalWipes = (surfaceAreaToBeWiped / _surfaceAreaPerWipe);
            double totalHepa = (surfaceAreaToBeHepa / _surfaceAreaPerHepa);

            double wipesPerLab = totalWipes / numberLabs;
            double hepaPerLab = totalHepa / numberLabs;

            double maxLabTime = 0;

            double[] shippingTimePerLab = new double[numberLabs], analysisTimePerLab = new double[numberLabs];

            for (int i = 0; i < numberLabs; i++)
            {
                shippingTimePerLab[i] = _sampleShippingTime[i] / (GlobalConstants.HoursPerWorkDay * 2);

                analysisTimePerLab[i] = (wipesPerLab + hepaPerLab) / _labThroughput[i];

                if ((analysisTimePerLab[i] + shippingTimePerLab[i]) > maxLabTime)
                {
                    maxLabTime = (analysisTimePerLab[i] + shippingTimePerLab[i]);
                }
            }

            double totalPackagingTime = (_samplePackageTime * (totalHepa + totalWipes)) / (GlobalConstants.MinutesToHours * GlobalConstants.HoursPerWorkDay);

            return totalPackagingTime + maxLabTime + (sampleTimeTransmitted / (GlobalConstants.HoursPerWorkDay * 2));
        }
    }
}