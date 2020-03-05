import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';
import KeyValuePair from './keyValuePair';

export default class SumFraction implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.sumFraction;

  @JsonProperty()
  entries: Array<KeyValuePair>;

  public isSet(): boolean {
    return this.entries.every((e) => e.value !== null);
  }

  constructor(name = 'unknown', entries?: Array<KeyValuePair>) {
    this.name = name;
    if (entries !== undefined && entries.length === 0) {
      // console.error('Constructing ContaminatedBuildingType without any entries not allowed!');
    }
    this.entries = entries !== undefined ? entries : [];
  }
}
