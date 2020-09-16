import ParameterType from '@/enums/parameter/parameterType';
import SurfaceType from '@/enums/parameter/surfaceType';
import IParameter from '@/interfaces/parameter/IParameter';
import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterMetaData from '../ParameterMetaData';

@Serializable()
export default class ApplicationMethodEfficacy implements IParameter {
  @JsonProperty()
  readonly type = ParameterType.efficacy;

  // eslint-disable-next-line class-methods-use-this
  get isSet(): boolean {
    return false;
  }

  isEquivalent(other: IParameter): boolean {
    return this.type === other.type;
  }

  @JsonProperty()
  metaData: ParameterMetaData;

  parameters?: Record<SurfaceType, IParameter[]>;

  constructor(metaData?: ParameterMetaData, parameters?: Record<SurfaceType, IParameter[]>) {
    this.metaData = metaData ?? new ParameterMetaData();
    this.parameters = parameters;
  }
}
