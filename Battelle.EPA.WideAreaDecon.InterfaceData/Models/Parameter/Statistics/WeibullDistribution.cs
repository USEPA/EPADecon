using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using Battelle.RiskAssessment.Common.Statistics;
using System;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics
{
    public class WeibullDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.Weibull;

        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? K { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? Lambda { get; set; }


        public static WeibullDistribution FromExcel(ParameterMetaData metaData, IRow row)
        {
            return new WeibullDistribution()
            {
                K = typeof(WeibullDistribution).GetCellValue(nameof(K), row)?.ConvertToOptionalDouble(),
                Lambda = typeof(WeibullDistribution).GetCellValue(nameof(Lambda), row)?.ConvertToOptionalDouble(),
                MetaData = metaData
            };
        }

        public IDistribution CreateDistribution()
        {
            throw new NotImplementedException();
        }
    }
}