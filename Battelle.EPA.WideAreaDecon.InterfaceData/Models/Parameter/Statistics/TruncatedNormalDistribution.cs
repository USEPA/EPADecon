﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using Stats = Battelle.RiskAssessment.Common.Statistics;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics
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

        public Stats.IDistribution CreateDistribution()
        {
            if (Min.HasValue && Max.HasValue && Mean.HasValue && StdDev.HasValue)
            {
                return new Stats.TruncatedNormalDistribution(Mean.Value, StdDev.Value, Min.Value, Max.Value);
            }
            throw new ArgumentNullException();
        }
    }
}