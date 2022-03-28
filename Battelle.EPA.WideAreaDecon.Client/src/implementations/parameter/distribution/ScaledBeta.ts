import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import IUnivariateParameter from '@/interfaces/parameter/IUnivariateParameter';
import Distribution, { ScaledBetaDistribution } from 'battelle-common-typescript-statistics';
import { isEqual } from 'lodash';
import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class ScaledBeta implements IUnivariateParameter {
  @JsonProperty()
  readonly type = ParameterType.scaledBeta;

  @JsonProperty()
  alpha?: number;

  @JsonProperty()
  beta?: number;

  @JsonProperty()
  min?: number;

  @JsonProperty()
  max?: number;

  @JsonProperty()
  metaData: ParameterMetaData;

  constructor(metaData = new ParameterMetaData(), min?: number, max?: number, alpha?: number, beta?: number) {
    this.min = min;
    this.max = max;
    this.alpha = alpha;
    this.beta = beta;
    this.metaData = metaData;
  }

  get isSet(): boolean {
    return (
      this.min !== undefined &&
      this.max !== undefined &&
      this.min < this.max &&
      this.alpha !== undefined &&
      this.alpha > 0 &&
      this.beta !== undefined &&
      this.beta > 0
    );
  }

  get distribution(): Distribution | undefined {
    if (this.min === undefined || this.max === undefined || this.alpha === undefined || this.beta === undefined) {
      return undefined;
    }
    return new ScaledBetaDistribution(this.alpha, this.beta, this.min, this.max);
  }

  isEquivalent(other: IParameter): boolean {
    return isEqual(this, other);
  }
}
