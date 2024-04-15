using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers;
using Stats = Battelle.RiskAssessment.Common.Statistics;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of the scaled beta distribution
    /// </summary>
    public class ScaledBetaDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.ScaledBeta;

        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? Min { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? Max { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public double? Alpha { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter4)]
        public double? Beta { get; set; }

        public static ScaledBetaDistribution FromExcel(ParameterMetaData metaData, IRow row)
        {
            var minimum = typeof(ScaledBetaDistribution).GetCellValue(nameof(Min), row)?.ConvertToStepRoundedAndOptionalDouble(metaData);
            var maximum = typeof(ScaledBetaDistribution).GetCellValue(nameof(Max), row)?.ConvertToStepRoundedAndOptionalDouble(metaData);
            var alpha = typeof(ScaledBetaDistribution).GetCellValue(nameof(Alpha), row)?.ConvertToStepRoundedAndOptionalDouble(metaData);
            var beta = typeof(ScaledBetaDistribution).GetCellValue(nameof(Beta), row)?.ConvertToStepRoundedAndOptionalDouble(metaData);

            if (minimum < metaData.LowerLimit || minimum > metaData.UpperLimit)
            {
                throw new ApplicationException($"Minimum for {metaData.Name} is out of range specified by the lower and upper limit");
            }

            if (maximum < metaData.LowerLimit || maximum > metaData.UpperLimit)
            {
                throw new ApplicationException($"Maximum for {metaData.Name} is out of range specified by the lower and upper limit");
            }

            if (alpha < metaData.LowerLimit || alpha > metaData.UpperLimit)
            {
                throw new ApplicationException($"Alpha for {metaData.Name} is out of range specified by the lower and upper limit");
            }

            if (beta < metaData.LowerLimit || beta > metaData.UpperLimit)
            {
                throw new ApplicationException($"Maximum for {metaData.Name} is out of range specified by the lower and upper limit");
            }

            return new ScaledBetaDistribution
            {
                Min = minimum,
                Max = maximum,
                Alpha = alpha,
                Beta = beta,
                MetaData = metaData
            };
        }

        public Stats.IDistribution CreateDistribution()
        {
            if (Min.HasValue && Max.HasValue && Alpha.HasValue && Beta.HasValue)
            {
                return new Stats.ScaledBetaDistribution(Alpha.Value, Beta.Value, Min.Value, Max.Value);
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
