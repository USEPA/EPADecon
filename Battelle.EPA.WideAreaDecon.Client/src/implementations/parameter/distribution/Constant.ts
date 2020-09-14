import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class Constant implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  readonly type: ParameterType = ParameterType.constant;

  @JsonProperty()
  value: number | undefined;

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return !!this.value;
  }

  constructor(name = 'unknown', metaData = new ParameterMetaData(), value?: number) {
    this.name = name;
    this.value = value;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as Constant);
  }

  compareValues(other?: Constant): boolean {
    return other ? this.type === other.type && this.value === other.value : false;
  }
}
