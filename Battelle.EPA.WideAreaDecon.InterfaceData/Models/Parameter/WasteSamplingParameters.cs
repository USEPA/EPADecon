﻿using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class WasteSamplingParameters
    {
        public double fractionSampled;
        public double surfaceAreaPerWasteSample;
        public double volumePerWasteSample;
        public double wasteSamplesPerHrPerTeam;
        public double solidWastePerSurfaceArea;
        public double liquidWastePerSurfaceArea;
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
        public double entriesPerTeam;
        public double entryPrepTime;
        public double deconLineTime;
        public double hoursEntering;
        public double hoursExiting;
        public double respiratorsPerPerson;
        public Dictionary<PpeLevel, double> ppeRequired;
        public double onsiteDays;

        //Scenario parameters constructor
        public WasteSamplingParameters(
            double _fractionSampled,
            double _surfaceAreaPerWasteSample,
            double _volumePerWasteSample,
            double _wasteSamplesPerHrPerTeam,
            double _solidWastePerSurfaceArea,
            double _liquidWastePerSurfaceArea,
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
            double _entriesPerTeam,
            double _entryPrepTime,
            double _deconLineTime,
            double _hoursEntering,
            double _hoursExiting,
            double _respiratorsPerPerson,
            Dictionary<PpeLevel, double> _ppeRequired)
        {
            fractionSampled = _fractionSampled;
            surfaceAreaPerWasteSample = _surfaceAreaPerWasteSample;
            volumePerWasteSample = _volumePerWasteSample;
            wasteSamplesPerHrPerTeam = _wasteSamplesPerHrPerTeam;
            solidWastePerSurfaceArea = _solidWastePerSurfaceArea;
            liquidWastePerSurfaceArea = _liquidWastePerSurfaceArea;
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
            entriesPerTeam = _entriesPerTeam;
            entryPrepTime = _entryPrepTime;
            deconLineTime = _deconLineTime;
            hoursEntering = _hoursEntering;
            hoursExiting = _hoursExiting;
            respiratorsPerPerson = _respiratorsPerPerson;
            ppeRequired = _ppeRequired;
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
