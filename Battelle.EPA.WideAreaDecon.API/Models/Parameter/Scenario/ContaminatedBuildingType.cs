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
    /// Implementation of the contaminated building type
    /// </summary>
    public class ContaminatedBuildingType : IParameter
    {
        private static int NameLocation => 2;
        private static int AreaLocation => 6;

        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.ContaminatedBuildingType;

        public double? Area { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static ContaminatedBuildingType FromExcel(IRow information)
        {
            ContaminatedBuildingType contaminatedBuilding = new ContaminatedBuildingType();

            double? areaValue = contaminatedBuilding.ParseValueString(AreaLocation, information);

            return new ContaminatedBuildingType()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                Area = areaValue,
                MetaData = ParameterMetaData.FromExcel(information)
            };
        }

        public static ContaminatedBuildingType FromEfficacyExcelSheet(IRow information)
        {
            throw new NotImplementedException();
        }

        private double? ParseValueString(int location, IRow information)
        {
            double? value = null;

            var valueString = information.GetCell(location)?.ToString();

            if (!string.IsNullOrWhiteSpace(valueString)) value = double.Parse(valueString);

            return value;
        }
    }
}
