import IElementResult from './IElementResult';

export default interface IIncidentCommandResult extends IElementResult {
  onSiteDays: number;
  elementCost: number;
}
