import IElementResultSet from './IElementResultSet';

export default interface IBuildingCategoryResults {
  realizationResults: IElementResultSet;
  buildingCount: number;
  buildingAreas: number[];
}
