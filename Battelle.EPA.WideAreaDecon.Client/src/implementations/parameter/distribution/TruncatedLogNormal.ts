import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class TruncatedLogNormal implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.constant;

  @JsonProperty()
  logMin: number | undefined;

  get min(): number | undefined {
    return this.logMin !== undefined ? this.logMin ** 10 : undefined;
  }

  @JsonProperty()
  logMax: number | undefined;

  get max(): number | undefined {
    return this.logMax !== undefined ? this.logMax ** 10 : undefined;
  }

  @JsonProperty()
  logMean: number | undefined;

  get mean(): number | undefined {
    return this.logMean !== undefined ? this.logMean ** 10 : undefined;
  }

  @JsonProperty()
  logStdDev: number | undefined;

  get stdDev(): number | undefined {
    return this.logStdDev !== undefined ? this.logStdDev ** 10 : undefined;
  }

  @JsonProperty()
  metaData: ParameterMetaData = new ParameterMetaData();

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

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as TruncatedLogNormal);
  }

  compareValues(other?: TruncatedLogNormal): boolean {
    return other
      ? this.type === other.type &&
          this.logMin === other.logMin &&
          this.logMax === other.logMax &&
          this.logMean === other.logMean &&
          this.logStdDev === other.logStdDev
      : false;
  }
}
