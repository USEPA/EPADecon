import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';

export default class LogUniform implements IParameter {
  @JsonProperty()
  name: string;

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
    this.name = name;
    this.logMin = logMin;
    this.logMax = logMax;
  }
}
