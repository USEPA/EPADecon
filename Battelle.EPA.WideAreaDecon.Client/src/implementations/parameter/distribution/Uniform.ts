import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class Uniform implements IParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.uniform;

  @JsonProperty()
  min?: number;

  @JsonProperty()
  max?: number;

  get mean(): number | undefined {
    return !!this.min && !!this.max ? (this.min + this.max) / 2.0 : undefined;
  }

  get mode(): number | undefined {
    return this.mean;
  }

  get stdDev(): number | undefined {
    return this.min !== undefined && this.max !== undefined ? (this.max - this.min) / 6.0 : undefined;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return this.min !== undefined && this.max !== undefined;
  }

  constructor(metaData = new ParameterMetaData(), min?: number, max?: number) {
    this.min = min;
    this.max = max;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as Uniform);
  }

  compareValues(other?: Uniform): boolean {
    return other ? this.type === other.type && this.min === other.min && this.max === other.max : false;
  }
}
