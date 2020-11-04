using System;
using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.Model.Enumeration
{
    public enum PpeLevel
    {
        [EnumMember(Value = "Level A")] A,
        [EnumMember(Value = "Level B")] B,
        [EnumMember(Value = "Level C")] C,
        [EnumMember(Value = "Level D")] D
    }
}
