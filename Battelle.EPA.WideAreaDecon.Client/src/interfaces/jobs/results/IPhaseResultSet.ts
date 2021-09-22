import IGeneralResult from './phase/IGeneralResult';
import IGenericPhaseResult from './phase/IGenericPhaseResult';
import IIncidentCommandResult from './phase/IIncidentCommandResult';
import IPhaseResult from './phase/IPhaseResult';

export default interface IPhaseResultSet {
  characterizationSamplingResults: IGenericPhaseResult;
  sourceReductionResults: IGenericPhaseResult;
  decontaminationResults: IGenericPhaseResult;
  wasteSamplingResults: IGenericPhaseResult;
  incidentCommandResults: IIncidentCommandResult;
  generalResults: IGeneralResult;
  [key: string]: IPhaseResult;
}
