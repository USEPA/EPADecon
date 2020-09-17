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
    public class LogNormalDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.LogNormal;

        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? Mean { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? StdDev { get; set; }

        public static LogNormalDistribution FromExcel(ParameterMetaData metaData, IRow information)
        {
            return new LogNormalDistribution()
            {
                MetaData = metaData,
                Mean = typeof(LogNormalDistribution).GetCellValue(nameof(Mean), information)?.ConvertToOptionalDouble(),
                StdDev = typeof(LogNormalDistribution).GetCellValue(nameof(StdDev), information)?.ConvertToOptionalDouble(),
            };
        }
    }
}