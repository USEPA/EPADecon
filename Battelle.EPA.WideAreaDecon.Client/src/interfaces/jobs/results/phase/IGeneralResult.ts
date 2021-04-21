import IPhaseResult from './IPhaseResult';

export default interface IGeneralResult extends IPhaseResult {
  totalCost: number;
  areaContaminated: number;
  // decontaminationRounds: number;
}
