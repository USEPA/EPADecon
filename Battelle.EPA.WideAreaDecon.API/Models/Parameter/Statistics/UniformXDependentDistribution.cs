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
        private static int SlopeLocation => 6;
        private static int YIntLocation => 7;
        private static int StartingXLocation => 8;
        private static int StartingYLocation => 9;
        private static int EndingXLocation => 10;
        private static int EndingYLocation => 11;

        public string Name { get; set; }

        public string AppMethod { get; set; }

        public string SurfaceType { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.PERT;

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

        public static UniformXDependentDistribution FromExcel(IRow information)
        {
            UniformXDependentDistribution uniformXDependent = new UniformXDependentDistribution();

            double? slopeValue = uniformXDependent.ParseValueString(SlopeLocation, information);
            double? yIntValue = uniformXDependent.ParseValueString(YIntLocation, information);
            double? startingXValue = uniformXDependent.ParseValueString(StartingXLocation, information);
            double? startingYValue = uniformXDependent.ParseValueString(StartingYLocation, information);
            double? endingXValue = uniformXDependent.ParseValueString(EndingXLocation, information);
            double? endingYValue = uniformXDependent.ParseValueString(EndingYLocation, information);

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
