using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of a Truncated Normal distribution
    /// </summary>
    public class TruncatedNormalDistribution : IParameter
    {
        private static int NameLocation => 2;
        private static int AppMethodLocation => 3;
        private static int SurfaceTypeLocation => 4;
        private static int MinLocation => 6;
        private static int MaxLocation => 7;
        private static int MeanLocation => 8;
        private static int StdDevLocation => 9;
        private static int OffsetLocation => 3;

        public string Name { get; set; }

        public string AppMethod { get; set; }

        public string SurfaceType { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.TruncatedNormal;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Min { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Max { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Mean { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? StdDev { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static TruncatedNormalDistribution FromExcel(IRow information)
        {
            bool isEfficacy = false;

            TruncatedNormalDistribution truncNormDist = new TruncatedNormalDistribution();

            double? minValue = truncNormDist.ParseValueString(MinLocation, information, isEfficacy);
            double? maxValue = truncNormDist.ParseValueString(MaxLocation, information, isEfficacy);
            double? meanValue = truncNormDist.ParseValueString(MeanLocation, information, isEfficacy);
            double? stdDevValue = truncNormDist.ParseValueString(StdDevLocation, information, isEfficacy);

            return new TruncatedNormalDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                Min = minValue,
                Max = maxValue,
                Mean = meanValue,
                StdDev = stdDevValue,
                MetaData = ParameterMetaData.FromExcel(information, isEfficacy)
            };
        }

        public static TruncatedNormalDistribution FromEfficacyExcelSheet(IRow information)
        {
            bool isEfficacy = true;

            TruncatedNormalDistribution truncNormDist = new TruncatedNormalDistribution();

            double? minValue = truncNormDist.ParseValueString(MinLocation + OffsetLocation, information, isEfficacy);
            double? maxValue = truncNormDist.ParseValueString(MaxLocation + OffsetLocation, information, isEfficacy);
            double? meanValue = truncNormDist.ParseValueString(MeanLocation + OffsetLocation, information, isEfficacy);
            double? stdDevValue = truncNormDist.ParseValueString(StdDevLocation + OffsetLocation, information, isEfficacy);

            return new TruncatedNormalDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                AppMethod = information.GetCell(AppMethodLocation)?.ToString() ?? throw new SerializationException("Parameter has no application method associated with it in Excel"),
                SurfaceType = information.GetCell(SurfaceTypeLocation)?.ToString() ?? throw new SerializationException("Parameter has no surface type associated with it in Excel"),
                Min = minValue,
                Max = maxValue,
                Mean = meanValue,
                StdDev = stdDevValue,
                MetaData = ParameterMetaData.FromExcel(information, isEfficacy)
            };
        }

        private double? ParseValueString(int location, IRow information, bool isEfficacy)
        {
            double? value = null;

            var valueString = information.GetCell(location)?.ToString();

            if (isEfficacy && string.IsNullOrWhiteSpace(valueString)) throw new SerializationException("Parameter has no value associated with it in Excel");
            else value = double.Parse(valueString);

            return value;
        }
    }
}
