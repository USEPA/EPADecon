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
    /// Implementation of the bimodal truncated normal distribution
    /// </summary>
    public class BimodalTruncatedNormalDistribution : IParameter
    {

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.PERT;

        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? Mean1 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? Std1 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public double? Mean2 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter4)]
        public double? Std2 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter5)]
        public double? Min { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter6)]
        public double? Max { get; set; }

        public static BimodalTruncatedNormalDistribution FromExcel(ParameterMetaData metaData, IRow information)
        {
            return new BimodalTruncatedNormalDistribution()
            {
                MetaData = metaData,
                Mean1 = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Mean1), information)?.ConvertToDouble(),
                Std1 = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Std1), information)?.ConvertToDouble(),
                Mean2 = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Mean2), information)?.ConvertToDouble(),
                Std2 = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Std2), information)?.ConvertToDouble(),
                Min = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Min), information)?.ConvertToDouble(),
                Max = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Max), information)?.ConvertToDouble(),
            };
        }
    }
}
