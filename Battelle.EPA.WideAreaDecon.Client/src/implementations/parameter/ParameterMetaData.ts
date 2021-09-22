import DecontaminationElement from '@/enums/parameter/decontaminationElement';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export default class ParameterMetaData {
  @JsonProperty()
  validElements?: DecontaminationElement[];

  @JsonProperty()
  category?: string;

  @JsonProperty()
  name = 'unknown';

  @JsonProperty()
  description?: string;

  @JsonProperty()
  units?: string;

  @JsonProperty()
  lowerLimit = 0;

  @JsonProperty()
  upperLimit = 1;

  @JsonProperty()
  step = 0.1;

  get hasDescription(): boolean {
    return this.description !== undefined && this.description !== '';
  }
}
