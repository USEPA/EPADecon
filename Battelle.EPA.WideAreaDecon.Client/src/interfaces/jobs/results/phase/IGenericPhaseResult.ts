import IPhaseResult from './IPhaseResult';

export default interface IGenericPhaseResult extends IPhaseResult {
  workDays: number;
  onSiteDays: number;
  phaseCost: number;
}
