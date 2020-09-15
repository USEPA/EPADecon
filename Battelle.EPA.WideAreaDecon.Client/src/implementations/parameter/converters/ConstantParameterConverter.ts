import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import Constant from '../distribution/Constant';
import NullParameter from '../NullParameter';
import LogUniform from '../distribution/LogUniform';
import LogNormal from '../distribution/LogNormal';
import BetaPERT from '../distribution/BetaPERT';
import TruncatedLogNormal from '../distribution/TruncatedLogNormal';
import TruncatedNormal from '../distribution/TruncatedNormal';
import Uniform from '../distribution/Uniform';
import Weibull from '../distribution/Weibull';

export default class ConstantParameterConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: Constant, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.constant:
        return old;
      case ParameterType.uniform:
        return new Uniform(old.metaData, old.value, old.value);
      case ParameterType.uniformXDependent:
        return old;
      case ParameterType.pert:
        return new BetaPERT(old.metaData, old.value, old.value, old.value);
      case ParameterType.truncatedNormal:
        return new TruncatedNormal(
          old.metaData,
          old.value,
          old.value,
          old.value,
          old.value ? old.value / 10.0 : undefined,
        );
      case ParameterType.bimodalTruncatedNormal:
        return old;
      case ParameterType.logUniform:
        return new LogUniform(
          old.metaData,
          old.value ? Math.log10(old.value) : undefined,
          old.value ? Math.log10(old.value) : undefined,
        );
      case ParameterType.truncatedLogNormal:
        return new TruncatedLogNormal(
          old.metaData,
          old.value ? Math.log10(old.value) : undefined,
          old.value ? Math.log10(old.value) : undefined,
          old.value,
          old.value ? old.value / 10.0 : undefined,
        );
      case ParameterType.logNormal:
        return new LogNormal(old.metaData, old.value, old.value);
      case ParameterType.efficacy:
        return old;
      case ParameterType.weibull:
        return new Weibull(old.metaData, old.value, old.value); // TODO: how to convert?
      case ParameterType.null:
        return new NullParameter();
      default:
        return old;
    }
  }
}
