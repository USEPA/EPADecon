import IPhaseResult from './IPhaseResult';

export default interface IJobPhaseResult {
    characterizationSamplingResults: IPhaseResult;
    sourceReductionResults: IPhaseResult;
    decontaminationResults: IPhaseResult;
    incidentCommandResults: IPhaseResult;
    otherResults: IPhaseResult;
    generalResults: IPhaseResult;
}