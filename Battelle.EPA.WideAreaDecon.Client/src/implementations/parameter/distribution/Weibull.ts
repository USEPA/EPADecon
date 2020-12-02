import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import * as Utility from '@/mixin/mathUtilityMixin';
import { WeibullDistribution } from 'battelle-common-typescript-statistics';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class Weibull extends WeibullDistribution implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.weibull;

  @JsonProperty()
  k?: number;

  @JsonProperty()
  lambda?: number;

  get min(): number {
    return this.metaData.lowerLimit;
  }

  get max(): number {
    return this.metaData.lowerLimit;
  }

  // What is the difference between calculateMean and get mean()
  static calculateMean(lambda: number, k: number): number {
    return lambda * Utility.gamma(1 + 1 / k);
  }

  get mean(): number | undefined {
    if (!this.isSet) {
      return undefined;
    }
    return this.Mean; // this.lambda * Utility.gamma(1 + 1 / this.k);
  }

  get mode(): number | undefined {
    if (!this.isSet) {
      return undefined;
    }
    return this.Mode; // this.k <= 1 ? 0 : this.lambda * ((this.k - 1) / this.k) ** (1 / this.k);
  }

  get stdDev(): number | undefined {
    if (!this.isSet) {
      return undefined;
    }
    return this.StdDev; // this.variance ? Math.sqrt(this.variance) : undefined;
  }

  get variance(): number | undefined {
    /* if (!(this.k !== undefined && this.lambda !== undefined)) {
      return undefined;
    } */
    // this.lambda ** 2 * (Utility.gamma(1 + 2 / this.k) - Utility.gamma(1 + 1 / this.k) ** 2);
    return this.stdDev ? this.stdDev ** 2 : undefined;
  }

  get isSet(): boolean {
    return this.k !== undefined && this.lambda !== undefined && this.IsValid;
  }

  pdf(x?: number): number | undefined {
    return x ? this.PDF(x) : undefined;
  }

  cdf(x?: number): number | undefined {
    return x ? this.CDF(x) : undefined;
  }

  ppf(percentile?: number): number | undefined {
    return percentile ? this.PPF(percentile) : undefined;
  }

  isEquivalent(other: Weibull): boolean {
    if (!(this.k !== undefined && this.lambda !== undefined && other.k !== undefined && other.lambda !== undefined)) {
      return false;
    }
    return this.k === other.k && this.lambda === other.lambda;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  constructor(metaData: ParameterMetaData, k?: number, lambda?: number) {
    super(k ?? Infinity, lambda ?? Infinity);
    this.metaData = metaData;
    this.k = k;
    this.lambda = lambda;
  }
}
