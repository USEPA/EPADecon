import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from '../Parameter';
import KeyValuePair from './keyValuePair';

@Serializable('Parameter')
export default class SumFraction extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.sumFraction;

  @JsonProperty()
  entries: Array<KeyValuePair>;

  public isSet(): boolean {
    return this.entries.every((e) => e.value !== null);
  }

  constructor(name = 'unknown', entries?: Array<KeyValuePair>) {
    super(name);
    if (entries !== undefined && entries.length === 0) {
      // console.error('Constructing ContaminatedBuildingType without any entries not allowed!');
    }
    this.entries = entries !== undefined ? entries : [];
  }
}
