import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from '../Parameter';

@Serializable('Parameter')
export default class Uniform extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.uniform;

  @JsonProperty()
  min: number | undefined;

  @JsonProperty()
  max: number | undefined;

  public isSet(): boolean {
    return this.min !== undefined && this.max !== undefined;
  }

  constructor(name = 'unknown', min?: number, max?: number) {
    super(name);
    this.min = min;
    this.max = max;
  }
}
