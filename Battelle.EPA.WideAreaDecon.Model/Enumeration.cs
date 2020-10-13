using System;
using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class Enumeration
    {
        public enum PersonnelLevel
        {
            [EnumMember(Value = "OSC")] OSC,
            [EnumMember(Value = "PL-1")] PL1,
            [EnumMember(Value = "PL-2")] PL2,
            [EnumMember(Value = "PL-3")] PL3,
            [EnumMember(Value = "PL-4")] PL4
        }
        
        public enum PpeLevel
        {
            [EnumMember(Value = "A")] A,
            [EnumMember(Value = "B")] B,
            [EnumMember(Value = "C")] C,
            [EnumMember(Value = "D")] D
        }

        public enum ApplicationMethodType
        {
            [EnumMember(Value = "AMT1")] AMT1,
            [EnumMember(Value = "AMT2")] AMT2
        }
        
        public enum SporesLevel
        {
            [EnumMember(Value = "SL1")] SL1
        }
        
        public enum SurfaceType
        {
            [EnumMember(Value = "S1")] S1
        }

    } 
}