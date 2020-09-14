using System.Runtime.Serialization;

namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    public enum SurfaceType
    {
        [EnumMember(Value = "Indoor Interior")]
        IndoorInterior,
        [EnumMember(Value = "Indoor Exterior")]
        IndoorExterior,
        [EnumMember(Value = "Indoor Ceilings")]
        IndoorCeilings,
        [EnumMember(Value = "Indoor Carpet")]
        IndoorCarpet,
        [EnumMember(Value = "Indoor Non-Carpet")]
        IndoorNonCarpet,
        [EnumMember(Value = "HVAC")]
        HVAC,
        [EnumMember(Value = "Indoor Miscellaneous")]
        IndoorMisc,
        [EnumMember(Value = "Outdoor Exterior")]
        OutdoorExterior,
        [EnumMember(Value = "Pavement")]
        Pavement,
        [EnumMember(Value = "Roofing")]
        Roofing,
        [EnumMember(Value = "Water")]
        Water,
        [EnumMember(Value = "Soil")]
        Soil,
        [EnumMember(Value = "Outdoor Miscellaneous")]
        OutdoorMisc,
        [EnumMember(Value = "Underground Interior")]
        UndergroundInterior,
        [EnumMember(Value = "Underground Ceilings")]
        UndergroundCeilings,
        [EnumMember(Value = "Underground Carpet")]
        UndergroundCarpet,
        [EnumMember(Value = "Underground Non-Carpet")]
        UndergroundNonCarpet,
        [EnumMember(Value = "Underground Miscellaneous")]
        UndergroundMisc

    }
}