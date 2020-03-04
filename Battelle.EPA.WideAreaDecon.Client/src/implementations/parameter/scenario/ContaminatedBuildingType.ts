import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import DistributionParameterDeserializer from '@/serialization/parameter/DistributionParameterDeserializer';
import Parameter from '../Parameter';
import DistributionParameter from '../distribution/DistributionParameter';

@Serializable('Parameter')
export default class ContaminatedBuildingType extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.contaminatedBuildingType;

  @JsonProperty(DistributionParameterDeserializer)
  area: DistributionParameter | undefined;

  public isSet(): boolean {
    if (this.area) {
      return this.area.isSet();
    }
    return false;
  }

  constructor(name = 'unknown', area?: DistributionParameter) {
    super(name);
    this.area = area;
  }
}
