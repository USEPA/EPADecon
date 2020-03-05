import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import DistributionParameterDeserializer from '@/serialization/parameter/DistributionParameterDeserializer';
import IParameter from '@/interfaces/parameter/IParameter';
import DistributionParameter from '../distribution/DistributionParameter';

export default class ContaminatedBuildingType implements IParameter {
  @JsonProperty()
  name: string;

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
    this.name = name;
    this.area = area;
  }
}
