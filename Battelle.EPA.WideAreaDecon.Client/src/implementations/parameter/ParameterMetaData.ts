import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export default class ParameterMetaData {
  @JsonProperty()
  min?: number;

  @JsonProperty()
  max?: number;

  @JsonProperty()
  units?: string;

  @JsonProperty()
  description?: string;
}
