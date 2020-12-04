import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import { WeibullDistribution } from 'battelle-common-typescript-statistics';
import * as Utility from '@/mixin/mathUtilityMixin';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class Weibull extends WeibullDistribution implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.weibull;

  @JsonProperty('k')
  get k(): number | undefined {
    return this.Shape;
  }

  set k(newVal: number | undefined) {
    if (newVal) {
      this.Shape = newVal;
    }
  }

  @JsonProperty('lambda')
  get lambda(): number | undefined {
    return this.Scale;
  }

  set lambda(newVal: number | undefined) {
    if (newVal) {
      this.Scale = newVal;
    }
  }

  get min(): number {
    return this.metaData.lowerLimit;
  }

  get max(): number {
    return this.metaData.lowerLimit;
  }

  static calculateMean(lambda: number, k: number): number {
    return lambda * Utility.gamma(1 + 1 / k);
  }

  get mean(): number | undefined {
    if (!(this.k !== undefined && this.lambda !== undefined)) {
      return undefined;
    }
    return this.lambda * Utility.gamma(1 + 1 / this.k);
  }

  get mode(): number | undefined {
    if (!(this.k !== undefined && this.lambda !== undefined)) {
      return undefined;
    }
    return this.k <= 1 ? 0 : this.lambda * ((this.k - 1) / this.k) ** (1 / this.k);
  }

  get stdDev(): number | undefined {
    return this.variance ? Math.sqrt(this.variance) : undefined;
  }

  get variance(): number | undefined {
    if (!(this.k !== undefined && this.lambda !== undefined)) {
      return undefined;
    }
    return this.lambda ** 2 * (Utility.gamma(1 + 2 / this.k) - Utility.gamma(1 + 1 / this.k) ** 2);
  }

  get isSet(): boolean {
    return this.k !== undefined && this.lambda !== undefined;
  }

  isEquivalent(other: Weibull): boolean {
    if (!(this.k !== undefined && this.lambda !== undefined && other.k !== undefined && other.lambda !== undefined)) {
      return false;
    }
    return this.k === other.k && this.lambda === other.lambda;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  constructor(metaData: ParameterMetaData = new ParameterMetaData(), k?: number, lambda?: number) {
    super(k ?? Infinity, lambda ?? Infinity);
    this.metaData = metaData;
    this.k = k;
    this.lambda = lambda;
  }
}
