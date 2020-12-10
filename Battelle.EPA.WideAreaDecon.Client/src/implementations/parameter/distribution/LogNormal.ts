import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { LogNormalDistribution } from 'battelle-common-typescript-statistics';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';
import IUnivariateParameter from './IUnivariateParameter';

@Serializable()
export default class LogNormal extends LogNormalDistribution implements IParameter, IUnivariateParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.logNormal;

  public get min(): number {
    return this.metaData.lowerLimit;
  }

  public get max(): number {
    return this.metaData.upperLimit;
  }

  @JsonProperty('mean')
  get mean(): number | undefined {
    return this.LogMean;
  }

  set mean(newValue: number | undefined) {
    if (newValue) {
      this.LogMean = newValue;
    }
  }

  get mode(): number | undefined {
    return this.mean; // TODO: how to calculate
  }

  @JsonProperty('stdDev')
  get stdDev(): number | undefined {
    return this.LogStdDev;
  }

  set stdDev(newValue: number | undefined) {
    if (newValue) {
      this.LogStdDev = newValue;
    }
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return this.mean !== undefined && this.stdDev !== undefined;
  }

  constructor(metaData = new ParameterMetaData(), mean?: number, stdDev?: number) {
    super(mean ?? Infinity, stdDev ?? Infinity);
    this.mean = mean;
    this.stdDev = stdDev;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as LogNormal);
  }

  compareValues(other?: LogNormal): boolean {
    return other ? this.type === other.type && this.mean === other.mean && this.stdDev === other.stdDev : false;
  }
}
