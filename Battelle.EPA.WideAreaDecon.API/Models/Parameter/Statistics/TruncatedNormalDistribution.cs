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
        private static int MinLocation => 6;
        private static int MaxLocation => 7;
        private static int MeanLocation => 8;
        private static int StdDevLocation => 9;

        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.TruncatedNormal;

        public double? Min { get; set; }

        public double? Max { get; set; }

        public double? Mean { get; set; }

        public double? StdDev { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static TruncatedNormalDistribution FromExcel(IRow information)
        {
            TruncatedNormalDistribution truncNormDist = new TruncatedNormalDistribution();

            double? minValue = truncNormDist.ParseValueString(MinLocation, information);
            double? maxValue = truncNormDist.ParseValueString(MaxLocation, information);
            double? meanValue = truncNormDist.ParseValueString(MeanLocation, information);
            double? stdDevValue = truncNormDist.ParseValueString(StdDevLocation, information);

            return new TruncatedNormalDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                Min = minValue,
                Max = maxValue,
                Mean = meanValue,
                StdDev = stdDevValue,
                MetaData = ParameterMetaData.FromExcel(information)
            };
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
