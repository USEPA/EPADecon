import { deserialize } from 'typescript-json-serializer';
import Parameter from '@/implementations/parameter/Parameter';
import Constant from '@/implementations/parameter/distribution/Constant';
import Uniform from '@/implementations/parameter/distribution/Uniform';
import BetaPERT from '@/implementations/parameter/distribution/BetaPERT';
import TruncatedNormal from '@/implementations/parameter/distribution/TruncatedNormal';
import LogUniform from '@/implementations/parameter/distribution/LogUniform';
import TruncatedLogNormal from '@/implementations/parameter/distribution/TruncatedLogNormal';
import ParameterType from '@/enums/parameter/parameterTypes';

export default {
  predicate: (value: unknown) => {
    const parameter = value as Parameter;
    if (parameter === undefined || parameter === null) {
      return undefined;
    }
    switch (parameter.type) {
      case ParameterType.constant: {
        return Constant;
      }
      case ParameterType.uniform: {
        return Uniform;
      }
      case ParameterType.pert: {
        return BetaPERT;
      }
      case ParameterType.truncatedNormal: {
        return TruncatedNormal;
      }
      case ParameterType.logUniform: {
        return LogUniform;
      }
      case ParameterType.truncatedLogNormal: {
        return TruncatedLogNormal;
      }
      default: {
        // console.error(`Did not recognize type ${parameter.type}`);
        return undefined;
      }
    }
  },
};
