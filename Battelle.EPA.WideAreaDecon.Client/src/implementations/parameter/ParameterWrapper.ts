import IParameter from '@/interfaces/parameter/IParameter';
import deepCopy from '@/utilities/deepCopy';
import ParameterType from '@/enums/parameter/parameterTypes';
import NullParameter from './NullParameter';

export default class ParameterWrapper {
  baseline: IParameter;

  current: IParameter;

  get type(): ParameterType {
    return this.current.type;
  }

  get name(): string {
    return this.current.name;
  }

  isChanged(): boolean {
    return !this.baseline.isEquivalent(this.current);
  }

  constructor(param?: IParameter) {
    this.baseline = new NullParameter();
    if (param) {
      this.baseline = deepCopy(param);
    }
    this.current = deepCopy(this.baseline);
  }
}
