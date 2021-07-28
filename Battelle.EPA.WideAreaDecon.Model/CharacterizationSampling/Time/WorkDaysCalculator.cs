using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time
{
    public class WorkDaysCalculator : IWorkDaysCalculator
    {
        private readonly Dictionary<PpeLevel, double> _entryDurationByPPE;
        private readonly double _prepTimePerTeamPerEntry;
        private readonly double _deconLineTimePerTeamPerExit;

        public WorkDaysCalculator(
            Dictionary<PpeLevel, double> entryDurationByPPE,
            double prepTimePerTeamPerEntry,
            double deconLineTimePerTeamPerExit)
        {
            _entryDurationByPPE = entryDurationByPPE;
            _prepTimePerTeamPerEntry = prepTimePerTeamPerEntry;
            _deconLineTimePerTeamPerExit = deconLineTimePerTeamPerExit;
        }

        public double CalculateWorkDays(double laborDays, double numberTeams, Dictionary<PpeLevel, double> ppePerLevelPerTeam)
        {
            var numTeamsByPPE = 0;

            foreach (var ppeFraction in ppePerLevelPerTeam)
            {
                if (ppeFraction.Value > 0)
                {
                    numTeamsByPPE++;
                }
            }

            var laborHoursPerPPELevel = (laborDays * GlobalConstants.HoursPerWorkDay) / numTeamsByPPE;

            var entriesPerPPELevel = new Dictionary<PpeLevel, double>
            {
                { PpeLevel.A, ppePerLevelPerTeam[PpeLevel.A] == 0 ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.A] },
                { PpeLevel.B, ppePerLevelPerTeam[PpeLevel.B] == 0 ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.B] },
                { PpeLevel.C, ppePerLevelPerTeam[PpeLevel.C] == 0 ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.C] },
                { PpeLevel.D, ppePerLevelPerTeam[PpeLevel.D] == 0 ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.D] }
            };

            var totalEntries = entriesPerPPELevel.Sum(x => x.Value);

            var totalPrepTime = totalEntries * _prepTimePerTeamPerEntry;
            var totalDeconLineTime = totalEntries * _deconLineTimePerTeamPerExit;

            return laborDays + ((totalPrepTime + totalDeconLineTime) / GlobalConstants.HoursPerWorkDay);
        }
    }
}
