import { JsonProperty, Serializable } from 'typescript-json-serializer';
import Distribution, { TruncatedLogNormalDistribution } from 'battelle-common-typescript-statistics';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import IUnivariateParameter from '@/interfaces/parameter/IUnivariateParameter';
import { convertToLog10 } from '@/mixin/mathUtilityMixin';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class TruncatedLogNormal implements IUnivariateParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.truncatedLogNormal;

  @JsonProperty()
  min?: number;

  @JsonProperty()
  max?: number;

  @JsonProperty()
  mean?: number;

  @JsonProperty()
  stdDev?: number;

  get mode(): number | undefined {
    return this.mean !== undefined ? 10 ** this.mean : undefined; // TODO: how to calculate
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return this.min !== undefined && this.max !== undefined && this.mean !== undefined && this.stdDev !== undefined;
  }

  constructor(metaData = new ParameterMetaData(), min?: number, max?: number, mean?: number, stdDev?: number) {
    this.metaData = metaData;
    this.min = min;
    this.max = max;
    this.mean = mean;
    this.stdDev = stdDev;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as TruncatedLogNormal);
  }

  compareValues(other?: TruncatedLogNormal): boolean {
    return other
      ? this.type === other.type &&
          this.min === other.min &&
          this.max === other.max &&
          this.mean === other.mean &&
          this.stdDev === other.stdDev
      : false;
  }

  get distribution(): Distribution | undefined {
    const logMean = convertToLog10(this.mean);
    const logStdDev = convertToLog10(this.stdDev);

    if (this.min === undefined || this.max === undefined || logMean === undefined || logStdDev === undefined) {
      return undefined;
    }

    return new TruncatedLogNormalDistribution(logMean, logStdDev, this.min, this.max);
  }
}
