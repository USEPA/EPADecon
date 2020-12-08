import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { TruncatedNormalDistribution } from 'battelle-common-typescript-statistics';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class TruncatedNormal extends TruncatedNormalDistribution implements IParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.truncatedNormal;

  @JsonProperty('min')
  get min(): number | undefined {
    return this.Min;
  }

  set min(newValue: number | undefined) {
    if (newValue) {
      this.Min = newValue;
    }
  }

  @JsonProperty('max')
  get max(): number | undefined {
    return this.Max;
  }

  set max(newValue: number | undefined) {
    if (newValue) {
      this.Max = newValue;
    }
  }

  @JsonProperty('mean')
  get mean(): number | undefined {
    return this.Mean;
  }

  set mean(newValue: number | undefined) {
    if (newValue) {
      this.Mean = newValue;
    }
  }

  public get mode(): number | undefined {
    return this.mean;
  }

  @JsonProperty('stdDev')
  get stdDev(): number | undefined {
    return this.StdDev;
  }

  set stdDev(newValue: number | undefined) {
    if (newValue) {
      this.StdDev = newValue;
    }
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return this.min !== undefined && this.max !== undefined && this.mean !== undefined && this.stdDev !== undefined;
  }

  constructor(metaData = new ParameterMetaData(), min?: number, max?: number, mean?: number, stdDev?: number) {
    super(mean ?? Infinity, stdDev ?? Infinity, min ?? Infinity, max ?? Infinity);
    this.min = min;
    this.max = max;
    this.mean = mean;
    this.stdDev = stdDev;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as TruncatedNormal);
  }

  compareValues(other?: TruncatedNormal): boolean {
    return other
      ? this.type === other.type &&
          this.min === other.min &&
          this.max === other.max &&
          this.mean === other.mean &&
          this.stdDev === other.stdDev
      : false;
  }
}
