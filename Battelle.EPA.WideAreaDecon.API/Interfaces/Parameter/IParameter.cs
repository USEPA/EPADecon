using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Scenario;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.List;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter
{
    public interface IParameter
    {
        private static int TypeLocation => 5;

        string Name { get; set; }
        ParameterType Type { get; }
        ParameterMetaData MetaData { get; set; }

        static IParameter FromExcel(IRow format)
        {
            if (!Enum.TryParse(format.GetCell(TypeLocation).ToString(), false, out ParameterType type))
            {
                throw new SerializationException($"Could not determine parameter type for {format.GetCell(TypeLocation)}");
            }

            switch (type)
            {
                case ParameterType.Constant:
                    return ConstantDistribution.FromExcel(format);
                case ParameterType.ContaminatedBuildingType:
                    return ContaminatedBuildingType.FromExcel(format);
                case ParameterType.Uniform:
                    return UniformDistribution.FromExcel(format);
                case ParameterType.PERT:
                    return BetaPertDistribution.FromExcel(format);
                case ParameterType.TruncatedNormal:
                    return TruncatedNormalDistribution.FromExcel(format);
                case ParameterType.LogUniform:
                    return LogUniformDistribution.FromExcel(format);
                case ParameterType.TruncatedLogNormal:
                    return TruncatedLogNormalDistribution.FromExcel(format);
                case ParameterType.ContaminatedBuildingTypes:
                    return ContaminatedBuildingTypes.FromExcel(format);
                case ParameterType.SumFraction:
                    return SumFraction.FromExcel(format);
                case ParameterType.Null:
                    throw new ApplicationException("Cannot parse parameter type Null");
                default:
                    throw new ArgumentOutOfRangeException();
            }

        }
    }
}