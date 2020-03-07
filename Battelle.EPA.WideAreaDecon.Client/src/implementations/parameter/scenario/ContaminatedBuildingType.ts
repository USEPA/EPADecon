import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import DistributionParameterDeserializer from '@/serialization/parameter/DistributionParameterDeserializer';
import IParameter from '@/interfaces/parameter/IParameter';
import DistributionParameter from '../distribution/DistributionParameter';
import NullParameter from '../NullParameter';

export default class ContaminatedBuildingType implements IParameter {
  @JsonProperty()
  name: string;

  @JsonProperty()
  type: ParameterType = ParameterType.contaminatedBuildingType;

  @JsonProperty(DistributionParameterDeserializer)
  area: DistributionParameter | NullParameter;

  public isSet(): boolean {
    if (this.area) {
      return this.area.isSet();
    }
    return false;
  }

  constructor(name = 'unknown', area?: DistributionParameter) {
    this.name = name;
    this.area = area !== undefined ? area : new NullParameter();
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as ContaminatedBuildingType);
  }

  compareValues(other?: ContaminatedBuildingType): boolean {
    return other ? this.type === other.type && this.area.isEquivalent(other.area) : false;
  }
}
