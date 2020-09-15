import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import Weibull from '../distribution/Weibull';

export default class WeibullConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: IParameter, newType: ParameterType): IParameter {
    if (old.type !== ParameterType.weibull) {
      throw new Error('Weibull converter only works with Weibull parameter');
    }

    const oldParam = <Weibull>old;


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
