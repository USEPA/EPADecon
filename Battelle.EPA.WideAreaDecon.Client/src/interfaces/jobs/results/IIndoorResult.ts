// import BuildingCategory from '@/enums/parameter/buildingCategory';
import IElementResultSet from './IElementResultSet';

// TODO limit buildings to those in BuildingCategory
export default interface IIndoorResult {
  [building: string]: IElementResultSet;
}
