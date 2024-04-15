using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class ClearanceSamplingParameters : IPostDeconSamplingParameters
    {
        public double FractionSampledWipe { get; set; }
        public double FractionSampledHepa { get; set; }
        public double SurfaceAreaPerWipe { get; set; }
        public double SurfaceAreaPerHepa { get; set; }
        public double WipesPerHrPerTeam { get; set; }
        public double HepaSocksPerHrPerTeam { get; set; }
        public double NumTeams { get; set; }
        public double SamplePackageTime { get; set; }
        public int NumLabs { get; set; }
        public List<double> LabUptimesHours { get; set; }
        public List<double> SampleShippingTime { get; set; }
        public List<double> LabThroughput { get; set; }
        public double ResultTransmissionToIC { get; set; }
        public Dictionary<PersonnelLevel, double> PersonnelReqPerTeam { get; set; }
        public double PersonnelOverheadDays { get; set; }
        public double RoundtripDays { get; set; }
        public Dictionary<PpeLevel, double> EntryDuration { get; set; }
        public double EntryPrepTime { get; set; }
        public double DeconLineTime { get; set; }
        public double PostEntryRest { get; set; }
        public double RespiratorsPerPerson { get; set; }
        public Dictionary<PpeLevel, double> PpeRequired { get; set; }
        public double OnsiteDays { get; set; }
        public FrequencyValueType SamplingFrequency { get; set; }

        //Scenario parameters constructor
        public ClearanceSamplingParameters(
            double fractionSampledWipe,
            double fractionSampledHepa,
            double surfaceAreaPerWipe,
            double surfaceAreaPerHepa,
            double wipesPerHrPerTeam,
            double hepaSocksPerHrPerTeam,
            double numTeams,
            double samplePackageTime,
            int numLabs,
            List<double> labUptimeHours,
            List<double> sampleShippingTime,
            List<double> labThroughput,
            double resultTransmissionToIC,
            Dictionary<PersonnelLevel, double> personnelPerTeam,
            double personnelOverheadDays,
            double roundtripDays,
            Dictionary<PpeLevel, double> entryDuration,
            double entryPrepTime,
            double deconLineTime,
            double postEntryRest,
            double respiratorsPerPerson,
            Dictionary<PpeLevel, double> ppeRequired,
            FrequencyValueType samplingFrequency)
        {
            FractionSampledWipe = fractionSampledWipe;
            FractionSampledHepa = fractionSampledHepa;
            SurfaceAreaPerWipe = surfaceAreaPerWipe;
            SurfaceAreaPerHepa = surfaceAreaPerHepa;
            WipesPerHrPerTeam = wipesPerHrPerTeam;
            HepaSocksPerHrPerTeam = hepaSocksPerHrPerTeam;
            NumTeams = numTeams;
            SamplePackageTime = samplePackageTime;
            NumLabs = numLabs;
            LabUptimesHours = labUptimeHours;
            SampleShippingTime = sampleShippingTime;
            LabThroughput = labThroughput;
            ResultTransmissionToIC = resultTransmissionToIC;
            PersonnelReqPerTeam = personnelPerTeam;
            PersonnelOverheadDays = personnelOverheadDays;
            RoundtripDays = roundtripDays;
            EntryDuration = entryDuration;
            EntryPrepTime = entryPrepTime;
            DeconLineTime = deconLineTime;
            PostEntryRest = postEntryRest;
            RespiratorsPerPerson = respiratorsPerPerson;
            PpeRequired = ppeRequired;
            SamplingFrequency = samplingFrequency;
        }

        //Event parameters constructor
        public ClearanceSamplingParameters(
            double numTeams,
            Dictionary<PersonnelLevel, double> personnelPerTeam,
            double roundtripDays,
            double onsiteDays)
        {
            NumTeams = numTeams;
            PersonnelReqPerTeam = personnelPerTeam;
            RoundtripDays = roundtripDays;
            OnsiteDays = onsiteDays;
        }
    }
}
