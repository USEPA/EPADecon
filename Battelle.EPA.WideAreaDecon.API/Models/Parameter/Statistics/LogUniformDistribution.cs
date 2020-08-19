using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Threading.Tasks;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of the log uniform distribution
    ///
    /// https://en.wikipedia.org/wiki/Reciprocal_distribution
    /// </summary>
    public class LogUniformDistribution : IParameter
    {
        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.LogUniform;

        public double Min { get; set; }

        public double Max { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static LogUniformDistribution ReadExcel(Dictionary<string, string> information)
        {
            throw new NotImplementedException();
        }
    }
}
