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
using NPOI.SS.Formula.Functions;
using Microsoft.VisualBasic;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of the beta pert distribution
    /// </summary>
    public class BetaPertDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.PERT;
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
                Min = typeof(BetaPertDistribution).GetCellValue(nameof(Min), row)?.ConvertToDouble(),
                Max = typeof(BetaPertDistribution).GetCellValue(nameof(Max), row)?.ConvertToDouble(),
                Mode = typeof(BetaPertDistribution).GetCellValue(nameof(Mode), row)?.ConvertToDouble(),
                MetaData = metaData
            };
        }

    }
}
