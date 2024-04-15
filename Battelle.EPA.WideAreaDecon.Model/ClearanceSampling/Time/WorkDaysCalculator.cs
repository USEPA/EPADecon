using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.ClearanceSampling.Time
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
            var numTeamsByPPE = ppePerLevelPerTeam.Where(ppeFraction => ppeFraction.Value > 0).Count();
            var laborHoursPerPPELevel = (laborDays * GlobalConstants.HoursPerWorkDay) / numTeamsByPPE;

            var entriesPerPPELevel = new Dictionary<PpeLevel, double>
            {
                { PpeLevel.A, ppePerLevelPerTeam[PpeLevel.A].Equals(0) ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.A] },
                { PpeLevel.B, ppePerLevelPerTeam[PpeLevel.B].Equals(0) ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.B] },
                { PpeLevel.C, ppePerLevelPerTeam[PpeLevel.C].Equals(0) ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.C] },
                { PpeLevel.D, ppePerLevelPerTeam[PpeLevel.D].Equals(0) ? 0 : laborHoursPerPPELevel / _entryDurationByPPE[PpeLevel.D] }
            };

            var totalEntries = entriesPerPPELevel.Sum(x => x.Value);

            var totalPrepTime = totalEntries * _entryPrepTime;
            var totalDeconLineTime = totalEntries * _deconLineTime;
            var totalRestPeriod = totalEntries * _postEntryRest;

            return laborDays + ((totalPrepTime + totalDeconLineTime + totalRestPeriod) / GlobalConstants.HoursPerWorkDay);
        }
    }
}
