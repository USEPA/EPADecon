import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class TruncatedNormal implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.constant;

  @JsonProperty()
  min: number | undefined;

  @JsonProperty()
  max: number | undefined;

  @JsonProperty()
  mean: number | undefined;

  @JsonProperty()
  stdDev: number | undefined;

  @JsonProperty()
  metaData: ParameterMetaData = new ParameterMetaData();

  public isSet(): boolean {
    return this.min !== undefined && this.max !== undefined && this.mean !== undefined && this.stdDev !== undefined;
  }

  constructor(name = 'unknown', min?: number, max?: number, mean?: number, stdDev?: number) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.mean = mean;
    this.stdDev = stdDev;
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
