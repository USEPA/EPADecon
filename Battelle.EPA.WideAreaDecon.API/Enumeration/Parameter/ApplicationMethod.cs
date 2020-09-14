using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    public enum ApplicationMethod
    {
        [EnumMember(Value = "Aerosol")]
        Aerosol,
        [EnumMember(Value = "Foam Spray")]
        FoamSpray,
        [EnumMember(Value = "Fogging")]
        Fogging,
        [EnumMember(Value = "Fumigation")]
        Fumigation,
        [EnumMember(Value = "Gel")]
        Gel,
        [EnumMember(Value = "Liquid Immersion")]
        LiquidImmersion,
        [EnumMember(Value = "Liquid Spray")]
        LiquidSpray,
        [EnumMember(Value = "Liquid Suspension")]
        LiquidSuspension,
        [EnumMember(Value = "Liquid Wipe")]
        LiquidWipe,
        [EnumMember(Value = "Physical")]
        Physical
    }
}