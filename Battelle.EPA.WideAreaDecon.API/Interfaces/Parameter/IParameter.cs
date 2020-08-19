using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter.Statistics;

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
                    break;
                case ParameterType.Uniform:
                    break;
                case ParameterType.PERT:
                    break;
                case ParameterType.TruncatedNormal:
                    break;
                case ParameterType.LogUniform:
                    break;
                case ParameterType.TruncatedLogNormal:
                    break;
                case ParameterType.ContaminatedBuildingTypes:
                    break;
                case ParameterType.SumFraction:
                    break;
                case ParameterType.Null:
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
            throw new NotImplementedException();

        }
    }
}