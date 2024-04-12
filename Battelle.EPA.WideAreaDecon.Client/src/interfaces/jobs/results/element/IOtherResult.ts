import IElementResult from './IElementResult';

export default interface IOtherResult extends IElementResult {
  characterizationSamplingTravelCost: number;
  sourceReductionTravelCost: number;
  decontaminationTravelCost: number;
  verificationSamplingTravelCost: number;
  clearanceSamplingTravelCost: number;
  wasteSamplingTravelCost: number;
  incidentCommandTravelCost: number;
  totalTravelCost: number;
}
