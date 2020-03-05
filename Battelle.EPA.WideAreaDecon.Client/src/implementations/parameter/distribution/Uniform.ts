import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';

export default class Uniform implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.uniform;

  @JsonProperty()
  min: number | undefined;

  @JsonProperty()
  max: number | undefined;

  public isSet(): boolean {
    return this.min !== undefined && this.max !== undefined;
  }

  constructor(name = 'unknown', min?: number, max?: number) {
    this.name = name;
    this.min = min;
    this.max = max;
  }
}
