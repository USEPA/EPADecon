import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export default class KeyValuePair {
  @JsonProperty()
  key: string;

  @JsonProperty()
  value: number | null;

  constructor(key?: string, value?: number) {
    this.key = key !== undefined ? key : 'unknown';
    this.value = value !== undefined ? value : null;
  }

  isEquivalent(other: KeyValuePair): boolean {
    return this.key === other.key && this.value === other.value;
  }
}
