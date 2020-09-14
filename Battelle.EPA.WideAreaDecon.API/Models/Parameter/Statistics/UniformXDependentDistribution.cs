using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using System.Security.Cryptography.X509Certificates;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.API.Utility.Helpers;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using NPOI.SS.Formula.Functions;
using Microsoft.VisualBasic;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics
{
    /// <summary>
    /// Implementation of the uniform x dependent distribution
    /// </summary>
    public class UniformXDependentDistribution : IParameter
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public ParameterType Type => ParameterType.UniformXDependent;
        public ParameterMetaData MetaData { get; set; }
        
        [ExcelProperty(ParameterLocationHelper.Parameter1)]
        public List<double> XValues { get; set; }
        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public List<double> YMinimumValues { get; set; }
        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public List<double> XMinimumValues { get; set; }
        [ExcelProperty(ParameterLocationHelper.Parameter4)]
        public string DependentVariable { get; set; }

        public static UniformXDependentDistribution FromExcel(ParameterMetaData metaData, string dependentVariable, IEnumerable<IRow> rows)
        {
            return new UniformXDependentDistribution()
            {
                MetaData = metaData,
            };
        }

    }
}
