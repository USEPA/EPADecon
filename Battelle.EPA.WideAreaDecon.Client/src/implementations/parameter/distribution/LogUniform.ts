import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { LogUniformDistribution } from 'battelle-common-typescript-statistics';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class LogUniform extends LogUniformDistribution implements IParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.logUniform;

  @JsonProperty('logMin')
  get logMin(): number | undefined {
    return this.Min;
  }

  set logMin(newValue: number | undefined) {
    if (newValue) {
      this.Min = newValue;
    }
  }

  @JsonProperty('logMax')
  get logMax(): number | undefined {
    return this.Max;
  }

  set logMax(newValue: number | undefined) {
    if (newValue) {
      this.Max = newValue;
    }
  }

  get min(): number | undefined {
    return this.logMin ? 10 ** this.logMin : undefined;
  }

  get max(): number | undefined {
    return this.logMax ? 10 ** this.logMax : undefined;
  }

  get mean(): number | undefined {
    return !!this.min && !!this.max ? (this.max + this.min) / 2.0 : undefined;
  }

  get mode(): number | undefined {
    return this.mean; // TODO: how to calculate
  }

  get stdDev(): number | undefined {
    return !!this.min && !!this.max ? (this.max - this.min) / 6.0 : undefined;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return this.min !== undefined && this.max !== undefined;
  }

  constructor(metaData = new ParameterMetaData(), logMin?: number, logMax?: number) {
    super(logMin ?? Infinity, logMax ?? Infinity);
    this.logMin = logMin;
    this.logMax = logMax;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as LogUniform);
  }

  compareValues(other?: LogUniform): boolean {
    return other ? this.type === other.type && this.logMin === other.logMin && this.logMax === other.logMax : false;
  }
}
