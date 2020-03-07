import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';
import { JsonProperty } from 'typescript-json-serializer';

export default class NullParameter implements IParameter {
  @JsonProperty()
  name = 'null';

  type = ParameterType.null;

  // eslint-disable-next-line class-methods-use-this
  isSet(): boolean {
    return false;
  }

  isEquivalent(other: IParameter): boolean {
    if (other.type !== this.type) {
      return false;
    }
    return true;
  }
}
