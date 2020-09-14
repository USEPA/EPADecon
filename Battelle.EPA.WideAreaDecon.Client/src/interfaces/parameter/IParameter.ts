import ParameterType from '@/enums/parameter/parameterType';
import ParameterMetaData from '@/implementations/parameter/ParameterMetaData';

export default interface IParameter {
  name: string;

  type: ParameterType;

  isSet: boolean;

  isEquivalent(other: IParameter): boolean;

  metaData: ParameterMetaData;
}
