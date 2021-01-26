using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class DecontaminationParameters
    {
        private readonly Dictionary<SurfaceType, double> efficacyValues;
        private readonly Dictionary<SurfaceType, string> surfaceTypes;
        private readonly Dictionary<SurfaceType, ApplicationMethod> applicationMethods;
        private readonly Dictionary<SurfaceType, double> initialSporeLoading;
        private readonly double desiredSporeThreshold;
        private readonly Dictionary<ApplicationMethod, double> treatmentDaysPerAm;
        private readonly Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        private readonly double personnelOverhead;
        private readonly double numEntriesPerTeamPerDay;
        private readonly double hoursPerEntryPerTeam;
        private readonly double hoursPerExitPerTeam;
        private readonly double respiratorsPerPerson;
        private readonly double numTeams;
        private readonly Dictionary<PpeLevel, double> ppeRequired;
        private readonly double roomVolume;
        private readonly Dictionary<SurfaceType, double> roomBreakdown;
        private readonly double fumigationAgentVolume;
        private readonly double agentVolume;

        public DecontaminationParameters(ParameterFilter[] parameters)
        {

        }
    }
}
