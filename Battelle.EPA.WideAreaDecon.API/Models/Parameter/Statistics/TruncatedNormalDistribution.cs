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

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of a Truncated Normal distribution
    /// </summary>
    public class TruncatedNormalDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.TruncatedNormal;

        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? Min { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? Max { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public double? Mean { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter4)]
        public double? StdDev { get; set; }

        public static TruncatedNormalDistribution FromExcel(ParameterMetaData metaData, IRow row)
        {
            return new TruncatedNormalDistribution()
            {
                MetaData = metaData,
                Min = typeof(TruncatedNormalDistribution).GetCellValue(nameof(Min), row)?.ConvertToOptionalDouble(),
                Max = typeof(TruncatedNormalDistribution).GetCellValue(nameof(Max), row)?.ConvertToOptionalDouble(),
                Mean = typeof(TruncatedNormalDistribution).GetCellValue(nameof(Mean), row)?.ConvertToOptionalDouble(),
                StdDev = typeof(TruncatedNormalDistribution).GetCellValue(nameof(StdDev), row)
                    ?.ConvertToOptionalDouble()
            };
        }
    }
}