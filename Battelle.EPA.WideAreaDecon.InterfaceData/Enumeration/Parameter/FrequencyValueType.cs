using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum FrequencyValueType
    {
        [EnumMember(Value = "Never")]
        Never,

        [EnumMember(Value = "Once")]
        Once,

        [EnumMember(Value = "Multiple")]
        Multiple // After every round
    }
}
