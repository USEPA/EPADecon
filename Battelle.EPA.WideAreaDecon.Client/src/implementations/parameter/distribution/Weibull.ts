import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class Weibull implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.weibull;

  @JsonProperty()
  k?: number;

  @JsonProperty()
  lambda?: number;

  get isSet(): boolean {
    return !!this.k && !!this.lambda;
  }

  isEquivalent(other: Weibull): boolean {
    if (!(!!this.k && !!this.lambda && !!other.k && !!other.lambda)) {
      return false;
    }
    return this.k === other.k && this.lambda === other.lambda;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  constructor(metaData: ParameterMetaData, k?: number, lambda?: number) {
    this.metaData = metaData;
    this.k = k;
    this.lambda = lambda;
  }
}
