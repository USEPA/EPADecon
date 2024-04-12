using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Helpers;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using Stats = Battelle.RiskAssessment.Common.Statistics;

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

        public Stats.IDistribution CreateDistribution()
        {
            if (XValues.Length > 0 && YMinimumValues.Length > 0 && YMaximumValues.Length > 0)
            {
                if (XValues.Length != YMinimumValues.Length || YMinimumValues.Length != YMaximumValues.Length)
                {
                    throw new ArgumentException("Uniform X Dependent arrays are different sizes");
                }

                // select random index (x value)
                var index = Convert.ToInt32(new Stats.UniformDistribution(0, XValues.Length - 1).Draw());

                // create uniform distribution from max and mins at x value
                var min = YMinimumValues[index];
                var max = YMaximumValues[index];

                // if min and max are the same point, return constant distribution instead
                if (min.Equals(max))
                {
                    return new Stats.ConstantDistribution(min);
                }

                return new Stats.UniformDistribution(min, max);
            }
            throw new ArgumentNullException();
        }

        public string GetTextValue()
        {
            throw new NotImplementedException();
        }

        public FrequencyValueType GetFrequencyValue()
        {
            throw new NotImplementedException();
        }
    }
}