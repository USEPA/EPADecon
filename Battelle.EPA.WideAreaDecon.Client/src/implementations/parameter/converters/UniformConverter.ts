import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterType';
import Uniform from '../distribution/Uniform';

export default class UniformConverter implements IParameterConverter {
  // eslint-disable-next-line class-methods-use-this
  convertToNewType(old: IParameter, newType: ParameterType): IParameter {
    if (old.type !== ParameterType.uniform) {
      throw new Error('Uniform converter only works with Uniform parameter');
    }

    const oldParam = <Uniform>old;


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
