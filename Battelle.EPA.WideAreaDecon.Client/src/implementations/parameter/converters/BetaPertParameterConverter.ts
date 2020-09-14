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

export default class BetaPertParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: BetaPERT, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return new Constant(old.name, old.metaData, old.mode);
      case ParameterType.logUniform:
        return new LogUniform(
          old.name,
          old.metaData,
          old.min !== undefined ? Math.log10(old.min) : undefined,
          old.max !== undefined ? Math.log10(old.max) : undefined,
        );
      case ParameterType.pert:
        return old;
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(
          old.name,
          old.metaData,
          old.min !== undefined ? Math.log10(old.min) : undefined,
          old.max !== undefined ? Math.log10(old.max) : undefined,
          old.mean !== undefined ? Math.log10(old.mean) : undefined,
          old.stdDev !== undefined ? Math.log10(old.stdDev) : undefined,
        );
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(old.name, old.metaData, old.min, old.max, old.mean, old.stdDev);
      case ParameterType.uniform:
        return new Uniform(old.name, old.metaData, old.min, old.max);
      case ParameterType.null:
        return new NullParameter();
      default:
        return old;
    }
  }
}
