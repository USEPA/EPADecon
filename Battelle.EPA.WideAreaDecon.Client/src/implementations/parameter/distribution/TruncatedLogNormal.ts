import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class TruncatedLogNormal implements IParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.truncatedLogNormal;

  @JsonProperty()
  logMin: number | undefined;

  get min(): number | undefined {
    return this.logMin !== undefined ? 10 ** this.logMin : undefined;
  }

  @JsonProperty()
  logMax: number | undefined;

  get max(): number | undefined {
    return this.logMax !== undefined ? 10 ** this.logMax : undefined;
  }

  @JsonProperty()
  logMean: number | undefined;

  get mean(): number | undefined {
    return this.logMean !== undefined ? 10 ** this.logMean : undefined;
  }

  @JsonProperty()
  logStdDev: number | undefined;

  get stdDev(): number | undefined {
    return this.logStdDev !== undefined ? 10 ** this.logStdDev : undefined;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return (
      this.logMin !== undefined &&
      this.logMax !== undefined &&
      this.logMean !== undefined &&
      this.logStdDev !== undefined
    );
  }

  constructor(
    metaData = new ParameterMetaData(),
    logMin?: number,
    logMax?: number,
    logMean?: number,
    logStdDev?: number,
  ) {
    this.logMin = logMin;
    this.logMax = logMax;
    this.logMean = logMean;
    this.logStdDev = logStdDev;
    this.metaData = metaData;
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
