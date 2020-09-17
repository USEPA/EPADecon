using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ParameterType
    {
        [EnumMember(Value = "Constant")] Constant,

        [EnumMember(Value = "Uniform")] Uniform,

        [EnumMember(Value = "Uniform X Dependent")]
        UniformXDependent,

        [EnumMember(Value = "Beta PERT")] PERT,

        [EnumMember(Value = "Truncated Normal")]
        TruncatedNormal,

        [EnumMember(Value = "Bimodal Truncated Normal")]
        BimodalTruncatedNormal,

        [EnumMember(Value = "Log Uniform")] LogUniform,

        [EnumMember(Value = "Truncated Log Normal")]
        TruncatedLogNormal,

        [EnumMember(Value = "Log Normal")] LogNormal,

        [EnumMember(Value = "Weibull")] Weibull,

        [EnumMember(Value = "Enumerated Fraction")]
        EnumeratedFraction,

        [EnumMember(Value = "Enumerated Parameter")]
        EnumeratedParameter,

        [EnumMember(Value = "Null")] Null
    }
}