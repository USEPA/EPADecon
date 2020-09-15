import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';

export default class UniformXDependent implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.uniformXDependent;

  @JsonProperty()
  get isSet(): boolean {
    return !(!!this.xValues && !!this.yMinimumValues && !!this.yMaximumValues && !!this.dependentVariable);
  }

  @JsonProperty()
  xValues?: number[];

  @JsonProperty()
  yMinimumValues?: number[];

  @JsonProperty()
  yMaximumValues?: number[];

  @JsonProperty()
  dependentVariable?: string;

  @JsonProperty()
  metaData: ParameterMetaData;

  constructor(
    metaData = new ParameterMetaData(),
    xValues?: number[],
    yMinimumValues?: number[],
    yMaximumValues?: number[],
    dependentVariable?: string,
  ) {
    this.metaData = metaData;
    this.xValues = xValues;
    this.yMinimumValues = yMinimumValues;
    this.yMaximumValues = yMaximumValues;
    this.dependentVariable = dependentVariable;
  }

  isEquivalent(other: UniformXDependent): boolean {
    let equivalent = true;
    if (!(!!other.xValues || !!other.yMinimumValues || !!other.yMaximumValues)) {
      return false;
    }
    if (
      other.xValues?.length !== this.xValues?.length ||
      other.yMinimumValues?.length !== this.yMinimumValues?.length ||
      other.yMaximumValues !== this.yMaximumValues?.length
    ) {
      return false;
    }
    if (other?.dependentVariable !== this?.dependentVariable) {
      return false;
    }
    this.xValues?.forEach((x, i) => {
      equivalent = other.xValues ? equivalent && x === other.xValues[i] : false;
    });
    if (!equivalent) return false;
    this.yMinimumValues?.forEach((x, i) => {
      equivalent = other.yMinimumValues ? equivalent && x === other.yMinimumValues[i] : false;
    });
    if (!equivalent) return false;
    this.yMaximumValues?.forEach((x, i) => {
      equivalent = other.yMaximumValues ? equivalent && x === other.yMaximumValues[i] : false;
    });
    return equivalent;
  }
}
