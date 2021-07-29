using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class WasteSamplingParameters
    {
        public double fractionSampled;
        public double massPerWasteSample;
        public double volumePerWasteSample;
        public double wasteSamplesPerHrPerTeam;
        public double solidWastePerSurfaceArea;
        public double liquidWastePerSurfaceArea;
        public double numTeams;
        public double respiratorsPerPerson;
        public Dictionary<PpeLevel, double> entryDuration;
        public Dictionary<PpeLevel, double> ppeRequired;
        public double samplePackageTime;
        public int numLabs;
        public List<double> labUptimesHours;
        public List<double> labDistanceFromSite;
        public List<double> labThroughput;
        public double resultTransmissionToIC;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;
        public double roundtripDays;
        public double onsiteDays;

        //Scenario parameters constructor
        public WasteSamplingParameters(
            double _fractionSampled,
            double _massPerWasteSample,
            double _volumePerWasteSample,
            double _wasteSamplesPerHrPerTeam,
            double _solidWastePerSurfaceArea,
            double _liquidWastePerSurfaceArea,
            double _numTeams,
            double _respiratorsPerPerson,
            Dictionary<PpeLevel, double> _entryDuration,
            Dictionary<PpeLevel, double> _ppeRequired,
            double _samplePackageTime,
            int _numLabs,
            List<double> _labUptimeHours,
            List<double> _labDistanceFromSite,
            List<double> _labThroughput,
            double _resultTransmissionToIC,
            Dictionary<PersonnelLevel, double> _personnelPerTeam,
            double _personnelOverheadDays,
            double _roundtripDays)
        {
            fractionSampled = _fractionSampled;
            massPerWasteSample = _massPerWasteSample;
            volumePerWasteSample = _volumePerWasteSample;
            wasteSamplesPerHrPerTeam = _wasteSamplesPerHrPerTeam;
            solidWastePerSurfaceArea = _solidWastePerSurfaceArea;
            liquidWastePerSurfaceArea = _liquidWastePerSurfaceArea;
            numTeams = _numTeams;
            respiratorsPerPerson = _respiratorsPerPerson;
            entryDuration = _entryDuration;
            ppeRequired = _ppeRequired;
            samplePackageTime = _samplePackageTime;
            numLabs = _numLabs;
            labUptimesHours = _labUptimeHours;
            labDistanceFromSite = _labDistanceFromSite;
            labThroughput = _labThroughput;
            resultTransmissionToIC = _resultTransmissionToIC;
            personnelReqPerTeam = _personnelPerTeam;
            personnelOverheadDays = _personnelOverheadDays;
            roundtripDays = _roundtripDays;
        }

        //Event parameters constructor
        public WasteSamplingParameters(
            double _numTeams,
            Dictionary<PersonnelLevel, double> _personnelPerTeam,
            double _roundtripDays,
            double _onsiteDays)
        {
            numTeams = _numTeams;
            personnelReqPerTeam = _personnelPerTeam;
            roundtripDays = _roundtripDays;
            onsiteDays = _onsiteDays;
        }
    }
}
