import IPhaseResult from './IPhaseResult';

export default interface IOtherResult extends IPhaseResult {
  characterizationSamplingTravelCost: number;
  sourceReductionTravelCost: number;
  decontaminationTravelCost: number;
  incidentCommandTravelCost: number;
  totalTravelCost: number;
}
