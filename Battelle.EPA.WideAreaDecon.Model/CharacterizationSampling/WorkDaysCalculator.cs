using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public class WorkDaysCalculator : IWorkDaysCalculator
    {
        private readonly double _hepaSocksPerHourPerTeam;
        private readonly double _surfaceAreaPerHepaSock;
        private readonly double _surfaceAreaPerWipe;
        private readonly double _wipesPerHourPerTeam;
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly double _prepTimePerTeamPerEntry;
        private readonly double _deconLineTimePerTeamPerExit;

        public WorkDaysCalculator(
            double surfaceAreaPerWipe,
            double surfaceAreaPerHepaSock,
            double wipesPerHourPerTeam,
            double hepaSocksPerHourPerTeam,
            double numberEntriesPerTeamPerDay,
            double prepTimePerTeamPerEntry,
            double deconLineTimePerTeamPerExit)
        {
            _surfaceAreaPerWipe = surfaceAreaPerWipe;
            _surfaceAreaPerHepaSock = surfaceAreaPerHepaSock;
            _wipesPerHourPerTeam = wipesPerHourPerTeam;
            _hepaSocksPerHourPerTeam = hepaSocksPerHourPerTeam;
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _prepTimePerTeamPerEntry = prepTimePerTeamPerEntry;
            _deconLineTimePerTeamPerExit = deconLineTimePerTeamPerExit;
        }

        public double CalculateWorkDays(double _numberTeams, double _fractionSampledWipe, double _fractionSampledHepa, Dictionary<SurfaceType, ContaminationInformation> _areaContaminated)
        {
            var contaminationArea = new Dictionary<SurfaceType, double>();
            foreach (SurfaceType surface in _areaContaminated.Keys.ToList())
            {
                contaminationArea.Add(surface, _areaContaminated[surface].AreaContaminated);
            }
            var surfaceAreaToBeWiped = _fractionSampledWipe * contaminationArea.Values.Sum();
            var surfaceAreaToBeHepa = _fractionSampledHepa * contaminationArea.Values.Sum();

            var workDays = Math.Abs(surfaceAreaToBeWiped / _surfaceAreaPerWipe / (_wipesPerHourPerTeam * _numberTeams) / GlobalConstants.HoursPerWorkDay) +
                Math.Abs(surfaceAreaToBeHepa / _surfaceAreaPerHepaSock / (_hepaSocksPerHourPerTeam * _numberTeams) /
                    GlobalConstants.HoursPerWorkDay);

            var totalEntries = workDays * _numberEntriesPerTeamPerDay * _numberTeams;

            var totalPrepTime = totalEntries * _prepTimePerTeamPerEntry;
            var totalDeconLineTime = totalEntries * _deconLineTimePerTeamPerExit;

            return workDays + ((totalPrepTime + totalDeconLineTime) / GlobalConstants.HoursPerWorkDay);
        }
    }
}
