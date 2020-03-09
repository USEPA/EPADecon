import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from './IParameter';

export default interface IParameterConverter {
  convertToNewType(old: IParameter, newType: ParameterType): IParameter;
}
