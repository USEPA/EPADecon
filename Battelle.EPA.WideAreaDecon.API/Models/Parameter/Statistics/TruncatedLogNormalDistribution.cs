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
        private static int MinLocation => 6;
        private static int MaxLocation => 7;
        private static int MeanLocation => 8;
        private static int StdDevLocation => 9;

        public string Name { get; set; }

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
            TruncatedLogNormalDistribution truncLogNormDist = new TruncatedLogNormalDistribution();

            double? minValue = truncLogNormDist.ParseValueString(MinLocation, information);
            double? maxValue = truncLogNormDist.ParseValueString(MaxLocation, information);
            double? meanValue = truncLogNormDist.ParseValueString(MeanLocation, information);
            double? stdDevValue = truncLogNormDist.ParseValueString(StdDevLocation, information);

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
            throw new NotImplementedException();
        }

        private double? ParseValueString(int location, IRow information)
        {
            double? value = null;

            var valueString = information.GetCell(location)?.ToString();

            if (!string.IsNullOrWhiteSpace(valueString)) value = double.Parse(valueString);

            return value;
        }
    }
}
