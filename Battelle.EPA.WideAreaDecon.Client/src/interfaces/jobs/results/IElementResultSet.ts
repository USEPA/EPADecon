import IGeneralResult from './element/IGeneralResult';
import IGenericElementResult from './element/IGenericElementResult';
import IIncidentCommandResult from './element/IIncidentCommandResult';
import IElementResult from './element/IElementResult';

export default interface IElementResultSet {
  characterizationSamplingResults: IGenericElementResult;
  sourceReductionResults: IGenericElementResult;
  decontaminationResults: IGenericElementResult;
  clearanceSamplingResults: IGenericElementResult;
  wasteSamplingResults: IGenericElementResult;
  incidentCommandResults: IIncidentCommandResult;
  generalResults: IGeneralResult;
  [key: string]: IElementResult;
}
