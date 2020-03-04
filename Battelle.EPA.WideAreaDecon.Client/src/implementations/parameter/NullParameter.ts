import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from './Parameter';

export default class NullParameter implements Parameter {
  name = 'NULL';

  type = ParameterType.null;

  // eslint-disable-next-line class-methods-use-this
  isSet(): boolean {
    return false;
  }
}
