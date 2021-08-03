using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling.Time
{
    public class WorkDaysCalculator : IWorkDaysCalculator
    {
        private readonly Dictionary<PpeLevel, double> _entryDurationByPPE;
        private readonly double _entryPrepTime;
        private readonly double _deconLineTime;
        private readonly double _postEntryRest;

        public WorkDaysCalculator(
            Dictionary<PpeLevel, double> entryDurationByPPE,
            double entryPrepTime,
            double deconLineTime,
            double postEntryRest)
        {
            _entryDurationByPPE = entryDurationByPPE;
            _entryPrepTime = entryPrepTime;
            _deconLineTime = deconLineTime;
            _postEntryRest = postEntryRest;
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

            var totalPrepTime = totalEntries * _entryPrepTime;
            var totalDeconLineTime = totalEntries * _deconLineTime;
            var totalRestPeriod = totalEntries * _postEntryRest;

            return laborDays + ((totalPrepTime + totalDeconLineTime + totalRestPeriod) / GlobalConstants.HoursPerWorkDay);
        }
    }
}
