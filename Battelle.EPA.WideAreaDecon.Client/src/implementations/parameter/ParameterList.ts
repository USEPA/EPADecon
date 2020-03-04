import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterFilter from './ParameterFilter';

@Serializable()
export default class ParameterList {
  @JsonProperty()
  version: number;

  @JsonProperty({
    predicate: () => {
      return ParameterFilter;
    },
  })
  parameters: Array<ParameterFilter>;

  constructor(version = 0, parameters?: ParameterFilter[]) {
    this.version = version;
    this.parameters = parameters !== undefined ? parameters : new Array<ParameterFilter>();
  }
}
