import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';

export default class Constant implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.constant;

  @JsonProperty()
  value: number | undefined;

  public isSet(): boolean {
    return this.value !== undefined;
  }

  constructor(name = 'unknown', value?: number) {
    this.name = name;
    this.value = value;
  }
}
