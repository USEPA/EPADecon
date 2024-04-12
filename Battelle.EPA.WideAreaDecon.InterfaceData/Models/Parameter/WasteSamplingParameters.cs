using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class WasteSamplingParameters : ISamplingParameters
    {
        public double FractionSampled { get; set; }
        public double MassPerWasteSample { get; set; }
        public double VolumePerWasteSample { get; set; }
        public double WasteSamplesPerHrPerTeam { get; set; }
        public double SolidWastePerSurfaceArea { get; set; }
        public double LiquidWastePerSurfaceArea { get; set; }
        public double NumTeams { get; set; }
        public double RespiratorsPerPerson { get; set; }
        public Dictionary<PpeLevel, double> EntryDuration { get; set; }
        public double EntryPrepTime { get; set; }
        public double DeconLineTime { get; set; }
        public double PostEntryRest { get; set; }
        public Dictionary<PpeLevel, double> PpeRequired { get; set; }
        public double SamplePackageTime { get; set; }
        public int NumLabs { get; set; }
        public List<double> LabUptimesHours { get; set; }
        public List<double> SampleShippingTime { get; set; }
        public List<double> LabThroughput { get; set; }
        public double ResultTransmissionToIC { get; set; }
        public Dictionary<PersonnelLevel, double> PersonnelReqPerTeam { get; set; }
        public double PersonnelOverheadDays { get; set; }
        public double RoundtripDays { get; set; }
        public double OnsiteDays { get; set; }

        //Scenario parameters constructor
        public WasteSamplingParameters(
            double fractionSampled,
            double massPerWasteSample,
            double volumePerWasteSample,
            double wasteSamplesPerHrPerTeam,
            double solidWastePerSurfaceArea,
            double liquidWastePerSurfaceArea,
            double numTeams,
            double respiratorsPerPerson,
            Dictionary<PpeLevel, double> entryDuration,
            double entryPrepTime,
            double deconLineTime,
            double postEntryRest,
            Dictionary<PpeLevel, double> ppeRequired,
            double samplePackageTime,
            int numLabs,
            List<double> labUptimeHours,
            List<double> sampleShippingTime,
            List<double> labThroughput,
            double resultTransmissionToIC,
            Dictionary<PersonnelLevel, double> personnelPerTeam,
            double personnelOverheadDays,
            double roundtripDays)
        {
            FractionSampled = fractionSampled;
            MassPerWasteSample = massPerWasteSample;
            VolumePerWasteSample = volumePerWasteSample;
            WasteSamplesPerHrPerTeam = wasteSamplesPerHrPerTeam;
            SolidWastePerSurfaceArea = solidWastePerSurfaceArea;
            LiquidWastePerSurfaceArea = liquidWastePerSurfaceArea;
            NumTeams = numTeams;
            RespiratorsPerPerson = respiratorsPerPerson;
            EntryDuration = entryDuration;
            EntryPrepTime = entryPrepTime;
            DeconLineTime = deconLineTime;
            PostEntryRest = postEntryRest;
            PpeRequired = ppeRequired;
            SamplePackageTime = samplePackageTime;
            NumLabs = numLabs;
            LabUptimesHours = labUptimeHours;
            SampleShippingTime = sampleShippingTime;
            LabThroughput = labThroughput;
            ResultTransmissionToIC = resultTransmissionToIC;
            PersonnelReqPerTeam = personnelPerTeam;
            PersonnelOverheadDays = personnelOverheadDays;
            RoundtripDays = roundtripDays;
        }

        //Event parameters constructor
        public WasteSamplingParameters(
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
