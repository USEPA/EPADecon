import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import DistributionParameterDeserializer from './DistributionParameterDeserializer';

export default {
  predicate: (value: unknown): unknown => {
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
      case ParameterType.bimodalTruncatedNormal:
      case ParameterType.efficacy:
      case ParameterType.logNormal:
      case ParameterType.weibull:
      default: {
        // console.error(`Did not recognize type ${parameter.type}`);
        return undefined;
      }
    }
  },
};
