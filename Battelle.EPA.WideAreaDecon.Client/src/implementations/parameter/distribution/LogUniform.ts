import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from '../Parameter';

@Serializable('Parameter')
export default class LogUniform extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.constant;

  @JsonProperty()
  logMin: number | undefined;

  @JsonProperty()
  logMax: number | undefined;

  public isSet(): boolean {
    return this.logMin !== undefined && this.logMax !== undefined;
  }

  constructor(name = 'unknown', logMin?: number, logMax?: number) {
    super(name);
    this.logMin = logMin;
    this.logMax = logMax;
  }
}
