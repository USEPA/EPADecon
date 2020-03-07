import ParameterType from '@/enums/parameter/parameterTypes';

export default interface IParameter {
  name: string;

  type: ParameterType;

  isSet(): boolean;

  isEquivalent(other: IParameter): boolean;
}
