using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Scenario;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter
{
    /// <summary>
    /// Interface for parameter objects in the model
    /// </summary>
    public interface IParameter
    {
        [ExcelProperty(6)] public ParameterType Type { get; }

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
        static IParameter FromExcel(ParameterMetaData metaData, IRow row)
        {
            var paramCell = typeof(IParameter).GetCell(nameof(Type), row);
            if (!Enum.TryParse(paramCell.StringCellValue, false, out ParameterType type))
            {
                throw new SerializationException($"Could not determine parameter type for {paramCell}");
            }

            return type switch
            {
                ParameterType.Constant => ConstantDistribution.FromExcel(metaData, row),
                ParameterType.ContaminatedBuildingType => ContaminatedBuildingType.FromExcel(metaData, row),
                ParameterType.Uniform => UniformDistribution.FromExcel(metaData, row),
                ParameterType.PERT => BetaPertDistribution.FromExcel(metaData, row),
                ParameterType.TruncatedNormal => TruncatedNormalDistribution.FromExcel(metaData, row),
                ParameterType.LogUniform => LogUniformDistribution.FromExcel(metaData, row),
                ParameterType.TruncatedLogNormal => TruncatedLogNormalDistribution.FromExcel(metaData, row),
                ParameterType.ContaminatedBuildingTypes => ContaminatedBuildingTypes.FromExcel(metaData, row),
                ParameterType.SumFraction => SumFraction.FromExcel(metaData, row),
                ParameterType.UniformXDependent => UniformXDependentDistribution.FromExcel(metaData, row),
                ParameterType.BimodalTruncatedNormal => BimodalTruncatedNormalDistribution.FromExcel(metaData, row),
                ParameterType.Null => throw new ApplicationException("Cannot parse parameter type Null"),
                _ => throw new ArgumentOutOfRangeException()
            };
        }

    }
}