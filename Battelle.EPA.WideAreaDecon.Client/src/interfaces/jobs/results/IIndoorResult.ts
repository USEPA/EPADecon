import BuildingCategory from '@/enums/parameter/buildingCategory';
import IPhaseResultSet from './IPhaseResultSet';

export default interface IIndoorResult {
  Results: Record<BuildingCategory, IPhaseResultSet>;
}
