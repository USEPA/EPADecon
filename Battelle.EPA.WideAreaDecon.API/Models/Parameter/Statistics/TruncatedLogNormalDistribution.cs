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
    /// Implementation of the truncated log normal
    /// </summary>
    public class TruncatedLogNormalDistribution : IParameter
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
        public ParameterType Type => ParameterType.TruncatedLogNormal;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Min { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Max { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Mean { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? StdDev { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static TruncatedLogNormalDistribution FromExcel(IRow information)
        {
            bool isEfficacy = false;

            TruncatedLogNormalDistribution truncLogNormDist = new TruncatedLogNormalDistribution();

            double? minValue = truncLogNormDist.ParseValueString(MinLocation, information, isEfficacy);
            double? maxValue = truncLogNormDist.ParseValueString(MaxLocation, information, isEfficacy);
            double? meanValue = truncLogNormDist.ParseValueString(MeanLocation, information, isEfficacy);
            double? stdDevValue = truncLogNormDist.ParseValueString(StdDevLocation, information, isEfficacy);

            return new TruncatedLogNormalDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                Min = minValue,
                Max = maxValue,
                Mean = meanValue,
                StdDev = stdDevValue,
                MetaData = ParameterMetaData.FromExcel(information)
            };
        }

        public static TruncatedLogNormalDistribution FromEfficacyExcelSheet(IRow information)
        {
            bool isEfficacy = true;

            TruncatedLogNormalDistribution truncLogNormDist = new TruncatedLogNormalDistribution();

            double? minValue = truncLogNormDist.ParseValueString(MinLocation + OffsetLocation, information, isEfficacy);
            double? maxValue = truncLogNormDist.ParseValueString(MaxLocation + OffsetLocation, information, isEfficacy);
            double? meanValue = truncLogNormDist.ParseValueString(MeanLocation + OffsetLocation, information, isEfficacy);
            double? stdDevValue = truncLogNormDist.ParseValueString(StdDevLocation + OffsetLocation, information, isEfficacy);

            return new TruncatedLogNormalDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                AppMethod = information.GetCell(AppMethodLocation)?.ToString() ?? throw new SerializationException("Parameter has no application method associated with it in Excel"),
                SurfaceType = information.GetCell(SurfaceTypeLocation)?.ToString() ?? throw new SerializationException("Parameter has no surface type associated with it in Excel"),
                Min = minValue,
                Max = maxValue,
                Mean = meanValue,
                StdDev = stdDevValue,
                MetaData = ParameterMetaData.FromExcel(information)
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
