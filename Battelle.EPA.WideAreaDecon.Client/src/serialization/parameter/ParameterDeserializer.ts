import ContaminatedBuildingType from '@/implementations/parameter/scenario/ContaminatedBuildingType';
import ContaminatedBuildingTypes from '@/implementations/parameter/scenario/ContaminatedBuildingTypes';
import SumFraction from '@/implementations/parameter/list/sumFraction';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';
import DistributionParameterDeserializer from './DistributionParameterDeserializer';

export default {
  predicate: (value: unknown) => {
    const parameter = value as IParameter;
    if (parameter === undefined || parameter === null) {
      return undefined;
    }
    switch (parameter.type) {
      case ParameterType.constant:
      case ParameterType.uniform:
      case ParameterType.pert:
      case ParameterType.truncatedNormal:
      case ParameterType.logUniform:
      case ParameterType.truncatedLogNormal: {
        return DistributionParameterDeserializer.predicate(value);
      }
      case ParameterType.contaminatedBuildingType: {
        return ContaminatedBuildingType;
      }
      case ParameterType.contaminatedBuildingTypes: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ContaminatedBuildingTypes;
      }
      case ParameterType.sumFraction: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return SumFraction;
      }
      default: {
        // console.error(`Did not recognize type ${parameter.type}`);
        return undefined;
      }
    }
  },
};
