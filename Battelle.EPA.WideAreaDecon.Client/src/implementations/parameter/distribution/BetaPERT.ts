import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from '../Parameter';

@Serializable('Parameter')
export default class BetaPERT extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.pert;

  @JsonProperty()
  min: number | undefined;

  @JsonProperty()
  max: number | undefined;

  @JsonProperty()
  mode: number | undefined;

  public isSet(): boolean {
    return this.min !== undefined && this.max !== undefined && this.mode !== undefined;
  }

  constructor(name = 'unknown', min?: number, max?: number, mode?: number) {
    super(name);
    this.min = min;
    this.max = max;
    this.mode = mode;
  }
}
