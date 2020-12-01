import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { isEqual } from 'lodash';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class EnumeratedParameter implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.enumeratedParameter;

  isSet = false;

  isEquivalent(other: IParameter): boolean {
    return isEqual(this, other);
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty()
  values: Record<string, IParameter>;

  @JsonProperty()
  typeName: string;

  constructor(metaData = new ParameterMetaData(), typeName?: string, values?: Record<string, IParameter>) {
    this.metaData = metaData;
    this.typeName = typeName ?? 'unknown';
    this.values = values ?? {};
  }
}
