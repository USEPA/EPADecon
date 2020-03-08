import ParameterType from '@/enums/parameter/parameterTypes';
import ParameterMetaData from '@/implementations/parameter/ParameterMetaData';

export default interface IParameter {
  name: string;

  type: ParameterType;

  isSet(): boolean;

  isEquivalent(other: IParameter): boolean;

  metaData: ParameterMetaData;
}
