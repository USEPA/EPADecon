import { JsonProperty } from 'typescript-json-serializer';
import ParameterType from '@/enums/parameter/parameterTypes';
import IParameter from '@/interfaces/parameter/IParameter';
import ContaminatedBuildingType from './ContaminatedBuildingType';

export default class ContaminatedBuildingTypes implements IParameter {
  @JsonProperty()
  name: string;

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
    this.name = name;
    if (buildings !== undefined && buildings.length === 0) {
      // console.error('Construction of ContaminatedBulidingTypes with no buildings not allowed!');
    }
    if (buildings) {
      this.buildings = buildings;
    } else {
      this.buildings = new Array<ContaminatedBuildingType>();
    }
  }

  isEquivalent(other: IParameter): boolean {
    return this.compareValues(other as ContaminatedBuildingTypes);
  }

  compareValues(other?: ContaminatedBuildingTypes): boolean {
    if (other === undefined || this.type !== other.type) {
      return false;
    }
    return this.buildings.every((contamBuilding, i) => contamBuilding.isEquivalent(other.buildings[i]));
  }
}
