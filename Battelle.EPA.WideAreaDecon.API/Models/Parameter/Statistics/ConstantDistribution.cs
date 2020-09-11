using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.Serialization;
using System.Xml.Linq;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation fo the constant distribution
    /// </summary>
    public class ConstantDistribution : IParameter
    {
        private static int NameLocation => 2;
        private static int AppMethodLocation => 3;
        private static int SurfaceTypeLocation => 4;
        private static int ValueLocation => 6;
        private static int OffsetLocation => 4;

        public string Name { get; set; }

        public string AppMethod { get; set; }

        public string SurfaceType { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.Constant;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Value { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static ConstantDistribution FromExcel(IRow information)
        {
            bool isEfficacy = false;

            ConstantDistribution constDist = new ConstantDistribution();

            double? value = constDist.ParseValueString(ValueLocation, information, isEfficacy);

            return new ConstantDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                Value = value,
                MetaData = ParameterMetaData.FromExcel(information, isEfficacy)
            };
        }

        public static ConstantDistribution FromEfficacyExcelSheet(IRow information)
        {
            bool isEfficacy = true;

            ConstantDistribution constDist = new ConstantDistribution();

            double? value = constDist.ParseValueString(ValueLocation + OffsetLocation, information, isEfficacy);

            return new ConstantDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                AppMethod = information.GetCell(AppMethodLocation)?.ToString() ?? throw new SerializationException("Parameter has no application method associated with it in Excel"),
                SurfaceType = information.GetCell(SurfaceTypeLocation)?.ToString() ?? throw new SerializationException("Parameter has no surface type associated with it in Excel"),
                Value = value,
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