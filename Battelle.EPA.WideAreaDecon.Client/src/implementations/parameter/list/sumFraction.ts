import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from '../Parameter';

@Serializable('Parameter')
export default class SumFraction extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.sumFraction;

  @JsonProperty()
  entries: Map<string, number | null>;

  public isSet(): boolean {
    if (this.entries === undefined) {
      return false;
    }
    let set = true;
    this.entries.forEach((val) => {
      set = val !== undefined && val !== null;
    });
    return set;
  }

  constructor(name = 'unknown', entries?: Map<string, number>) {
    super(name);
    if (entries !== undefined && entries.size === 0) {
      console.error('Constructing ContaminatedBuildingType without any entries not allowed!');
    }
    this.entries = entries !== undefined ? entries : new Map<string, number>();
  }
}
