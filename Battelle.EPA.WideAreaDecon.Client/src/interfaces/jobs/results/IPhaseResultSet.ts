import IGeneralResult from './phase/IGeneralResult';
import IGenericPhaseResult from './phase/IGenericPhaseResult';
import IIncidentCommandResult from './phase/IIncidentCommandResult';
import IOtherResult from './phase/IOtherResult';
import IPhaseResult from './phase/IPhaseResult';

export default interface IPhaseResultSet {
  characterizationSamplingResults: IGenericPhaseResult;
  sourceReductionResults: IGenericPhaseResult;
  decontaminationResults: IGenericPhaseResult;
  incidentCommandResults: IIncidentCommandResult;
  otherResults: IOtherResult;
  generalResults: IGeneralResult;
  [key: string]: IPhaseResult;
}
