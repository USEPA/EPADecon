import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import IUnivariateParameter from '@/interfaces/parameter/IUnivariateParameter';
import ParameterMetaData from '../ParameterMetaData';
import FrequencyValueType from '@/enums/parameter/frequencyValueType';

@Serializable()
export default class FrequencyValue implements IUnivariateParameter {
  @JsonProperty()
  readonly type: ParameterType = ParameterType.frequencyValue;

  @JsonProperty()
  metaData: ParameterMetaData;

  public get isSet(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  @JsonProperty()
  public value: FrequencyValueType;

  public get textValue(): FrequencyValueType {
    return this.value;
  }

  constructor(metaData = new ParameterMetaData(), value: FrequencyValueType) {
    this.value = value ?? null;
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as FrequencyValue);
  }

  compareValues(other?: FrequencyValue): boolean {
    return other ? this.type === other.type && this.value === other.value : false;
  }
}
