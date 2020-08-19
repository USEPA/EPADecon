using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    public enum ParameterType
    {
        [EnumMember(Value = "Constant")]
        Constant,
        Uniform,
        PERT,
        TruncatedNormal,
        LogUniform,
        TruncatedLogNormal,
        ContaminatedBuildingType,
        ContaminatedBuildingTypes,
        SumFraction,
        Null
    }
}