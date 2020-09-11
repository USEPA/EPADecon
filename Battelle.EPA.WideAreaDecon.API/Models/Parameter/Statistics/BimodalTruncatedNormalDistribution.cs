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
    /// Implementation of the bimodal truncated normal distribution
    /// </summary>
    public class BimodalTruncatedNormalDistribution : IParameter
    {
        private static int NameLocation => 2;
        private static int AppMethodLocation => 3;
        private static int SurfaceTypeLocation => 4;
        private static int Mean1Location => 10;
        private static int Std1Location => 11;
        private static int Mean2Location => 12;
        private static int Std2Location => 13;
        private static int MinLocation => 14;
        private static int MaxLocation => 15;

        public string Name { get; set; }

        public string AppMethod { get; set; }

        public string SurfaceType { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.PERT;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Mean1 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Std1 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Mean2 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Std2 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Min { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Max { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static BimodalTruncatedNormalDistribution FromEfficacyExcelSheet(IRow information)
        {
            bool isEfficacy = true;

            BimodalTruncatedNormalDistribution bimodalTruncNorm = new BimodalTruncatedNormalDistribution();

            double? mean1Value = bimodalTruncNorm.ParseValueString(Mean1Location, information, isEfficacy);
            double? std1Value = bimodalTruncNorm.ParseValueString(Std1Location, information, isEfficacy);
            double? mean2Value = bimodalTruncNorm.ParseValueString(Mean2Location, information, isEfficacy);
            double? std2Value = bimodalTruncNorm.ParseValueString(Std2Location, information, isEfficacy);
            double? minValue = bimodalTruncNorm.ParseValueString(MinLocation, information, isEfficacy);
            double? maxValue = bimodalTruncNorm.ParseValueString(MaxLocation, information, isEfficacy);

            return new BimodalTruncatedNormalDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                AppMethod = information.GetCell(AppMethodLocation)?.ToString() ?? throw new SerializationException("Parameter has no application method associated with it in Excel"),
                SurfaceType = information.GetCell(SurfaceTypeLocation)?.ToString() ?? throw new SerializationException("Parameter has no surface type associated with it in Excel"),
                Mean1 = mean1Value,
                Std1 = std1Value,
                Mean2 = mean2Value,
                Std2 = std2Value,
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
