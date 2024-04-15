import IGeneralResult from './element/IGeneralResult';
import IGenericElementResult from './element/IGenericElementResult';
import IElementResult from './element/IElementResult';
import ISamplingResourceResult from './resource/ISamplingResourceResult';
import IResourceResult from './resource/IResourceResult';
import IDecontaminationResourceResult from './resource/IDecontaminationResourceResult';
import IWasteSamplingResourceResult from './resource/IWasteSamplingResourceResult';

export default interface IElementResultSet {
  characterizationSamplingResults: IGenericElementResult & ISamplingResourceResult;
  sourceReductionResults: IGenericElementResult & IResourceResult;
  decontaminationResults: IGenericElementResult & IDecontaminationResourceResult;
  verificationSamplingResults: IGenericElementResult & ISamplingResourceResult;
  wasteSamplingResults: IGenericElementResult & IWasteSamplingResourceResult;
  generalResults: IGeneralResult;
  [key: string]: IElementResult | IResourceResult;
}
