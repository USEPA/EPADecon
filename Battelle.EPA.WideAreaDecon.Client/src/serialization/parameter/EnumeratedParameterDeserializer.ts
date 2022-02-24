import ParameterType from '@/enums/parameter/parameterType';
import BetaPERT from '@/implementations/parameter/distribution/BetaPERT';
import BimodalTruncatedNormal from '@/implementations/parameter/distribution/BimodalTruncatedNormal';
import Constant from '@/implementations/parameter/distribution/Constant';
import LogNormal from '@/implementations/parameter/distribution/LogNormal';
import LogUniform from '@/implementations/parameter/distribution/LogUniform';
import TruncatedLogNormal from '@/implementations/parameter/distribution/TruncatedLogNormal';
import TruncatedNormal from '@/implementations/parameter/distribution/TruncatedNormal';
import Uniform from '@/implementations/parameter/distribution/Uniform';
import UniformXDependent from '@/implementations/parameter/distribution/UniformXDependent';
import Weibull from '@/implementations/parameter/distribution/Weibull';
import TextValue from '@/implementations/parameter/distribution/TextValue';
import EnumeratedFraction from '@/implementations/parameter/list/enumeratedFraction';
import IParameter from '@/interfaces/parameter/IParameter';
import ScaledBeta from '@/implementations/parameter/distribution/ScaledBeta';

export default {
  predicate: (value: unknown): unknown => {
    const parameter = value as IParameter;
    if (parameter === undefined || parameter === null) {
      return undefined;
    }
    switch (parameter.type) {
      case ParameterType.constant:
        return Constant;
      case ParameterType.uniform:
        return Uniform;
      case ParameterType.uniformXDependent:
        return UniformXDependent;
      case ParameterType.pert:
        return BetaPERT;
      case ParameterType.scaledBeta:
        return ScaledBeta;
      case ParameterType.truncatedNormal:
        return TruncatedNormal;
      case ParameterType.bimodalTruncatedNormal:
        return BimodalTruncatedNormal;
      case ParameterType.logUniform:
        return LogUniform;
      case ParameterType.truncatedLogNormal:
        return TruncatedLogNormal;
      case ParameterType.logNormal:
        return LogNormal;
      case ParameterType.weibull:
        return Weibull;
      case ParameterType.textValue:
        return TextValue;
      case ParameterType.enumeratedFraction:
        return EnumeratedFraction;
      case ParameterType.enumeratedParameter:
      default:
        return undefined;
    }
  },
};
