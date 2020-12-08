import ParameterType from '@/enums/parameter/parameterType';
import BetaPERT from './BetaPERT';
import BimodalTruncatedNormal from './BimodalTruncatedNormal';
import Constant from './Constant';
import LogNormal from './LogNormal';
import LogUniform from './LogUniform';
import TruncatedLogNormal from './TruncatedLogNormal';
import TruncatedNormal from './TruncatedNormal';
import Uniform from './Uniform';
import UniformXDependent from './UniformXDependent';
import Weibull from './Weibull';

export default function getDistribution(
  type: ParameterType,
  {
    min = undefined,
    max = undefined,
    mode = undefined,
    value = undefined,
    mean = undefined,
    stdDev = undefined,
    lambda = undefined,
    k = undefined,
    metaData: { lowerLimit = undefined, upperLimit = undefined },
  },
): BetaPERT | Constant | LogNormal | LogUniform | TruncatedLogNormal | TruncatedNormal | Uniform | Weibull {
  switch (type) {
    // case ParameterType.bimodalTruncatedNormal: {
    //     const dist = new BimodalTruncatedNormal(undefined, )
    // }
    case ParameterType.constant: {
      const dist = new Constant(undefined, value);
      return dist;
    }
    case ParameterType.pert: {
      const dist = new BetaPERT(undefined, min, max, mode);
      return dist;
    }
    case ParameterType.logNormal: {
      const dist = new LogNormal(undefined, mean, stdDev);
      return dist;
    }
    case ParameterType.logUniform: {
      const dist = new LogUniform(undefined, min, max);
      return dist;
    }
    case ParameterType.truncatedLogNormal: {
      const dist = new TruncatedLogNormal(undefined, min, max, mean, stdDev);
      return dist;
    }
    case ParameterType.truncatedNormal: {
      const dist = new TruncatedNormal(undefined, min, max, mean, stdDev);
      return dist;
    }
    case ParameterType.uniform: {
      const dist = new Uniform(undefined, min, max);
      return dist;
    }
    case ParameterType.weibull: {
      const dist = new Weibull(undefined, k, lambda);
      return dist;
    }
    default: {
      const dist = new Constant();
      return dist;
    }
  }
}
