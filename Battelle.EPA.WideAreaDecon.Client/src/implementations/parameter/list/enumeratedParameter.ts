import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class EnumeratedParameter implements IParameter {
  type = ParameterType.enumeratedParameter;

  isSet = false;

  isEquivalent(other: IParameter): boolean {
    return other.type === this.type;
  }

  metaData: ParameterMetaData;

  parameters?: Record<string, IParameter>;

  typeName?: string;

  constructor(metaData = new ParameterMetaData(), typeName?: string, parameters?: Record<string, IParameter>) {
    this.metaData = metaData;
    this.typeName = typeName;
    this.parameters = parameters;
  }
}
