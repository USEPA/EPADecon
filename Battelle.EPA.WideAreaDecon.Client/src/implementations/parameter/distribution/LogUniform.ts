import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class LogUniform implements IParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.logUniform;

  @JsonProperty()
  logMin?: number;

  @JsonProperty()
  logMax?: number;

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
    return !!this.min && !!this.max;
  }

  constructor(metaData = new ParameterMetaData(), logMin?: number, logMax?: number) {
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
