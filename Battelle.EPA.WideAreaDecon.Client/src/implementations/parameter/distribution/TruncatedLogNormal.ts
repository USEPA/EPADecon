import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';

export default class TruncatedLogNormal implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.constant;

  @JsonProperty()
  logMin: number | undefined;

  @JsonProperty()
  logMax: number | undefined;

  @JsonProperty()
  logMean: number | undefined;

  @JsonProperty()
  logStdDev: number | undefined;

  public isSet(): boolean {
    return (
      this.logMin !== undefined &&
      this.logMax !== undefined &&
      this.logMean !== undefined &&
      this.logStdDev !== undefined
    );
  }

  constructor(name = 'unknown', logMin?: number, logMax?: number, logMean?: number, logStdDev?: number) {
    this.name = name;
    this.logMin = logMin;
    this.logMax = logMax;
    this.logMean = logMean;
    this.logStdDev = logStdDev;
  }
}
