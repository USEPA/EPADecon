import ParameterType from '@/enums/parameter/parameterType';
// import IParameter from '@/interfaces/parameter/IParameter';
import BetaPERT from './BetaPERT';
import BimodalTruncatedNormal from './BimodalTruncatedNormal';
import Constant from './Constant';
import LogNormal from './LogNormal';
import LogUniform from './LogUniform';
import TruncatedLogNormal from './TruncatedLogNormal';
import TruncatedNormal from './TruncatedNormal';
import Uniform from './Uniform';
import UniformXDependent from './UniformXDependent';
import UnivariateDistributionType from './UnivariateDistributionType';
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
): BetaPERT | Weibull | any {
  switch (type) {
    // case ParameterType.constant: {
    //   // const dist = new Constant(undefined, value);
    //   return dist;
    // }
    case ParameterType.pert: {
      const dist = new BetaPERT(undefined, min, max, mode);
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
    default:
      return undefined;
  }
}
