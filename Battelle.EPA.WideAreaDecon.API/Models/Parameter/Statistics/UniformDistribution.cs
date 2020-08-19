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
    /// Implementation fo the uniform distribution
    /// </summary>
    public class UniformDistribution : IParameter
    {
        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.Uniform;

        public double Min { get; set; }

        public double Max { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static UniformDistribution ReadExcel(Dictionary<string, string> information)
        {
            throw new NotImplementedException();
        }
    }
}
