using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter
{
    /// <summary>
    /// Interface for parameter objects in the model
    /// </summary>
    public interface IParameter
    {
        [ExcelProperty(5)] public ParameterType Type { get; }

        /// <inheritdoc cref="ParameterMetaData"/>
        ParameterMetaData MetaData { get; set; }

        /// <summary>
        /// Converts from an excel format to a parameter
        /// </summary>
        /// <param name="row">The input row that is being parsed</param>
        /// <returns>The constructed IParameter object</returns>
        /// <exception cref="SerializationException"></exception>
        /// <exception cref="ApplicationException"></exception>
        /// <exception cref="ArgumentOutOfRangeException"></exception>
        public static IParameter FromExcel(ParameterMetaData metaData, IRow row)
        {
            return ParseParameterType(row) switch
            {
                ParameterType.Constant => ConstantDistribution.FromExcel(metaData, row),
                ParameterType.Uniform => UniformDistribution.FromExcel(metaData, row),
                ParameterType.PERT => BetaPertDistribution.FromExcel(metaData, row),
                ParameterType.TruncatedNormal => TruncatedNormalDistribution.FromExcel(metaData, row),
                ParameterType.LogUniform => LogUniformDistribution.FromExcel(metaData, row),
                ParameterType.TruncatedLogNormal => TruncatedLogNormalDistribution.FromExcel(metaData, row),
                ParameterType.UniformXDependent => throw new ApplicationException(
                    "Cannot parse uniform XDependent from IParameter interface"),
                ParameterType.BimodalTruncatedNormal => BimodalTruncatedNormalDistribution.FromExcel(metaData, row),
                ParameterType.Null => throw new ApplicationException("Cannot parse parameter type Null"),
                ParameterType.LogNormal => LogNormalDistribution.FromExcel(metaData, row),
                ParameterType.Weibull => WeibullDistribution.FromExcel(metaData, row),
                ParameterType.EnumeratedFraction => throw new ApplicationException($"Cannot parse parameter type {row}"),
                ParameterType.EnumeratedParameter => throw new ApplicationException($"Cannot parse parameter type {row}"),
                _ => throw new ArgumentOutOfRangeException()
            };
        }

        public static ParameterType ParseParameterType(IRow row)
        {
            return typeof(IParameter).GetCellValue(nameof(Type), row).ParseEnum<ParameterType>();
        }
    }
}