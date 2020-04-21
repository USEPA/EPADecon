import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';
import KeyValuePair from './keyValuePair';
import ParameterMetaData from '../ParameterMetaData';

export default class SumFraction implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.sumFraction;

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty({
    predicate: () => {
      return KeyValuePair;
    },
  })
  entries: Array<KeyValuePair>;

  public isSet(): boolean {
    return this.entries.every((e) => e.value !== null);
  }

  constructor(name = 'unknown', metaData = new ParameterMetaData(), entries?: Array<KeyValuePair>) {
    this.name = name;
    this.entries = entries !== undefined ? entries : [];
    this.metaData = metaData;
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as SumFraction);
  }

  compareValues(other?: SumFraction): boolean {
    if (other === undefined || this.type !== other.type) {
      return false;
    }
    return this.entries.every((kvp: KeyValuePair, i: number) => kvp.isEquivalent(other.entries[i]));
  }
}
