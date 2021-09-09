import { JsonProperty, Serializable } from 'typescript-json-serializer';
import Distribution, { LogUniformDistribution } from 'battelle-common-typescript-statistics';
import ParameterType from '@/enums/parameter/parameterType';
import IUnivariateParameter from '@/interfaces/parameter/IUnivariateParameter';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class LogUniform implements IUnivariateParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.logUniform;

  @JsonProperty()
  min?: number;

  @JsonProperty()
  max?: number;

  get mean(): number | undefined {
    return !!this.min && !!this.max ? (10 ** this.max + 10 ** this.min) / 2.0 : undefined;
  }

  get mode(): number | undefined {
    return this.mean; // TODO: how to calculate
  }

  get stdDev(): number | undefined {
    return !!this.min && !!this.max ? (10 ** this.max - 10 ** this.min) / 6.0 : undefined;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return this.min !== undefined && this.max !== undefined && this.min < this.max;
  }

  constructor(metaData = new ParameterMetaData(), min?: number, max?: number) {
    this.metaData = metaData;
    this.min = min;
    this.max = max;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as LogUniform);
  }

  get distribution(): Distribution | undefined {
    if (this.min === undefined || this.max === undefined) {
      return undefined;
    }
    return new LogUniformDistribution(this.min, this.max);
  }

  compareValues(other?: LogUniform): boolean {
    return other ? this.type === other.type && this.min === other.min && this.max === other.max : false;
  }
}
