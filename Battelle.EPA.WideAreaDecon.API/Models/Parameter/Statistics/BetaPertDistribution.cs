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
    /// Implementation of the beta pert distribution
    /// </summary>
    public class BetaPertDistribution : IParameter
    {
        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.PERT;

        public double Min { get; set; }

        public double Max { get; set; }

        public double Mode { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static BetaPertDistribution ReadExcel(Dictionary<string, string> information)
        {
            throw new NotImplementedException();
        }
    }
}
