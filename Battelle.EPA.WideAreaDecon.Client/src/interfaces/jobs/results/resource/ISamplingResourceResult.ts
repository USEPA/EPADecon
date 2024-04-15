import IResourceResult from './IResourceResult';

export default interface ISamplingResourceResult extends IResourceResult {
  vacuumSamples: number;
  wipeSamples: number;
}
