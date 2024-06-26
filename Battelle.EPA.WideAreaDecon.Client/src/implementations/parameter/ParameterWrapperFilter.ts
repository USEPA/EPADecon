import IParameterNode from '@/interfaces/parameter/IParameterNode';
import { JsonProperty, Serializable, deserialize, serialize } from 'typescript-json-serializer';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterDeserializer from '@/serialization/parameter/ParameterDeserializer';
import ParameterWrapper from './ParameterWrapper';

@Serializable()
export default class ParameterWrapperFilter implements IParameterNode {
  @JsonProperty()
  name: string;

  parent: IParameterNode | null;

  @JsonProperty({
    predicate: () => ParameterWrapperFilter,
  })
  public filters: Array<ParameterWrapperFilter>;

  @JsonProperty({
    onSerialize: (params: Array<ParameterWrapper>) => {
      // only need current
      return params.map((param) => serialize(param.current));
    },
    onDeserialize: (params: Array<IParameter>) => {
      return params.map((param) => {
        // deserialize IParameter JSON into appropriate distribution
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parameterType: any = ParameterDeserializer.predicate(param);
        const parameter = deserialize<IParameter>(param, parameterType);
        return new ParameterWrapper(null, parameter);
      });
    },
  })
  public parameters: Array<ParameterWrapper>;

  constructor(
    parent: IParameterNode | null = null,
    name = 'unknown',
    filters?: ParameterWrapperFilter[],
    parameters?: ParameterWrapper[],
  ) {
    this.parent = parent;
    this.name = name;
    this.filters = filters !== undefined ? filters : new Array<ParameterWrapperFilter>();
    this.parameters = parameters !== undefined ? parameters : new Array<ParameterWrapper>();
  }

  public allParametersValid(): boolean {
    return this.filters.every((f) => f.allParametersValid()) && this.parameters.every((p) => p.current.isSet);
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
      sum += p.current.isSet ? 0 : 1;
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
