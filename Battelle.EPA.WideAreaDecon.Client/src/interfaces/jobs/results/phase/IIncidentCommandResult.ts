import IPhaseResult from './IPhaseResult';

export default interface IIncidentCommandResult extends IPhaseResult {
  onSiteDays: number;
  phaseCost: number;
}
