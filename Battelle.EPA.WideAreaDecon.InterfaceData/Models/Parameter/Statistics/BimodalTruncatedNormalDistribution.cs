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
    /// Implementation of the bimodal truncated normal distribution
    /// </summary>
    public class BimodalTruncatedNormalDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.BimodalTruncatedNormal;

        public ParameterMetaData MetaData { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public double? Mean1 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double? StdDev1 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public double? Mean2 { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        [ExcelProperty(ParameterLocationHelper.Parameter4)]
        public double? StdDev2 { get; set; }

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
                Mean1 = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Mean1), information)
                    ?.ConvertToOptionalDouble(),
                StdDev1 = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(StdDev1), information)
                    ?.ConvertToOptionalDouble(),
                Mean2 = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Mean2), information)
                    ?.ConvertToOptionalDouble(),
                StdDev2 = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(StdDev2), information)
                    ?.ConvertToOptionalDouble(),
                Min = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Min), information)
                    ?.ConvertToOptionalDouble(),
                Max = typeof(BimodalTruncatedNormalDistribution).GetCellValue(nameof(Max), information)
                    ?.ConvertToOptionalDouble(),
            };
        }

        public Stats.IDistribution CreateDistribution()
        {
            if (Mean1.HasValue && StdDev1.HasValue && Mean2.HasValue && StdDev2.HasValue && Min.HasValue && Max.HasValue)
            {
                Stats.TruncatedNormalDistribution child1 = new Stats.TruncatedNormalDistribution(Mean1.Value, StdDev1.Value, Min.Value, Max.Value);
                Stats.TruncatedNormalDistribution child2 = new Stats.TruncatedNormalDistribution(Mean2.Value, StdDev2.Value, Min.Value, Max.Value);

                return new Stats.BimodalTruncatedNormalDistribution(child1, child2);
            }
            throw new ArgumentNullException();
        }
    }
}