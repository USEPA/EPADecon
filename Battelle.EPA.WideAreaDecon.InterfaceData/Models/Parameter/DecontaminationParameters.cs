using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class DecontaminationParameters : IDeconElementParameters
    {
        public IParameter[] EfficacyParameters { get; set; }
        public Dictionary<SurfaceType, ApplicationMethod> ApplicationMethods { get; set; }
        public Dictionary<SurfaceType, double> InitialSporeLoading { get; set; }
        public Dictionary<ApplicationMethod, double> TreatmentDaysPerAm { get; set; }
        public Dictionary<SurfaceType, ContaminationInformation> AreaContaminated { get; set; }
        public double FumigationAgentVolume { get; set; }
        public Dictionary<SurfaceType, double> AgentVolume { get; set; }

        public Dictionary<PersonnelLevel, double> PersonnelReqPerTeam { get; set; }
        public double PersonnelOverheadDays { get; set; }
        public double RoundtripDays { get; set; }
        public Dictionary<PpeLevel, double> EntryDuration { get; set; }
        public double EntryPrepTime { get; set; }
        public double DeconLineTime { get; set; }
        public double PostEntryRest { get; set; }
        public double RespiratorsPerPerson { get; set; }
        public double NumTeams { get; set; }
        public Dictionary<PpeLevel, double> PpeRequired { get; set; }
        public double OnsiteDays { get; set; }

        //Scenario parameters constructor
        public DecontaminationParameters(
            IParameter[] efficacyParameters,
            Dictionary<SurfaceType, ApplicationMethod> applicationMethods,
            Dictionary<SurfaceType, double> initialSporeLoading,
            Dictionary<ApplicationMethod, double> treatmentDaysPerAm,
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double personnelOverhead,
            double roundtripDays,
            Dictionary<PpeLevel, double> entryDuration,
            double entryPrepTime,
            double deconLineTime,
            double postEntryRest,
            double respiratorsPerPerson,
            double numTeams,
            Dictionary<PpeLevel, double> ppeRequired,
            Dictionary<SurfaceType, ContaminationInformation> areaContaminated,
            double fumigationAgentVolume,
            Dictionary<SurfaceType, double> agentVolume)
        {
            EfficacyParameters = efficacyParameters;
            ApplicationMethods = applicationMethods;
            InitialSporeLoading = initialSporeLoading;
            TreatmentDaysPerAm = treatmentDaysPerAm;
            AgentVolume = agentVolume;
            PersonnelReqPerTeam = personnelReqPerTeam;
            PersonnelOverheadDays = personnelOverhead;
            RoundtripDays = roundtripDays;
            EntryDuration = entryDuration;
            EntryPrepTime = entryPrepTime;
            DeconLineTime = deconLineTime;
            PostEntryRest = postEntryRest;
            RespiratorsPerPerson = respiratorsPerPerson;
            NumTeams = numTeams;
            PpeRequired = ppeRequired;
            AreaContaminated = areaContaminated;
            FumigationAgentVolume = fumigationAgentVolume;
        }

        //Event parameters constructor
        public DecontaminationParameters(
            double numTeams,
            Dictionary<PersonnelLevel, double> personnelReqPerTeam,
            double roundtripDays,
            double onsiteDays)
        {
            PersonnelReqPerTeam = personnelReqPerTeam;
            RoundtripDays = roundtripDays;
            NumTeams = numTeams;
            OnsiteDays = onsiteDays;
        }
    }
}
