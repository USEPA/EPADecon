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
using NPOI.SS.Formula.Functions;
using Microsoft.VisualBasic;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of the uniform x dependent distribution
    /// </summary>
    public class UniformXDependentDistribution : IParameter
    {
        private static int NameLocation => 2;
        private static int AppMethodLocation => 3;
        private static int SurfaceTypeLocation => 4;
        private static int SlopeLocation => 10;
        private static int YIntLocation => 11;
        private static int StartingXLocation => 12;
        private static int StartingYLocation => 13;
        private static int EndingXLocation => 14;
        private static int EndingYLocation => 15;

        public string Name { get; set; }

        public string AppMethod { get; set; }

        public string SurfaceType { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.UniformXDependent;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Slope { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? YIntercept { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? StartingX { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? StartingY { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? EndingX { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? EndingY { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static UniformXDependentDistribution FromEfficacyExcelSheet(IRow information)
        {
            bool isEfficacy = true;

            UniformXDependentDistribution uniformXDependent = new UniformXDependentDistribution();

            double? slopeValue = uniformXDependent.ParseValueString(SlopeLocation, information, isEfficacy);
            double? yIntValue = uniformXDependent.ParseValueString(YIntLocation, information, isEfficacy);
            double? startingXValue = uniformXDependent.ParseValueString(StartingXLocation, information, isEfficacy);
            double? startingYValue = uniformXDependent.ParseValueString(StartingYLocation, information, isEfficacy);
            double? endingXValue = uniformXDependent.ParseValueString(EndingXLocation, information, isEfficacy);
            double? endingYValue = uniformXDependent.ParseValueString(EndingYLocation, information, isEfficacy);

            return new UniformXDependentDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                AppMethod = information.GetCell(AppMethodLocation)?.ToString() ?? throw new SerializationException("Parameter has no application method associated with it in Excel"),
                SurfaceType = information.GetCell(SurfaceTypeLocation)?.ToString() ?? throw new SerializationException("Parameter has no surface type associated with it in Excel"),
                Slope = slopeValue,
                YIntercept = yIntValue,
                StartingX = startingXValue,
                StartingY = startingYValue,
                EndingX = endingXValue,
                EndingY = endingYValue,
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
