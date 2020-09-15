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

export default class DefaultConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: IParameter, newType: ParameterType): IParameter {
    switch (newType) {
      case ParameterType.bimodalTruncatedNormal:
      case ParameterType.constant:
      case ParameterType.efficacy:
      case ParameterType.logNormal:
      case ParameterType.logUniform:
      case ParameterType.null:
      case ParameterType.pert:
      case ParameterType.truncatedLogNormal:
      case ParameterType.truncatedNormal:
      case ParameterType.uniform:
      case ParameterType.uniformXDependent:
      case ParameterType.weibull:
      default:
        throw new Error('Method not implemented');
    }
  }
}
