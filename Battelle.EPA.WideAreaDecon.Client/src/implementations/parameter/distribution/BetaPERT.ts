import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { PertDistribution } from 'battelle-common-typescript-statistics';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';
import IUnivariateParameter from './IUnivariateParameter';

@Serializable()
export default class BetaPERT extends PertDistribution implements IParameter, IUnivariateParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.pert;

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

  get mean(): number | undefined {
    if (!(this.min !== undefined && this.max !== undefined && this.mode !== undefined)) {
      return undefined;
    }
    return (this.min + 4 * this.mode + this.max) / 6.0;
  }

  @JsonProperty('mode')
  get mode(): number | undefined {
    return this.Mode;
  }

  set mode(newValue: number | undefined) {
    if (newValue) {
      this.Mode = newValue;
    }
  }

  get stdDev(): number | undefined {
    if (!(this.min !== undefined && this.max !== undefined && this.mode !== undefined)) {
      return undefined;
    }
    return (this.max - this.min) / 6.0;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return this.min !== undefined && this.max !== undefined && this.mode !== undefined;
  }

  constructor(metaData = new ParameterMetaData(), min?: number, max?: number, mode?: number) {
    super(mode ?? Infinity, min ?? Infinity, max ?? Infinity);
    this.min = min;
    this.max = max;
    this.mode = mode;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as BetaPERT);
  }

  compareValues(other?: BetaPERT): boolean {
    return other
      ? this.type === other.type && this.min === other.min && this.max === other.max && this.mode === other.mode
      : false;
  }
}
