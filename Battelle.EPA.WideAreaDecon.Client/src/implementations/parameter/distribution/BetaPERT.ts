import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class BetaPERT implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.pert;

  @JsonProperty()
  min: number | undefined;

  @JsonProperty()
  max: number | undefined;

  @JsonProperty()
  mode: number | undefined;

  get mean(): number | undefined {
    if (!(!!this.min && !!this.mode && !!this.max)) {
      return undefined;
    }
    return (this.min + 4 * this.mode + this.max) / 6.0;
  }

  get stdDev(): number | undefined {
    if (!(!!this.min && !!this.mode && !!this.max)) {
      return undefined;
    }
    return (this.max - this.min) / 6.0;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return !!this.min && !!this.max && !!this.mode;
  }

  constructor(name = 'unknown', metaData = new ParameterMetaData(), min?: number, max?: number, mode?: number) {
    this.name = name;
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
