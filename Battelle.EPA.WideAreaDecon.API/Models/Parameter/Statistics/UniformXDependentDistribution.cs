using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.API.Utility.Helpers;
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
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.UniformXDependent;
        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? Slope { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? YIntercept { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public double? StartingX { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter4)]
        public double? StartingY { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter5)]
        public double? EndingX { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter6)]
        public double? EndingY { get; set; }

        [JsonProperty]
        [ExcelProperty(ParameterLocationHelper.Parameter7)]
        public string DependentVariable { get; set; }


        public static UniformXDependentDistribution FromExcel(ParameterMetaData metaData, IRow row)
        {
            return new UniformXDependentDistribution()
            {
                MetaData = metaData,
                Slope = typeof(UniformXDependentDistribution).GetCellValue(nameof(Slope), row)?.ConvertToDouble(),
                YIntercept = typeof(UniformXDependentDistribution).GetCellValue(nameof(YIntercept), row)?.ConvertToDouble(),
                StartingX = typeof(UniformXDependentDistribution).GetCellValue(nameof(StartingX), row)?.ConvertToDouble(),
                StartingY = typeof(UniformXDependentDistribution).GetCellValue(nameof(StartingY), row)?.ConvertToDouble(),
                EndingX = typeof(UniformXDependentDistribution).GetCellValue(nameof(EndingX), row)?.ConvertToDouble(),
                EndingY = typeof(UniformXDependentDistribution).GetCellValue(nameof(EndingY), row)?.ConvertToDouble(),
            };
        }

    }
}
