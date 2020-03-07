import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterDeserializer from '@/serialization/parameter/ParameterDeserializer';
import ParameterWrapper from './ParameterWrapper';

@Serializable()
export default class ParameterWrapperFilter {
  @JsonProperty()
  name: string;

  @JsonProperty({
    predicate: () => {
      return ParameterWrapperFilter;
    },
  })
  public filters: Array<ParameterWrapperFilter>;

  @JsonProperty(ParameterDeserializer)
  public parameters: Array<ParameterWrapper>;

  constructor(name = 'unknown', filters?: ParameterWrapperFilter[], parameters?: ParameterWrapper[]) {
    this.name = name;
    this.filters = filters !== undefined ? filters : new Array<ParameterWrapperFilter>();
    this.parameters = parameters !== undefined ? parameters : new Array<ParameterWrapper>();
  }

  public allParametersValid(): boolean {
    return this.filters.every((f) => f.allParametersValid()) && this.parameters.every((p) => p.current.isSet());
  }

  public anyParameterChanged(): boolean {
    return this.filters.some((f) => f.anyParameterChanged()) || this.parameters.some((p) => p.isChanged());
  }

  public numberInvalidParameters(): number {
    let sum = 0;
    this.filters.forEach((f) => {
      sum += f.numberInvalidParameters();
    });
    this.parameters.forEach((p) => {
      sum += p.current.isSet() ? 0 : 1;
    });
    return sum;
  }

  public numberChangedParameters(): number {
    let sum = 0;
    this.filters.forEach((f) => {
      sum += f.numberChangedParameters();
    });
    this.parameters.forEach((p) => {
      sum += p.isChanged() ? 1 : 0;
    });
    return sum;
  }

  public subItemSelected(item: ParameterWrapper): boolean {
    return (
      this.filters.some((f) => f.subItemSelected(item)) ||
      this.parameters.some((p) => p.current.isEquivalent(item.current))
    );
  }
}
