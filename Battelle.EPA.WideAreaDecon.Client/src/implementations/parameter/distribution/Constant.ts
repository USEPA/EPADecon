import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
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
  metaData: ParameterMetaData = new ParameterMetaData();

  public isSet(): boolean {
    return this.value !== undefined;
  }

  constructor(name = 'unknown', value?: number) {
    this.name = name;
    this.value = value;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as Constant);
  }

  compareValues(other?: Constant): boolean {
    return other ? this.type === other.type && this.value === other.value : false;
  }
}
