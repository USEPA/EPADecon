import IBuildingCategoryResults from './IBuildingCategoryResults';

export default interface IIndoorResult {
  [building: string]: IBuildingCategoryResults | null;
}
