using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class DecontaminationParameters
    {
        public Dictionary<SurfaceType, double> efficacyValues;
        public Dictionary<SurfaceType, string> surfaceTypes;
        public Dictionary<SurfaceType, ApplicationMethod> applicationMethods;
        public Dictionary<SurfaceType, double> initialSporeLoading;
        public double desiredSporeThreshold;
        public Dictionary<ApplicationMethod, double> treatmentDaysPerAm;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverhead;
        public double numEntriesPerTeamPerDay;
        public double hoursPerEntryPerTeam;
        public double hoursPerExitPerTeam;
        public double respiratorsPerPerson;
        public double numTeams;
        public Dictionary<PpeLevel, double> ppeRequired;
        public double roomVolume;
        public Dictionary<SurfaceType, double> roomBreakdown;
        public double fumigationAgentVolume;
        public double agentVolume;

        public DecontaminationParameters(ParameterFilter[] dcParameters, ParameterFilter[] effParameters)
        {

        }
    }
}
