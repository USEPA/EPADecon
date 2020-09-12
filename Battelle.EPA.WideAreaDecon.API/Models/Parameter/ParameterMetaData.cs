using System;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter
{
    public class ParameterMetaData
    {
        [ExcelProperty(0)] public Phase[] ValidPhases { get; set; }
        [ExcelProperty(1)] public string Category { get; set; }
        [ExcelProperty(2)] string Name { get; set; }
        [ExcelProperty(3)] public string Description { get; set; }
        [ExcelProperty(4)] public string Units { get; set; }
        [ExcelProperty(5)] public string Notes { get; set; }
        [ExcelProperty(14)] public double Min { get; set; }
        [ExcelProperty(15)] public double Max { get; set; }
        [ExcelProperty(16)] public double Step { get; set; }


        public static ParameterMetaData FromExcel(IRow row)
        {
            return new ParameterMetaData()
            {
                ValidPhases = typeof(ParameterMetaData).GetCellValue(nameof(ValidPhases), row)
                        ?.Split(';')
                        .Select(Enum.Parse<Phase>).ToArray() ??
                    throw new ApplicationException("Error determining Valid Phases"),
                Category = typeof(ParameterMetaData).GetCellValue(nameof(Category), row),
                Name = typeof(ParameterMetaData).GetCellValue(nameof(Name), row) ?? throw new ApplicationException("Parameter must have a name"),
                Description = typeof(ParameterMetaData).GetCellValue(nameof(Description), row),
                Units = typeof(ParameterMetaData).GetCellValue(nameof(Units), row),
                Notes = typeof(ParameterMetaData).GetCellValue(nameof(Notes), row),
                Min = double.Parse(typeof(ParameterMetaData).GetCellValue(nameof(Min), row)
                    ?? throw new ApplicationException("Unable to parse name for maximum")),
                Max = double.Parse(typeof(ParameterMetaData).GetCellValue(nameof(Max), row)
                    ?? throw new ApplicationException("Unable to parse name for maximum")),
                Step = double.Parse(typeof(ParameterMetaData).GetCellValue(nameof(Step), row)
                    ?? throw new ApplicationException("Unable to parse name for maximum")),
            };
        }
    }
}