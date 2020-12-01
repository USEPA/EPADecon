import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { isEqual } from 'lodash';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class EnumeratedParameter implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.enumeratedParameter;

  get isSet(): boolean {
    if (this.type === undefined) {
      return false;
    }
    if (this.values[this.type] === undefined) {
      return false;
    }
    return !this.values[this.type].isSet;
  }

  isEquivalent(other: IParameter): boolean {
    return isEqual(this, other);
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty()
  values: Record<string, IParameter>;

  @JsonProperty()
  typeName?: string;

  constructor(metaData = new ParameterMetaData(), typeName?: string, values?: Record<string, IParameter>) {
    this.metaData = metaData;
    this.typeName = typeName;
    this.values = values ?? {};
  }
}
