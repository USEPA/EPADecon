import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterDeserializer from '@/serialization/parameter/ParameterDeserializer';
import IParameter from '@/interfaces/parameter/IParameter';

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
  public parameters: Array<IParameter>;

  constructor(name = 'unknown', filters?: ParameterFilter[], parameters?: IParameter[]) {
    this.name = name;
    this.filters = filters !== undefined ? filters : new Array<ParameterFilter>();
    this.parameters = parameters !== undefined ? parameters : new Array<IParameter>();
  }

  public allParametersValid(): boolean {
    return this.filters.every((f) => f.allParametersValid()) && this.parameters.every((p) => p.isSet());
  }
}
