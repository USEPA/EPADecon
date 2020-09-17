import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import Constant from '../distribution/Constant';
import ParameterMetaData from '../ParameterMetaData';

export default class EnumeratedFraction implements IParameter {
  type = ParameterType.enumeratedFraction;

  isSet = false;

  isEquivalent(other: IParameter): boolean {
    return other.type === this.type;
  }

  metaData: ParameterMetaData;

  parameters?: Record<string, Constant>;

  typeName?: string;

  constructor(metaData = new ParameterMetaData(), typeName?: string, parameters?: Record<string, Constant>) {
    this.metaData = metaData;
    this.typeName = typeName;
    this.parameters = parameters;
  }
}
