import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import Constant from '../distribution/Constant';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class EnumeratedFraction implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.enumeratedFraction;

  isSet = false;

  isEquivalent(other: IParameter): boolean {
    return other.type === this.type;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty()
  values: Record<string, Constant>;

  @JsonProperty()
  typeName: string;

  constructor(metaData = new ParameterMetaData(), typeName?: string, values?: Record<string, Constant>) {
    this.metaData = metaData;
    this.typeName = typeName ?? 'unknown';
    this.values = values ?? {};
  }
}
