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
    /// Implementation of the log uniform distribution
    ///
    /// https://en.wikipedia.org/wiki/Reciprocal_distribution
    /// </summary>
    public class LogUniformDistribution : IParameter
    {
        private static int NameLocation => 2;
        private static int AppMethodLocation => 3;
        private static int SurfaceTypeLocation => 4;
        private static int MinLocation => 6;
        private static int MaxLocation => 7;
        private static int OffsetLocation => 3;

        public string Name { get; set; }

        public string AppMethod { get; set; }

        public string SurfaceType { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.LogUniform;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Min { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Max { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static LogUniformDistribution FromExcel(IRow information)
        {
            bool isEfficacy = false;

            LogUniformDistribution logUnDist = new LogUniformDistribution();

            double? minValue = logUnDist.ParseValueString(MinLocation, information, isEfficacy);
            double? maxValue = logUnDist.ParseValueString(MaxLocation, information, isEfficacy);

            return new LogUniformDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                Min = minValue,
                Max = maxValue,
                MetaData = ParameterMetaData.FromExcel(information, isEfficacy)
            };
        }

        public static LogUniformDistribution FromEfficacyExcelSheet(IRow information)
        {
            bool isEfficacy = true;

            LogUniformDistribution logUnDist = new LogUniformDistribution();

            double? minValue = logUnDist.ParseValueString(MinLocation + OffsetLocation, information, isEfficacy);
            double? maxValue = logUnDist.ParseValueString(MaxLocation + OffsetLocation, information, isEfficacy);

            return new LogUniformDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                AppMethod = information.GetCell(AppMethodLocation)?.ToString() ?? throw new SerializationException("Parameter has no application method associated with it in Excel"),
                SurfaceType = information.GetCell(SurfaceTypeLocation)?.ToString() ?? throw new SerializationException("Parameter has no surface type associated with it in Excel"),
                Min = minValue,
                Max = maxValue,
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
