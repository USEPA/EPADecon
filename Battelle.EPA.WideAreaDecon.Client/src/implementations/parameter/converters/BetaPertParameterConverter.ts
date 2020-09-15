import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import BetaPERT from '../distribution/BetaPERT';
import Constant from '../distribution/Constant';
import LogUniform from '../distribution/LogUniform';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import TruncatedNormal from '../distribution/TruncatedNormal';
import Uniform from '../distribution/Uniform';
import NullParameter from '../NullParameter';
import LogNormal from '../distribution/LogNormal';
import Weibull from '../distribution/Weibull';

export default class BetaPertParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: BetaPERT, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return new Constant(old.metaData, old.mode);
      case ParameterType.uniform:
        return new Uniform(old.metaData, old.min, old.max);
      case ParameterType.uniformXDependent:
        return old;
      case ParameterType.pert:
        return old;
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.metaData, old.min, old.max, old.mean, old.stdDev);
      case ParameterType.bimodalTruncatedNormal:
        return old;
      case ParameterType.logUniform:
        return new LogUniform(
          old.metaData,
          old.min ? Math.log10(old.min) : undefined,
          old.max ? Math.log10(old.max) : undefined,
        );
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(
          old.metaData,
          old.min ? Math.log10(old.min) : undefined,
          old.max ? Math.log10(old.max) : undefined,
          old.mean,
          old.stdDev,
        );
      case ParameterType.logNormal:
        return new LogNormal(old.metaData, old.mean, old.stdDev);
      case ParameterType.efficacy:
        return old;
      case ParameterType.weibull:
        return new Weibull(old.metaData, old.min, old.mode); // TODO: how to convert?
      case ParameterType.null:
        return new NullParameter();
      default:
        return old;
    }
  }
}
