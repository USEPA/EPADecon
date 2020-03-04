import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterDeserializer from '@/serialization/parameter/ParameterDeserializer';
import Parameter from './Parameter';

@Serializable()
export default class ParameterFilter {
  @JsonProperty()
  name: string;

  @JsonProperty({
    predicate: () => {
      return ParameterFilter;
    },
  })
  public filters: Array<ParameterFilter>;

  @JsonProperty(ParameterDeserializer)
  public parameters: Array<Parameter>;

  constructor(name = 'unknown', filters?: ParameterFilter[], parameters?: Parameter[]) {
    this.name = name;
    this.filters = filters !== undefined ? filters : new Array<ParameterFilter>();
    this.parameters = parameters !== undefined ? parameters : new Array<Parameter>();
  }

  public allParametersValid(): boolean {
    return this.filters.every((f) => f.allParametersValid()) && this.parameters.every((p) => p.isSet());
  }
}
