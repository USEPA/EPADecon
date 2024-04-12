import IResourceResult from './IResourceResult';

export default interface IWasteSamplingResourceResult extends IResourceResult {
  aqueousWasteSamples: number;
  solidWasteSamples: number;
}
