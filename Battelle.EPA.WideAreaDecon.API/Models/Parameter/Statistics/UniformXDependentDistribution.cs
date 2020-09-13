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
    public struct GraphPoint
    {
        public double X;
        public double Y;
    }
    public class UniformXDependentBuilder
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? Slope { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? YIntercept { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public double StartingX { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter4)]
        public double StartingY { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter5)]
        public double EndingX { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter6)]
        public double EndingY { get; set; }

        [JsonProperty]
        [ExcelProperty(ParameterLocationHelper.Parameter7)]
        public string DependentVariable { get; set; }

        public GraphPoint[] GetPoints()
        {
            return new GraphPoint[]
            {
                new GraphPoint(){X = StartingX, Y = StartingX}, 
            };
        }

        public static UniformXDependentBuilder FromExcel(IRow row)
        {
            return new UniformXDependentBuilder()
            {
                Slope = typeof(UniformXDependentBuilder).GetCellValue(nameof(Slope), row)?.ConvertToOptionalDouble(),
                YIntercept = typeof(UniformXDependentBuilder).GetCellValue(nameof(YIntercept), row)?.ConvertToOptionalDouble(),
                StartingX = typeof(UniformXDependentBuilder).GetCellValue(nameof(StartingX), row)?.ConvertToDouble() ?? 
                    throw new ApplicationException($"Could not find {nameof(StartingX)}"),
                StartingY = typeof(UniformXDependentBuilder).GetCellValue(nameof(StartingY), row)?.ConvertToDouble() ?? 
                    throw new ApplicationException($"Could not find {nameof(StartingY)}"),
                EndingX = typeof(UniformXDependentBuilder).GetCellValue(nameof(EndingX), row)?.ConvertToDouble() ?? 
                    throw new ApplicationException($"Could not find {nameof(EndingX)}"),
                EndingY = typeof(UniformXDependentBuilder).GetCellValue(nameof(EndingY), row)?.ConvertToDouble() ?? 
                    throw new ApplicationException($"Could not find {nameof(EndingY)}")
            };
        }
    }

    /// <summary>
    /// Implementation of the uniform x dependent distribution
    /// </summary>
    public class UniformXDependentDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.UniformXDependent;
        public ParameterMetaData MetaData { get; set; }


        public static UniformXDependentDistribution FromExcel(ParameterMetaData metaData, IEnumerable<IRow> rows)
        {
            var builders = rows.Select(UniformXDependentBuilder.FromExcel);
            return new UniformXDependentDistribution()
            {
                MetaData = metaData,
            };
        }

    }
}
