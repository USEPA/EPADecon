import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export default class ParameterMetaData {
  @JsonProperty()
  min?: number;

  @JsonProperty()
  max?: number;

  @JsonProperty()
  step?: number;

  @JsonProperty()
  units?: string;

  @JsonProperty()
  description?: string;

  get hasDescription(): boolean {
    return this.description !== undefined && this.description !== '';
    if (this.description) {
      return this.description !== '';
    }
    return false;
  }
}
