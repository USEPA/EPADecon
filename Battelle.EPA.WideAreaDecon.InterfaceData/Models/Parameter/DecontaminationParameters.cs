using System.Collections.Generic;
using System.Linq;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class DecontaminationParameters
    {
        public IParameter[] efficacyParameters;
        public Dictionary<SurfaceType, ApplicationMethod> applicationMethods;
        public Dictionary<SurfaceType, double> initialSporeLoading;
        public Dictionary<ApplicationMethod, double> treatmentDaysPerAm;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverhead;
        public double roundtripDays;
        public Dictionary<PpeLevel, double> entryDuration;
        public double entryPrepTime;
        public double deconLineTime;
        public double postEntryRest;
        public double respiratorsPerPerson;
        public double numTeams;
        public Dictionary<PpeLevel, double> ppeRequired;
        public Dictionary<SurfaceType, ContaminationInformation> areaContaminated;
        public double fumigationAgentVolume;
        public Dictionary<SurfaceType, double> agentVolume;
        public double onsiteDays;

        //Scenario parameters constructor
        public DecontaminationParameters(
            IParameter[] _efficacyParameters,
            Dictionary<SurfaceType, ApplicationMethod> _applicationMethods,
            Dictionary<SurfaceType, double> _initialSporeLoading,
            Dictionary<ApplicationMethod, double> _treatmentDaysPerAm,
            Dictionary<PersonnelLevel, double> _personnelReqPerTeam,
            double _personnelOverhead,
            double _roundtripDays,
            Dictionary<PpeLevel, double> _entryDuration,
            double _entryPrepTime,
            double _deconLineTime,
            double _postEntryRest,
            double _respiratorsPerPerson,
            double _numTeams,
            Dictionary<PpeLevel, double> _ppeRequired,
            Dictionary<SurfaceType, ContaminationInformation> _areaContaminated,
            double _fumigationAgentVolume,
            Dictionary<SurfaceType, double> _agentVolume)
        {
            efficacyParameters = _efficacyParameters;
            applicationMethods = _applicationMethods;
            initialSporeLoading = _initialSporeLoading;
            treatmentDaysPerAm = _treatmentDaysPerAm;
            agentVolume = _agentVolume;
            personnelReqPerTeam = _personnelReqPerTeam;
            personnelOverhead = _personnelOverhead;
            roundtripDays = _roundtripDays;
            entryDuration = _entryDuration;
            entryPrepTime = _entryPrepTime;
            deconLineTime = _deconLineTime;
            postEntryRest = _postEntryRest;
            respiratorsPerPerson = _respiratorsPerPerson;
            numTeams = _numTeams;
            ppeRequired = _ppeRequired;
            areaContaminated = _areaContaminated;
            fumigationAgentVolume = _fumigationAgentVolume;
        }

        //Event parameters constructor
        public DecontaminationParameters(
            Dictionary<PersonnelLevel, double> _personnelReqPerTeam,
            double _roundtripDays,
            double _numTeams,
            double _onsiteDays)
        {
            personnelReqPerTeam = _personnelReqPerTeam;
            roundtripDays = _roundtripDays;
            numTeams = _numTeams;
            onsiteDays = _onsiteDays;
        }
    }
}
