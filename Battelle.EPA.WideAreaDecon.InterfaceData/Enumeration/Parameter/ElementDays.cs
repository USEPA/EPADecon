using System;
using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter
{
    public enum ElementDays
    {
        [EnumMember(Value = "Labor Days")] LaborDays,
        [EnumMember(Value = "Work Days")] WorkDays,
        [EnumMember(Value = "Onsite Days")] OnsiteDays
    }
}
