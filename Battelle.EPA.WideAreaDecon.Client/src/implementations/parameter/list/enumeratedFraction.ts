import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { isEqual } from 'lodash';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import Constant from '../distribution/Constant';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class EnumeratedFraction implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.enumeratedFraction;

  /** Returns true when the sum of all values is 1 */
  get isSet(): boolean {
    const sum = Object.values(this.values)
      .map((c) => c.value ?? 0)
      .reduce((acc, cur) => acc + cur, 0);
    const tolerance = 0.02;

    return Math.abs(1.0 - sum) <= tolerance;
  }

  isEquivalent(other: IParameter): boolean {
    return isEqual(this, other);
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty()
  values: Record<string, Constant>;

  @JsonProperty()
  typeName: string;

  constructor(metaData = new ParameterMetaData(), typeName?: string, values?: Record<string, Constant>) {
    this.metaData = metaData;
    this.typeName = typeName ?? 'unknown';
    this.values = values ?? {};
  }
}
