using System;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class PhaseLagCalculator : IPhaseLagCalculator
    {
        private readonly double _surfaceAreaPerWipe;
        private readonly double _surfaceAreaPerHepa;
        private readonly double _samplePackageTime;
        private readonly double _wipeAnalysisTime;
        private readonly double _hepaAnalysisTime;
        private readonly double _fractionOfWipeToEachLab;
        private readonly double _fractionOfHepaToEachLab;
        private readonly Dictionary<Labs, double> _labUptimesHours;

        public PhaseLagCalculator(double surfaceAreaPerWipe, double surfaceAreaPerHepa, Dictionary<Labs, double> labUptimesHours, double samplePackageTime, double wipeAnalyisTime, double hepaAnalysisTime, double fractionOfWipeToEachLab, double fracitonOfHepaToEachLab)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepa = surfaceAreaPerHepa;
            _labUptimesHours = labUptimesHours;
            _samplePackageTime = samplePackageTime;
            _wipeAnalysisTime = wipeAnalyisTime;
            _hepaAnalysisTime = hepaAnalysisTime;
            _fractionOfWipeToEachLab = fractionOfWipeToEachLab;
            _fractionOfHepaToEachLab = fracitonOfHepaToEachLab;
        }

        public double CalculatePhaseLagTime(double numberLabs, double sampleTimeTransmitted, double surfaceAreaToBeWiped, double surfaceAreaToBeHepa)
        {
            double[] AnalysisTimePerLab;
            
            double totalWipes = (surfaceAreaToBeWiped / _surfaceAreaPerWipe) ;

            double totalHepa = (surfaceAreaToBeHepa / _surfaceAreaPerHepa);

            double maxAnalysisTime = 0;

            for (int i = 0; i < numberLabs; i++)
            {
                AnalysisTimePerLab[i] = Math.Abs((totalWipes * _fractionOfWipeToEachLab * _wipeAnalysisTime) + (totalHepa * _fractionOfHepaToEachLab * _hepaAnalysisTime)) / _labUptimesHours[i];
                if (AnalysisTimePerLab > maxAnalysisTime)
                {
                    maxAnalysisTime = AnalysisTimePerLab[i];
                }
            }

            return (sampleTimeTransmitted * (totalHepa + totalWipes)) + maxAnalysisTime + sampleTimeTransmitted;
        }
    }
}