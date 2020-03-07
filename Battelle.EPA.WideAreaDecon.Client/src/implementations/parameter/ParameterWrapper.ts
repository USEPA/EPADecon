import IParameter from '@/interfaces/parameter/IParameter';
import deepCopy from '@/utilities/deepCopy';

export default class ParameterWrapper {
  baseline: IParameter;

  current: IParameter;

  isSet(): boolean {
    return this.baseline === this.current;
  }

  constructor(param: IParameter) {
    this.baseline = deepCopy(param);
    this.current = deepCopy(this.baseline);
  }
}