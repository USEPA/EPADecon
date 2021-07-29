using System.Collections.Generic;
using System.Linq;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class SourceReductionParameters
    {
        public double surfaceAreaToBeSourceReduced;
        public double massPerSurfaceArea;
        public double massRemovedPerHourPerTeam;
        public Dictionary<PpeLevel, double> entryDuration;
        public double entryPrepTime;
        public double deconLineTime;
        public double postEntryRest;
        public double respiratorsPerPerson;
        public double numTeams;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;
        public double roundtripDays;
        public Dictionary<PpeLevel, double> ppeRequired;
        public double onsiteDays;

        //Scenario parameters constructor
        public SourceReductionParameters(
            double _surfaceAreaToBeSourceReduced,
            double _massPerSurfaceArea,
            double _massRemovedPerHourPerTeam,
            Dictionary<PpeLevel, double> _entryDuration,
            double _entryPrepTime,
            double _deconLineTime,
            double _postEntryRest,
            double _respiratorsPerPerson,
            double _numTeams,
            Dictionary<PersonnelLevel, double> _personnelReqPerTeam,
            double _personnelOverheadDays,
            double _roundtripDays,
            Dictionary<PpeLevel, double> _ppeRequired)
        {
            surfaceAreaToBeSourceReduced = _surfaceAreaToBeSourceReduced;
            massPerSurfaceArea = _massPerSurfaceArea;
            massRemovedPerHourPerTeam = _massRemovedPerHourPerTeam;
            entryDuration = _entryDuration;
            entryPrepTime = _entryPrepTime;
            deconLineTime = _deconLineTime;
            postEntryRest = _postEntryRest;
            respiratorsPerPerson = _respiratorsPerPerson;
            numTeams = _numTeams;
            personnelReqPerTeam = _personnelReqPerTeam;
            personnelOverheadDays = _personnelOverheadDays;
            roundtripDays = _roundtripDays;
            ppeRequired = _ppeRequired;
        }

        //Event parameters constructor
        public SourceReductionParameters(
            double _numTeams,
            Dictionary<PersonnelLevel, double> _personnelReqPerTeam,
            double _roundtripDays,
            double _onsiteDays)
        {
            numTeams = _numTeams;
            personnelReqPerTeam = _personnelReqPerTeam;
            roundtripDays = _roundtripDays;
            onsiteDays = _onsiteDays;
        }
    }
}
