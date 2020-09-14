import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import LogUniform from '../distribution/LogUniform';
import Constant from '../distribution/Constant';
import BetaPERT from '../distribution/BetaPERT';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import TruncatedNormal from '../distribution/TruncatedNormal';
import Uniform from '../distribution/Uniform';
import NullParameter from '../NullParameter';

export default class LogUniformParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: LogUniform, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return new Constant(old.name, old.metaData, old.mean);
      case ParameterType.logUniform:
        return old;
      case ParameterType.pert:
        return new BetaPERT(old.name, old.metaData, old.min, old.max, old.mean);
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(
          old.name,
          old.metaData,
          old.logMin,
          old.logMax,
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
