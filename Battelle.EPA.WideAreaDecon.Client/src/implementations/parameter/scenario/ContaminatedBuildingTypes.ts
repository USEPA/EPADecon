import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import Parameter from '../Parameter';
import ContaminatedBuildingType from './ContaminatedBuildingType';

@Serializable('Parameter')
export default class ContaminatedBuildingTypes extends Parameter {
  @JsonProperty()
  type: ParameterType = ParameterType.contaminatedBuildingTypes;

  @JsonProperty({
    predicate: () => {
      return ContaminatedBuildingType;
    },
  })
  buildings: Array<ContaminatedBuildingType>;

  public isSet(): boolean {
    return this.buildings.every((b) => b.isSet());
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(name = 'unknown', buildings?: ContaminatedBuildingType[]) {
    super(name);
    if (buildings !== undefined && buildings.length === 0) {
      console.error('Construction of ContaminatedBulidingTypes with no buildings not allowed!');
    }
    if (buildings) {
      this.buildings = buildings;
    } else {
      this.buildings = new Array<ContaminatedBuildingType>();
    }
  }
}
