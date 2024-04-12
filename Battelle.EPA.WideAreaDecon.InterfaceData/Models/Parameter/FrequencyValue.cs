using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using Stats = Battelle.RiskAssessment.Common.Statistics;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    /// <summary>
    /// Implementation of the frequency value handling from data sheet
    /// </summary>
    public class FrequencyValue : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.Frequency;

        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public FrequencyValueType Value { get; set; }

        public static FrequencyValue FromExcel(ParameterMetaData metaData, IRow row)
        {
            // Parse the frequency value string as the enum type FrequencyValueType and throw an exception
            // if the string cannot be parsed into the correct type
            if (!Enum.TryParse(typeof(FrequencyValue).GetCellValue(nameof(Value), row), out FrequencyValueType value))
            {
                throw new ApplicationException($"{typeof(FrequencyValue).GetCellValue(nameof(Value), row)} is not a valid frequency value. Please select either 'Never', 'Once', or 'Multiple'.");
            }

            // Return the frequency value object
            return new FrequencyValue()
            {
                Value = value,
                MetaData = metaData
            };
        }

        public Stats.IDistribution CreateDistribution()
        {
            throw new NotImplementedException();
        }

        public string GetTextValue()
        {
            throw new NotImplementedException();
        }

        public FrequencyValueType GetFrequencyValue()
        {
            return Value;
        }
    }
}
