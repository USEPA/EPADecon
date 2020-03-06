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
  filters: Array<ParameterFilter>;

  constructor(version = 0, filters?: ParameterFilter[]) {
    this.version = version;
    this.filters = filters !== undefined ? filters : new Array<ParameterFilter>();
  }

  // eslint-disable-next-line class-methods-use-this
  public allParametersValid(): boolean {
    return this.filters.every((f) => f.allParametersValid());
  }

  public numberInvalidParameters(): number {
    let sum = 0;
    this.filters.forEach((f) => {
      sum += f.numberInvalidParameters();
    });
    return sum;
  }
}
