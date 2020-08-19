using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Scenario;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.List;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter
{
    public interface IParameter
    {
        string Name { get; set; }
        ParameterType Type { get; }
        ParameterMetaData MetaData { get; set; }

        static IParameter ReadExcel(Dictionary<string, string> format)
        {
            if (!Enum.TryParse(format["Type"], false, out ParameterType type))
            {
                throw new SerializationException($"Could not determine parameter type for {format["Type"]}");
            }

            switch (type)
            {
                case ParameterType.Constant:
                    return ConstantDistribution.ReadExcel(format);
                case ParameterType.ContaminatedBuildingType:
                    return ContaminatedBuildingType.ReadExcel(format);
                case ParameterType.Uniform:
                    return UniformDistribution.ReadExcel(format);
                case ParameterType.PERT:
                    return BetaPertDistribution.ReadExcel(format);
                case ParameterType.TruncatedNormal:
                    return TruncatedNormalDistribution.ReadExcel(format);
                case ParameterType.LogUniform:
                    return LogUniformDistribution.ReadExcel(format);
                case ParameterType.TruncatedLogNormal:
                    return TruncatedLogNormalDistribution.ReadExcel(format);
                case ParameterType.ContaminatedBuildingTypes:
                    return ContaminatedBuildingTypes.ReadExcel(format);
                case ParameterType.SumFraction:
                    return SumFraction.ReadExcel(format);
                case ParameterType.Null:
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
            throw new NotImplementedException();

        }
    }
}