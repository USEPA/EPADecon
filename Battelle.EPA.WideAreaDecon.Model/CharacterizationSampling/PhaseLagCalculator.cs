using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class PhaseLagCalculator : IPhaseLagCalculator
    {
        private readonly double _surfaceAreaPerWipe;
        private readonly double _surfaceAreaPerHepa;
        private readonly double _samplePackageTime;
        private readonly double _wipeAnalysisTime;
        private readonly double _hepaAnalysisTime;
        private readonly Dictionary<Labs, double> _fractionOfWipeToEachLab;
        private readonly Dictionary<Labs, double> _fractionOfHepaToEachLab;
        private readonly Dictionary<Labs, double> _labUptimesHours;
        private readonly Dictionary<Labs, double> _labDistanceFromSite;

        public PhaseLagCalculator(double surfaceAreaPerWipe,  double surfaceAreaPerHepa, Dictionary<Labs, double> labUptimesHours, double samplePackageTime, double wipeAnalysisTime, double hepaAnalysisTime, Dictionary<Labs, double> fractionOfWipeToEachLab, Dictionary<Labs, double> fractionOfHepaToEachLab, Dictionary<Labs, double> labDistanceFromSite)
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

                
                shippingTimePerLab[i] = _labDistanceFromSite.ElementAt(i).Value / (GlobalConstants.HoursPerWorkDay * GlobalConstants.AssumedDriverSpeed);

                analysisTimePerLab[i] = Math.Abs((totalWipes * _fractionOfWipeToEachLab.ElementAt(i).Value * _wipeAnalysisTime) + (totalHepa * _fractionOfHepaToEachLab.ElementAt(i).Value * _hepaAnalysisTime)) / _labUptimesHours.ElementAt(i).Value;

                if ((analysisTimePerLab[i] + shippingTimePerLab[i]) > maxLabTime)
                {
                    maxLabTime = (analysisTimePerLab[i] + shippingTimePerLab[i]);
                }
            }

            double totalPackagingTime = (sampleTimeTransmitted * (totalHepa + totalWipes)) / (GlobalConstants.HoursPerWorkDay * GlobalConstants.AssumedDriverSpeed);

            return totalPackagingTime + maxLabTime + sampleTimeTransmitted;
        }
    }
}