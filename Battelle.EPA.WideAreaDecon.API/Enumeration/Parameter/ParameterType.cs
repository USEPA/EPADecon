using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    public enum ParameterType
    {
        [EnumMember(Value = "Constant")]
        Constant,

        [EnumMember(Value = "Uniform")]
        Uniform,

        [EnumMember(Value = "Beta PERT")]
        PERT,

        [EnumMember(Value = "Truncated Normal")]
        TruncatedNormal,

        [EnumMember(Value = "Log Uniform")]
        LogUniform,

        [EnumMember(Value = "Truncated Log Normal")]
        TruncatedLogNormal,

        [EnumMember(Value = "Contaminated Building Type")]
        ContaminatedBuildingType,

        [EnumMember(Value = "Contaminated Building Types")]
        ContaminatedBuildingTypes,

        [EnumMember(Value = "Sum Fraction")]
        SumFraction,

        [EnumMember(Value = "Null")]
        Null
    }
}