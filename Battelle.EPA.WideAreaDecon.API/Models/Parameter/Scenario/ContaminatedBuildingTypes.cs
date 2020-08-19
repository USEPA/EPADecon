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
    /// Implementation of the contaminated building types
    /// </summary>
    public class ContaminatedBuildingTypes : IParameter
    {
        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.ContaminatedBuildingTypes;

        public ContaminatedBuildingType[] Buildings { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static ContaminatedBuildingTypes ReadExcel(Dictionary<string, string> information)
        {
            throw new NotImplementedException();
        }
    }
}
