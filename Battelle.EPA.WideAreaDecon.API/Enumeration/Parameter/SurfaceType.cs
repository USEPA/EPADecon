﻿using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    [JsonConverter(typeof(StringEnumConverter))]
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
    public static class SurfaceTypeHelper
    {
        public static readonly SurfaceType[] IndoorSurfaceTypes = {
            SurfaceType.IndoorInterior,
            SurfaceType.IndoorExterior,
            SurfaceType.IndoorCeilings,
            SurfaceType.IndoorCarpet,
            SurfaceType.IndoorNonCarpet,
            SurfaceType.HVAC,
            SurfaceType.IndoorMisc,
        };


        public static readonly SurfaceType[] OutdoorSurfaceTypes = {
            SurfaceType.OutdoorExterior,
            SurfaceType.Pavement,
            SurfaceType.Roofing,
            SurfaceType.Water,
            SurfaceType.Soil,
            SurfaceType.OutdoorMisc,
        };


        public static readonly SurfaceType[] UndergroundSurfaceTypes = {
            SurfaceType.UndergroundInterior,
            SurfaceType.UndergroundCeilings,
            SurfaceType.UndergroundCarpet,
            SurfaceType.UndergroundNonCarpet,
            SurfaceType.UndergroundMisc,
            SurfaceType.HVAC,
        };
    }
}