import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class BimodalTruncatedNormal implements IParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.bimodalTruncatedNormal;

  @JsonProperty()
  mean1: number | undefined;

  @JsonProperty()
  stdDev1: number | undefined;

  @JsonProperty()
  mean2: number | undefined;

  @JsonProperty()
  stdDev2: number | undefined;

  @JsonProperty()
  min: number | undefined;

  @JsonProperty()
  max: number | undefined;

  get mean(): number | undefined {
    if (!(!!this.mean1 && !!this.stdDev1 && !!this.mean2 && !!this.stdDev2 && !!this.min && !!this.max)) {
      return undefined;
    }
    return (this.mean1 + this.mean2) / 2.0;
  }

  get stdDev(): number | undefined {
    if (!(!!this.mean1 && !!this.stdDev1 && !!this.mean2 && !!this.stdDev2 && !!this.min && !!this.max)) {
      return undefined;
    }
    return (this.max - this.min) / 6.0;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return !!this.mean1 && !!this.stdDev1 && !!this.mean2 && !!this.stdDev2 && !!this.min && !!this.max;
  }

  constructor(
    metaData = new ParameterMetaData(),
    mean1?: number,
    stdDev1?: number,
    mean2?: number,
    stdDev2?: number,
    min?: number,
    max?: number,
  ) {
    this.mean1 = mean1;
    this.stdDev1 = stdDev1;
    this.mean2 = mean2;
    this.stdDev2 = stdDev2;
    this.min = min;
    this.max = max;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as BimodalTruncatedNormal);
  }

  compareValues(other?: BimodalTruncatedNormal): boolean {
    return other
      ? this.type === other.type &&
          this.min === other.min &&
          this.max === other.max &&
          this.mean1 === other.mean1 &&
          this.mean2 === other.mean2 &&
          this.stdDev1 === other.stdDev1 &&
          this.stdDev2 === other.stdDev2
      : false;
  }
}
