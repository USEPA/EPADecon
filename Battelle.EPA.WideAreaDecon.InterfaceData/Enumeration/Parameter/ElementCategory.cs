using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ElementCategory
    {
        [EnumMember(Value = "Incident Command")] IncidentCommand,

        [EnumMember(Value = "Characterization Sampling")] CharacterizationSampling,

        [EnumMember(Value = "Verification Sampling")] VerificationSampling,

        [EnumMember(Value = "Clearance Sampling")] ClearanceSampling,

        [EnumMember(Value = "Source Reduction")] SourceReduction,

        [EnumMember(Value = "Decontamination")] Decontamination,

        [EnumMember(Value = "Waste Sampling")] WasteSampling,

        [EnumMember(Value = "Other")] Other
    }
}
