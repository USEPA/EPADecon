using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter
{
    public enum ResultType
    {
        [EnumMember(Value = "Scenario Results")]
        ScenarioResults,

        [EnumMember(Value = "Event Results")]
        EventResults
    }
}
