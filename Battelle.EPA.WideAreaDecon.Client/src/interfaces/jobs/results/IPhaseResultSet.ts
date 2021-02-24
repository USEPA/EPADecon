import IPhaseResult from './IPhaseResult';

export default interface IPhaseResultSet {
  characterizationSamplingResults: IPhaseResult;
  sourceReductionResults: IPhaseResult;
  decontaminationResults: IPhaseResult;
  incidentCommandResults: IPhaseResult;
  otherResults: IPhaseResult;
  generalResults: IPhaseResult;
}
