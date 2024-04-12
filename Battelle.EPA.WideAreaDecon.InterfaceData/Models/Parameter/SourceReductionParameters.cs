using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class SourceReductionParameters : IDeconElementParameters
    {
        public double MassToBeSourceReduced { get; set; }
        public double MassPerSurfaceArea { get; set; }
        public double MassRemovedPerHourPerTeam { get; set; }


        public Dictionary<PpeLevel, double> EntryDuration { get; set; }
        public double EntryPrepTime { get; set; }
        public double DeconLineTime { get; set; }
        public double PostEntryRest { get; set; }
        public double RespiratorsPerPerson { get; set; }
        public double NumTeams { get; set; }
        public Dictionary<PersonnelLevel, double> PersonnelReqPerTeam { get; set; }
        public double PersonnelOverheadDays { get; set; }
        public double RoundtripDays { get; set; }
        public Dictionary<PpeLevel, double> PpeRequired { get; set; }
        public double OnsiteDays { get; set; }

        //Scenario parameters constructor
        public SourceReductionParameters(
            double massToBeSourceReduced,
            double massPerSurfaceArea,
            double massRemovedPerHourPerTeam,
            Dictionary<PpeLevel, double> entryDuration,
            double entryPrepTime,
            double deconLineTime,
            double postEntryRest,
            double respiratorsPerPerson,
            double numTeams,
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double personnelOverheadDays,
            double roundtripDays,
            Dictionary<PpeLevel, double> ppeRequired)
        {
            MassToBeSourceReduced = massToBeSourceReduced;
            MassPerSurfaceArea = massPerSurfaceArea;
            MassRemovedPerHourPerTeam = massRemovedPerHourPerTeam;
            EntryDuration = entryDuration;
            EntryPrepTime = entryPrepTime;
            DeconLineTime = deconLineTime;
            PostEntryRest = postEntryRest;
            RespiratorsPerPerson = respiratorsPerPerson;
            NumTeams = numTeams;
            PersonnelReqPerTeam = personnelReqPerTeam;
            PersonnelOverheadDays = personnelOverheadDays;
            RoundtripDays = roundtripDays;
            PpeRequired = ppeRequired;
        }

        //Event parameters constructor
        public SourceReductionParameters(
            double numTeams,
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double roundtripDays,
            double onsiteDays)
        {
            NumTeams = numTeams;
            PersonnelReqPerTeam = personnelReqPerTeam;
            RoundtripDays = roundtripDays;
            OnsiteDays = onsiteDays;
        }
    }
}
