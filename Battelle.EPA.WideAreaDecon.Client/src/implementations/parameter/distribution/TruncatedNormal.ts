import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from '../Parameter';

@Serializable('Parameter')
export default class TruncatedNormal extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.constant;

  @JsonProperty()
  min: number | undefined;

  @JsonProperty()
  max: number | undefined;

  @JsonProperty()
  mean: number | undefined;

  @JsonProperty()
  stdDev: number | undefined;

  public isSet(): boolean {
    return this.min !== undefined && this.max !== undefined && this.mean !== undefined && this.stdDev !== undefined;
  }

  constructor(name = 'unknown', min?: number, max?: number, mean?: number, stdDev?: number) {
    super(name);
    this.min = min;
    this.max = max;
    this.mean = mean;
    this.stdDev = stdDev;
  }
}
