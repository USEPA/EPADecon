import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { isEqual } from 'lodash';
import ParameterType from '@/enums/parameter/parameterType';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterMetaData from '../ParameterMetaData';
import EnumeratedParameter from './enumeratedParameter';

@Serializable()
export default class ContaminationDefinition implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.contaminationDefinition;

  public get isSet(): boolean {
    return this.loading.isSet && this.areaContaminated.isSet;
  }

  isEquivalent(other: IParameter): boolean {
    return isEqual(this, other);
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  @JsonProperty({ predicate: () => EnumeratedParameter })
  loading: EnumeratedParameter;

  @JsonProperty({ predicate: () => EnumeratedParameter })
  areaContaminated: EnumeratedParameter;

  constructor(metaData = new ParameterMetaData(), loading: EnumeratedParameter, areaContaminated: EnumeratedParameter) {
    this.metaData = metaData;
    this.loading = loading;
    this.areaContaminated = areaContaminated;
  }
}
