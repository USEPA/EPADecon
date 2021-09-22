import IElementResult from './IElementResult';

export default interface IOtherResult extends IElementResult {
  characterizationSamplingTravelCost: number;
  sourceReductionTravelCost: number;
  decontaminationTravelCost: number;
  wasteSamplingTravelCost: number;
  incidentCommandTravelCost: number;
  totalTravelCost: number;
}
