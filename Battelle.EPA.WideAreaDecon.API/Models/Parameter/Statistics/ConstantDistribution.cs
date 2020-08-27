﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.Serialization;
using System.Xml.Linq;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation fo the constant distribution
    /// </summary>
    public class ConstantDistribution : IParameter
    {
        private static int NameLocation => 2;
        private static int ValueLocation => 6;
        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.Constant;

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public double? Value { get; set; }

        public ParameterMetaData MetaData { get; set; }

        public static ConstantDistribution FromExcel(IRow information)
        {
            ConstantDistribution constDist = new ConstantDistribution();

            double? value = constDist.ParseValueString(ValueLocation, information);

            return new ConstantDistribution()
            {
                Name = information.GetCell(NameLocation)?.ToString() ?? throw new SerializationException("Parameter has no name associated with it in Excel"),
                Value = value,
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