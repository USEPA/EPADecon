import IElementResult from './IElementResult';

export default interface IGenericElementResult extends IElementResult {
  workDays: number;
  onSiteDays: number;
  elementCost: number;
}
