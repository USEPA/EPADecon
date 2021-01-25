using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Model
{
    public enum CharacterizationSamplingParameters
    {
        [EnumMember(Value = "Surface Area per Wipe")] surfaceAreaPerWipe,

        [EnumMember(Value = "Surface Area per HEPA Sock")] surfaceAreaPerHepa,

        [EnumMember(Value = "Wipes per Hour per Team")] wipesPerHrPerTeam,

        [EnumMember(Value = "HEPA Socks per Hour per Team")] hepaSocksPerHrPerTeam,

        [EnumMember(Value = "Packaging Time per Sample")] samplePackageTime,

        [EnumMember(Value = "Analysis Time per Wipe Sample")] wipeAnalysisTime,

        [EnumMember(Value = "Analysis Time per HEPA Sample")] hepaAnalysisTime,

        [EnumMember(Value = "Fraction of Wipes Sent to Each Lab")] fractionOfWipeToEachLab,

        [EnumMember(Value = "Fraction of HEPA Socks Sent to Each Lab")] fractionOfHepaToEachLab,

        [EnumMember(Value = "Lab Uptime Hours per Day")] labUptimesHours,

        [EnumMember(Value = "Lab Distance From Site")] labDistanceFromSite,

        [EnumMember(Value = "Personnel Required (PL-4)")] pl4ReqPerTeam,

        [EnumMember(Value = "Personnel Required (PL-3)")] pl3ReqPerTeam,

        [EnumMember(Value = "Personnel Required (PL-2)")] pl2ReqPerTeam,

        [EnumMember(Value = "Personnel Required (PL-1)")] pl1ReqPerTeam,

        [EnumMember(Value = "Personnel Required (OSC)")] oscReqPerTeam,

        [EnumMember(Value = "Personnel Overhead Days")] personnelOverhead,

        [EnumMember(Value = "Number of Entries per Team per Day")] entriesPerTeam,

        [EnumMember(Value = "Hours per Entry, per Team")] hoursEntering,

        [EnumMember(Value = "Hours per Entry, per Team")] hoursExiting,

        [EnumMember(Value = "Number of Respirators per Person")] respiratorsPerPerson,

        [EnumMember(Value = "Teams Required")] numTeams,

        [EnumMember(Value = "Level A PPE Quantity Per Team")] ppeLevelAPerTeam,

        [EnumMember(Value = "Level B PPE Quantity Per Team")] ppeLevelBPerTeam,

        [EnumMember(Value = "Level C PPE Quantity Per Team")] ppeLevelCPerTeam,

        [EnumMember(Value = "Level D PPE Quantity Per Team")] ppeLevelDPerTeam,

        [EnumMember(Value = "Number of External Labs")] numLabs,

        [EnumMember(Value = "Time for Result Transmission to IC")] resultTimeToIC
    }
}
