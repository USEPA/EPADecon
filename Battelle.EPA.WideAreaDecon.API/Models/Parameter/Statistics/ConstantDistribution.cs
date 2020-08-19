using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Xml.Linq;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation fo the constant distribution
    /// </summary>
    public class ConstantDistribution : IParameter
    {
        public string Name { get; set; }
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.Constant;

        public ParameterMetaData MetaData { get; set; }

        public double Value { get; set; }

        public static ConstantDistribution ReadExcel(Dictionary<string, string> information)
        {
            throw new NotImplementedException();
        }
    }
}