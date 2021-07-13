using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling.Time
{
    public class LaborDaysCalculator : ILaborDaysCalculator
    {
        private readonly double _solidWastePerSurfaceArea;
        private readonly double _liquidWastePerSurfaceArea;
        private readonly double _massPerWasteSample;
        private readonly double _volumePerWasteSample;
        private readonly double _wasteSamplesPerHourPerTeam;

        public LaborDaysCalculator(
            double solidWastePerSurfaceArea,
            double liquidWastePerSurfaceArea,
            double massPerWasteSample,
            double volumePerWasteSample,
            double wasteSamplesPerHourPerTeam)
        {
            _solidWastePerSurfaceArea = solidWastePerSurfaceArea;
            _liquidWastePerSurfaceArea = liquidWastePerSurfaceArea;
            _massPerWasteSample = massPerWasteSample;
            _volumePerWasteSample = volumePerWasteSample;
            _wasteSamplesPerHourPerTeam = wasteSamplesPerHourPerTeam;
        }

        public double CalculateLaborDays(double numberTeams, double fractionSampled, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var totalArea = areaContaminated.Sum(x => x.Value.AreaContaminated);

            var solidWasteToBeSampled = fractionSampled * totalArea * _solidWastePerSurfaceArea * 0.5;
            var liquidWasteToBeSampled = fractionSampled * totalArea * _liquidWastePerSurfaceArea * 0.5;

            var solidWasteSamples = solidWasteToBeSampled / _massPerWasteSample;
            var liquidWasteSamples = liquidWasteToBeSampled / _volumePerWasteSample;

            var hoursSpentSampling = (solidWasteSamples + liquidWasteSamples) / (numberTeams * _wasteSamplesPerHourPerTeam);

            return hoursSpentSampling / GlobalConstants.HoursPerWorkDay;
        }
    }
}
