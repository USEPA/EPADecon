using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using Stats = Battelle.RiskAssessment.Common.Statistics;
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

        private double? LogK => MathHelper.ConvertToLog10(K);

        private double? LogLambda => MathHelper.ConvertToLog10(Lambda);


        public static WeibullDistribution FromExcel(ParameterMetaData metaData, IRow row)
        {
            return new WeibullDistribution()
            {
                K = typeof(WeibullDistribution).GetCellValue(nameof(K), row)?.ConvertToStepRoundedAndOptionalDouble(metaData),
                Lambda = typeof(WeibullDistribution).GetCellValue(nameof(Lambda), row)?.ConvertToStepRoundedAndOptionalDouble(metaData),
                MetaData = metaData
            };
        }

        public Stats.IDistribution CreateDistribution()
        {
            if (LogK.HasValue && LogLambda.HasValue)
            {
                return new Stats.WeibullDistribution(LogK.Value, LogLambda.Value);
            }
            throw new ArgumentNullException();
        }

        public string GetTextValue()
        {
            throw new NotImplementedException();
        }

        public FrequencyValueType GetFrequencyValue()
        {
            throw new NotImplementedException();
        }
    }
}