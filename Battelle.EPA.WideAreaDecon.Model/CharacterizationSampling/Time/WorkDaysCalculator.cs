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
        private readonly double _numberEntriesPerTeamPerDay;
        private readonly double _prepTimePerTeamPerEntry;
        private readonly double _deconLineTimePerTeamPerExit;

        public WorkDaysCalculator(
            double numberEntriesPerTeamPerDay,
            double prepTimePerTeamPerEntry,
            double deconLineTimePerTeamPerExit)
        {
            _numberEntriesPerTeamPerDay = numberEntriesPerTeamPerDay;
            _prepTimePerTeamPerEntry = prepTimePerTeamPerEntry;
            _deconLineTimePerTeamPerExit = deconLineTimePerTeamPerExit;
        }

        public double CalculateWorkDays(double laborDays, double numberTeams)
        {
            var totalEntries = laborDays * _numberEntriesPerTeamPerDay * numberTeams;

            var totalPrepTime = totalEntries * _prepTimePerTeamPerEntry;
            var totalDeconLineTime = totalEntries * _deconLineTimePerTeamPerExit;

            return laborDays + ((totalPrepTime + totalDeconLineTime) / GlobalConstants.HoursPerWorkDay);
        }
    }
}
