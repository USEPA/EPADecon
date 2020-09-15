import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import BimodalTruncatedNormal from '../distribution/BimodalTruncatedNormal';
import Constant from '../distribution/Constant';
import LogNormal from '../distribution/LogNormal';
import LogUniform from '../distribution/LogUniform';
import NullParameter from '../NullParameter';
import BetaPERT from '../distribution/BetaPERT';
import TruncatedNormal from '../distribution/TruncatedNormal';
import Uniform from '../distribution/Uniform';
import UniformXDependent from '../distribution/UniformXDependent';
import Weibull from '../distribution/Weibull';

export default class TruncatedLogNormalConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: IParameter, newType: ParameterType): IParameter {
    if (old.type !== ParameterType.truncatedLogNormal) {
      throw new Error('Truncated Log Normal converter only works with Truncated Log Normal parameter');
    }

    const oldParam = <TruncatedLogNormal>old;

    function logConverter(value?: number): number | undefined {
      return value ? Math.log(value) : undefined;
    }

    switch (newType) {
      case ParameterType.bimodalTruncatedNormal:
        return new BimodalTruncatedNormal(
          old.metaData,
          oldParam.mean,
          oldParam.stdDev,
          oldParam.mean,
          oldParam.stdDev,
          oldParam.min,
          oldParam.max,
        );
      case ParameterType.constant:
        return new Constant(old.metaData, oldParam.mean);
      case ParameterType.efficacy:
        throw new Error('Method not implemented'); // TODO: implement method
      case ParameterType.logNormal:
        return new LogNormal(old.metaData, oldParam.mean, oldParam.stdDev);
      case ParameterType.logUniform:
        return new LogUniform(old.metaData, logConverter(oldParam.min), logConverter(oldParam.max));
      case ParameterType.null:
        return new NullParameter();
      case ParameterType.pert:
        return new BetaPERT(old.metaData, oldParam.min, oldParam.max, oldParam.mean);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(
          old.metaData,
          logConverter(oldParam.min),
          logConverter(oldParam.max),
          logConverter(oldParam.mean),
          logConverter(oldParam.stdDev),
        );
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.metaData, oldParam.min, oldParam.max, oldParam.mean, oldParam.stdDev);
      case ParameterType.uniform:
        return new Uniform(old.metaData, oldParam.min, oldParam.max);
      case ParameterType.uniformXDependent:
        return new UniformXDependent(old.metaData);
      case ParameterType.weibull:
        return new Weibull(old.metaData, oldParam.mean, oldParam.stdDev); // TODO: how to convert?
      default:
        throw new Error('Method not implemented');
    }
  }
}
