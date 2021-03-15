using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ApplicationMethod
    {
        [EnumMember(Value = "Aerosol")] Aerosol,
        [EnumMember(Value = "Foam Spray")] FoamSpray,
        [EnumMember(Value = "Fogging")] Fogging,
        [EnumMember(Value = "Fumigation")] Fumigation,
        [EnumMember(Value = "Gel")] Gel,

        [EnumMember(Value = "Liquid Immersion")]
        LiquidImmersion,
        [EnumMember(Value = "Liquid Spray")] LiquidSpray,

        [EnumMember(Value = "Liquid Suspension")]
        LiquidSuspension,
        [EnumMember(Value = "Liquid Wipe")] LiquidWipe,
        [EnumMember(Value = "Physical")] Physical
    }

    public static class ApplicableApplicationMethodHelper
    {
        public static readonly ApplicationMethod[] IndoorWallsMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] IndoorCeilingsMethods = { 
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] IndoorCarpetMethods = {
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] IndoorNonCarpetMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] HvacMethods = {
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] IndoorMiscMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fumigation,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] OutdoorExteriorMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fumigation,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] PavementMethods = { 
            ApplicationMethod.FoamSpray,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] RoofingMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] WaterMethods = { 
            ApplicationMethod.LiquidSuspension,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] SoilMethods = {
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fumigation,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] OutdoorMiscMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] UndergroundWallsMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] UndergroundCeilingsMethods = {
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] UndergroundCarpetMethods = {
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] UndergroundNonCarpetMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static readonly ApplicationMethod[] UndergroundMiscMethods = {
            ApplicationMethod.Aerosol,
            ApplicationMethod.FoamSpray,
            ApplicationMethod.Fogging,
            ApplicationMethod.Fumigation,
            ApplicationMethod.Gel,
            ApplicationMethod.LiquidImmersion,
            ApplicationMethod.LiquidSpray,
            ApplicationMethod.LiquidWipe,
            ApplicationMethod.Physical
        };

        public static ApplicationMethod[] GetApplicationMethodsForSurface(SurfaceType surface)
        {
            return surface switch
            {
                SurfaceType.IndoorWalls => IndoorWallsMethods,
                SurfaceType.IndoorCeilings => IndoorCeilingsMethods,
                SurfaceType.IndoorCarpet => IndoorCarpetMethods,
                SurfaceType.IndoorNonCarpet => IndoorNonCarpetMethods,
                SurfaceType.Hvac => HvacMethods,
                SurfaceType.IndoorMisc => IndoorMiscMethods,
                SurfaceType.OutdoorExterior => OutdoorExteriorMethods,
                SurfaceType.Pavement => PavementMethods,
                SurfaceType.Roofing => RoofingMethods,
                SurfaceType.Water => WaterMethods,
                SurfaceType.Soil => SoilMethods,
                SurfaceType.OutdoorMisc => OutdoorMiscMethods,
                SurfaceType.UndergroundWalls => UndergroundWallsMethods,
                SurfaceType.UndergroundCeilings => UndergroundCeilingsMethods,
                SurfaceType.UndergroundCarpet => UndergroundCarpetMethods,
                SurfaceType.UndergroundNonCarpet => UndergroundNonCarpetMethods,
                SurfaceType.UndergroundMisc => UndergroundNonCarpetMethods,
                _ => throw new ArgumentOutOfRangeException()
            };
        }
    }
}