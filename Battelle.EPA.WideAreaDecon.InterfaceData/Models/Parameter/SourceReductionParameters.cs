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
        public double numEntriesPerDay;
        public double entryPrepTime;
        public double deconLineTime;
        public double respiratorsPerPerson;
        public double hoursEntering;
        public double hoursExiting;
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
            double _numEntriesPerDay,
            double _entryPrepTime,
            double _deconLineTime,
            double _respiratorsPerPerson,
            double _hoursEntering,
            double _hoursExiting,
            double _numTeams,
            Dictionary<PersonnelLevel, double> _personnelReqPerTeam,
            double _personnelOverheadDays,
            double _roundtripDays,
            Dictionary<PpeLevel, double> _ppeRequired)
        {
            surfaceAreaToBeSourceReduced = _surfaceAreaToBeSourceReduced;
            massPerSurfaceArea = _massPerSurfaceArea;
            massRemovedPerHourPerTeam = _massRemovedPerHourPerTeam;
            numEntriesPerDay = _numEntriesPerDay;
            entryPrepTime = _entryPrepTime;
            deconLineTime = _deconLineTime;
            respiratorsPerPerson = _respiratorsPerPerson;
            hoursEntering = _hoursEntering;
            hoursExiting = _hoursExiting;
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
