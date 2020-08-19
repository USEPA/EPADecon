using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Threading.Tasks;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Scenario
{
    /// <summary>
    /// Implementation of the contaminated building type
    /// </summary>
    public class ContaminatedBuildingType : IParameter
    {
        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.ContaminatedBuildingType;

        public double Area { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static ContaminatedBuildingType ReadExcel(Dictionary<string, string> information)
        {
            throw new NotImplementedException();
        }
    }
}
