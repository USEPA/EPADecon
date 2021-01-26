using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class PhaseLagCalculator : IPhaseLagCalculator
    {
        private readonly double _surfaceAreaPerWipe;
        private readonly double _surfaceAreaPerHepa;
        private readonly double _samplePackageTime;
        private readonly double _wipeAnalysisTime;
        private readonly double _hepaAnalysisTime;
        private readonly List<double> _fractionOfWipeToEachLab;
        private readonly List<double> _fractionOfHepaToEachLab;
        private readonly List<double> _labUptimesHours;
        private readonly List<double> _labDistanceFromSite;

        public PhaseLagCalculator(
            double surfaceAreaPerWipe,  
            double surfaceAreaPerHepa, 
            List<double> labUptimesHours, 
            double samplePackageTime, 
            double wipeAnalysisTime, 
            double hepaAnalysisTime,
            List<double> fractionOfWipeToEachLab,
            List<double> fractionOfHepaToEachLab,
            List<double> labDistanceFromSite)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepa = surfaceAreaPerHepa;
            _labUptimesHours = labUptimesHours;
            _samplePackageTime = samplePackageTime;
            _wipeAnalysisTime = wipeAnalysisTime;
            _hepaAnalysisTime = hepaAnalysisTime;
            _fractionOfWipeToEachLab = fractionOfWipeToEachLab;
            _fractionOfHepaToEachLab = fractionOfHepaToEachLab;
            _labDistanceFromSite = labDistanceFromSite;
        }

        public double CalculatePhaseLagTime(int numberLabs, double sampleTimeTransmitted, double surfaceAreaToBeWiped, double surfaceAreaToBeHepa)
        {
            double totalWipes = (surfaceAreaToBeWiped / _surfaceAreaPerWipe);

            double totalHepa = (surfaceAreaToBeHepa / _surfaceAreaPerHepa);

            double maxLabTime = 0;

            double[] shippingTimePerLab = new double[numberLabs], analysisTimePerLab = new double[numberLabs];

            for (int i = 0; i < numberLabs; i++)
            {

                
                shippingTimePerLab[i] = _labDistanceFromSite[i] / (GlobalConstants.HoursPerWorkDay * GlobalConstants.AssumedDriverSpeed);

                analysisTimePerLab[i] = Math.Abs((totalWipes * _fractionOfWipeToEachLab[i] * _wipeAnalysisTime) + (totalHepa * _fractionOfHepaToEachLab[i] * _hepaAnalysisTime)) / _labUptimesHours[i];

                if ((analysisTimePerLab[i] + shippingTimePerLab[i]) > maxLabTime)
                {
                    maxLabTime = (analysisTimePerLab[i] + shippingTimePerLab[i]);
                }
            }

            double totalPackagingTime = (_samplePackageTime * (totalHepa + totalWipes)) / GlobalConstants.MinutesToDays;

            return totalPackagingTime + maxLabTime + (sampleTimeTransmitted / GlobalConstants.HoursPerWorkDay);
        }
    }
}