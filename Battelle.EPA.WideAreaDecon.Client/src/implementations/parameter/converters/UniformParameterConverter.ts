import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import Uniform from '../distribution/Uniform';
import Constant from '../distribution/Constant';
import LogUniform from '../distribution/LogUniform';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import TruncatedNormal from '../distribution/TruncatedNormal';
import NullParameter from '../NullParameter';
import BetaPERT from '../distribution/BetaPERT';

export default class UniformParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: Uniform, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return new Constant(old.name, old.metaData, old.mean);
      case ParameterType.logUniform:
        return new LogUniform(
          old.name,
          old.metaData,
          old.min !== undefined ? Math.log10(old.min) : undefined,
          old.max !== undefined ? Math.log10(old.max) : undefined,
        );
      case ParameterType.pert:
        return new BetaPERT(old.name, old.metaData, old.min, old.max, old.mean);
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
        return old;
      case ParameterType.null:
        return new NullParameter();
      default:
        return old;
    }
  }
}
