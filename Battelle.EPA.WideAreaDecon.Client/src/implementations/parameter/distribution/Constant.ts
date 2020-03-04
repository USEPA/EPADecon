import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from '../Parameter';

@Serializable('Parameter')
export default class Constant extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.constant;

  @JsonProperty()
  value: number | undefined;

  public isSet(): boolean {
    return this.value !== undefined;
  }

  constructor(name = 'unknown', value?: number) {
    super(name);
    this.value = value;
  }
}
