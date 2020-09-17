using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.List
{
    public class EnumeratedParameter<T> : IParameter where T: Enum
    {
        public ParameterType Type => ParameterType.EnumeratedFraction;
        public string TypeName => typeof(T).Name;
        public ParameterMetaData MetaData { get; set; }

        public Dictionary<T, IParameter> Values;


        public static EnumeratedParameter<T> FromExcel(ParameterMetaData metaData, IEnumerable<IRow> rows)
        {
            return new EnumeratedParameter<T>()
            {
                MetaData = metaData,
                Values = rows.ToDictionary(
                    row => ParameterMetaData.FromExcel(row).Category.ParseEnum<T>(),
                    row => IParameter.FromExcel(ParameterMetaData.FromExcel(row), row))
            };
        }
    }
}