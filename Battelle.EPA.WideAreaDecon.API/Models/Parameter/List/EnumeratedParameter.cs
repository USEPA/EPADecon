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
    public class EnumeratedParameter<T> : IParameter where T: struct, Enum
    {
        public ParameterType Type => ParameterType.EnumeratedParameter;
        public string TypeName => typeof(T).Name;
        public ParameterMetaData MetaData { get; set; }

        public Dictionary<T, IParameter> Values;


        public static EnumeratedParameter<T> FromExcel(ParameterMetaData metaData, IEnumerable<IRow> rows)
        {
            var values = new Dictionary<T, IParameter>();
            foreach (T val in Enum.GetValues(typeof(T)))
            {
                var tRows = rows
                    .Where(row => Enum.Parse<T>(ParameterMetaData.FromExcel(row).Category, true).Equals(val))
                    .ToArray();
                if (!tRows.Any())
                {
                    values[val] = null;
                }

                if (tRows.Count() == 1)
                {
                    values[val] = IParameter.FromExcel(ParameterMetaData.FromExcel(tRows[0]), tRows[0]);
                }
                else
                {
                    values[val] =
                        UniformXDependentDistribution.FromExcel(ParameterMetaData.FromExcel(tRows[0]), "", tRows); //TODO:: need to figure out name
                }
            }

            return new EnumeratedParameter<T>()
            {
                MetaData = metaData,
                Values =  values
            };
        }
    }
}