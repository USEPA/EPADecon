using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class ClearanceSamplingParameters
    {
        public double fractionSampledWipe;
        public double fractionSampledHepa;
        public double surfaceAreaPerWipe;
        public double surfaceAreaPerHepa;
        public double wipesPerHrPerTeam;
        public double hepaSocksPerHrPerTeam;
        public double numTeams;
        public double samplePackageTime;
        public int numLabs;
        public List<double> labUptimesHours;
        public List<double> labDistanceFromSite;
        public List<double> labThroughput;
        public double resultTransmissionToIC;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;
        public double roundtripDays;
        public Dictionary<PpeLevel, double> entryDuration;
        public double entryPrepTime;
        public double deconLineTime;
        public double postEntryRest;
        public double respiratorsPerPerson;
        public Dictionary<PpeLevel, double> ppeRequired;
        public double onsiteDays;

        //Scenario parameters constructor
        public ClearanceSamplingParameters(
            double _fractionSampledWipe,
            double _fractionSampledHepa,
            double _surfaceAreaPerWipe,
            double _surfaceAreaPerHepa,
            double _wipesPerHrPerTeam,
            double _hepaSocksPerHrPerTeam,
            double _numTeams,
            double _samplePackageTime,
            int _numLabs,
            List<double> _labUptimeHours,
            List<double> _labDistanceFromSite,
            List<double> _labThroughput,
            double _resultTransmissionToIC,
            Dictionary<PersonnelLevel, double> _personnelPerTeam,
            double _personnelOverheadDays,
            double _roundtripDays,
            Dictionary<PpeLevel, double> _entryDuration,
            double _entryPrepTime,
            double _deconLineTime,
            double _postEntryRest,
            double _respiratorsPerPerson,
            Dictionary<PpeLevel, double> _ppeRequired)
        {
            fractionSampledWipe = _fractionSampledWipe;
            fractionSampledHepa = _fractionSampledHepa;
            surfaceAreaPerWipe = _surfaceAreaPerWipe;
            surfaceAreaPerHepa = _surfaceAreaPerHepa;
            wipesPerHrPerTeam = _wipesPerHrPerTeam;
            hepaSocksPerHrPerTeam = _hepaSocksPerHrPerTeam;
            numTeams = _numTeams;
            samplePackageTime = _samplePackageTime;
            numLabs = _numLabs;
            labUptimesHours = _labUptimeHours;
            labDistanceFromSite = _labDistanceFromSite;
            labThroughput = _labThroughput;
            resultTransmissionToIC = _resultTransmissionToIC;
            personnelReqPerTeam = _personnelPerTeam;
            personnelOverheadDays = _personnelOverheadDays;
            roundtripDays = _roundtripDays;
            entryDuration = _entryDuration;
            entryPrepTime = _entryPrepTime;
            deconLineTime = _deconLineTime;
            postEntryRest = _postEntryRest;
            respiratorsPerPerson = _respiratorsPerPerson;
            ppeRequired = _ppeRequired;
        }

        //Event parameters constructor
        public ClearanceSamplingParameters(
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
