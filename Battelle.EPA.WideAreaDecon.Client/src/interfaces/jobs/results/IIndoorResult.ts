import BuildingCategory from '@/enums/parameter/buildingCategory';
import IPhaseResultSet from './IPhaseResultSet';

// TODO limit buildings to those in BuildingCategory
export default interface IIndoorResult {
  [building: string]: IPhaseResultSet;
}
