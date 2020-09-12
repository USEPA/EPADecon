using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    public enum ApplicationMethod
    {
        [EnumMember(Value = "Fumigation")]
        Fumigation,
        [EnumMember(Value = "Physical")]
        Physical,
        [EnumMember(Value = "Liquid Spray")]
        LiquidSpray,
        [EnumMember(Value = "Liquid Immersion")]
        LiquidImmersion,
        [EnumMember(Value = "Foam Spray")]
        FoamSpray,
        [EnumMember(Value = "Gel")]
        Gel,
        [EnumMember(Value = "Aerosol")]
        Aerosol,
        [EnumMember(Value = "Liquid Wipe")]
        LiquidWipe,
        [EnumMember(Value = "Fogging")]
        Fogging,
        [EnumMember(Value = "Liquid Suspension")]
        LiquidSuspension
    }
}