import { JsonProperty, Serializable } from 'typescript-json-serializer';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterType from '@/enums/parameter/parameterTypes';

@Serializable()
export default abstract class Parameter implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  abstract type: ParameterType;

  abstract isSet(): boolean;

  constructor(name: string) {
    this.name = name;
  }
}
