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
using NPOI.SS.Formula.Functions;
using Microsoft.VisualBasic;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of the beta pert distribution
    /// </summary>
    public class BetaPertDistribution : IParameter
    {
        private static int NameLocation => 2;
        private static int MinLocation => 6;
        private static int MaxLocation => 7;
        private static int ModeLocation => 8;

        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.PERT;

        public double? Min { get; set; }

        public double? Max { get; set; }

        public double? Mode { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static BetaPertDistribution FromExcel(IRow information)
        {
            BetaPertDistribution betaPertDist = new BetaPertDistribution();

            double? minValue = betaPertDist.ParseValueString(MinLocation, information);
            double? maxValue = betaPertDist.ParseValueString(MaxLocation, information);
            double? modeValue = betaPertDist.ParseValueString(ModeLocation, information);

            return new BetaPertDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                Min = minValue,
                Max = maxValue,
                Mode = modeValue,
                MetaData = ParameterMetaData.FromExcel(information)
            };
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
