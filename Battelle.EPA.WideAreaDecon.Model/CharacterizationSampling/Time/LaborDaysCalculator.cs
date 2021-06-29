using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time
{
    public class LaborDaysCalculator : ILaborDaysCalculator
    {
        private readonly double _surfaceAreaPerWipe;
        private readonly double _surfaceAreaPerHepaSock;
        private readonly double _wipesPerHourPerTeam;
        private readonly double _hepaSocksPerHourPerTeam;

        public LaborDaysCalculator(
            double surfaceAreaPerWipe,
            double surfaceAreaPerHepaSock,
            double wipesPerHourPerTeam,
            double hepaSocksPerHourPerTeam)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepaSock = surfaceAreaPerHepaSock;
            _wipesPerHourPerTeam = wipesPerHourPerTeam;
            _hepaSocksPerHourPerTeam = hepaSocksPerHourPerTeam;
        }

        public double CalculateLaborDays(double numberTeams, double fractionSampledWipe, double fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var contaminationArea = new Dictionary<SurfaceType, double>();
            foreach (SurfaceType surface in areaContaminated.Keys.ToList())
            {
                contaminationArea.Add(surface, areaContaminated[surface].AreaContaminated);
            }
            var surfaceAreaToBeWiped = fractionSampledWipe * contaminationArea.Values.Sum();
            var surfaceAreaToBeHepa = fractionSampledHepa * contaminationArea.Values.Sum();

            return Math.Abs(surfaceAreaToBeWiped / _surfaceAreaPerWipe / (_wipesPerHourPerTeam * numberTeams) / GlobalConstants.HoursPerWorkDay) +
                Math.Abs(surfaceAreaToBeHepa / _surfaceAreaPerHepaSock / (_hepaSocksPerHourPerTeam * numberTeams) /
                    GlobalConstants.HoursPerWorkDay);
        }
    }
}
