﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using System.Security.Cryptography.X509Certificates;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using Battelle.RiskAssessment.Common.Statistics;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics
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
        public double[] XValues { get; set; }

        [ExcelProperty(ParameterLocationHelper.Parameter2)]
        public double[] YMinimumValues { get; set; }

        [ExcelProperty(ParameterLocationHelper.Parameter3)]
        public double[] YMaximumValues { get; set; }

        [ExcelProperty(ParameterLocationHelper.Parameter4)]
        public string[] DependentVariable { get; set; }

        public static UniformXDependentDistribution FromExcel(ParameterMetaData metaData, IEnumerable<IRow> rows)
        {
            var enhancedRows = rows as IRow[] ?? rows.ToArray();
            if (!enhancedRows.Any())
            {
                throw new ArgumentException($"Input {nameof(rows)} must be more than 0 row");
            }

            return new UniformXDependentDistribution()
            {
                MetaData = metaData,
                XValues = enhancedRows.Select(
                        row => typeof(UniformXDependentDistribution).GetCellValue(nameof(XValues), row)
                            .ConvertToDouble())
                    .ToArray(),
                YMinimumValues = enhancedRows.Select(
                        row => typeof(UniformXDependentDistribution).GetCellValue(nameof(YMinimumValues), row)
                            .ConvertToDouble())
                    .ToArray(),
                YMaximumValues = enhancedRows.Select(
                        row => typeof(UniformXDependentDistribution).GetCellValue(nameof(YMaximumValues), row)
                            .ConvertToDouble())
                    .ToArray(),
                DependentVariable = enhancedRows.Select(
                        row => typeof(UniformXDependentDistribution).GetCellValue(nameof(DependentVariable), row)).ToArray()
            };
        }

        public IDistribution CreateDistribution()
        {

            throw new ArgumentNullException();
        }
    }
}