using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Scenario
{
    /// <summary>
    /// Implementation of the contaminated building types
    /// </summary>
    public class ContaminatedBuildingTypes : IParameter
    {
        private static int NameLocation => 2;

        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.ContaminatedBuildingTypes;

        public ContaminatedBuildingType[] Buildings { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static ContaminatedBuildingTypes FromExcel(IRow information)
        {
            bool isEfficacy = false;

            return new ContaminatedBuildingTypes()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                MetaData = ParameterMetaData.FromExcel(information, isEfficacy)
            };
        }

        public static ContaminatedBuildingTypes FromEfficacyExcelSheet(IRow information)
        {
            throw new NotImplementedException();
        }
    }
}
