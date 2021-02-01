using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ApplicationMethod
    {
        [EnumMember(Value = "Aerosol")] Aerosol,
        [EnumMember(Value = "Foam Spray")] FoamSpray,
        [EnumMember(Value = "Fogging")] Fogging,
        [EnumMember(Value = "Fumigation")] Fumigation,
        [EnumMember(Value = "Gel")] Gel,

        [EnumMember(Value = "Liquid Immersion")]
        LiquidImmersion,
        [EnumMember(Value = "Liquid Spray")] LiquidSpray,

        [EnumMember(Value = "Liquid Suspension")]
        LiquidSuspension,
        [EnumMember(Value = "Liquid Wipe")] LiquidWipe,
        [EnumMember(Value = "Physical")] Physical
    }
}