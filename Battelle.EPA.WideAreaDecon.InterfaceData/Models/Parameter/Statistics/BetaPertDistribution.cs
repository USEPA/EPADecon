using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers;
using Battelle.RiskAssessment.Common.Statistics;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of the beta pert distribution
    /// </summary>
    public class BetaPertDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.Pert;

        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? Min { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? Max { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public double? Mode { get; set; }


        public static BetaPertDistribution FromExcel(ParameterMetaData metaData, IRow row)
        {
            return new BetaPertDistribution()
            {
                Min = typeof(BetaPertDistribution).GetCellValue(nameof(Min), row)?.ConvertToOptionalDouble(),
                Max = typeof(BetaPertDistribution).GetCellValue(nameof(Max), row)?.ConvertToOptionalDouble(),
                Mode = typeof(BetaPertDistribution).GetCellValue(nameof(Mode), row)?.ConvertToOptionalDouble(),
                MetaData = metaData
            };
        }

        public IDistribution CreateDistribution()
        {
            if (Mode.HasValue && Min.HasValue && Max.HasValue)
            {
                return new PertDistribution(Mode.Value, Min.Value, Max.Value);
            }
            throw new ArgumentNullException();
        }
    }
}