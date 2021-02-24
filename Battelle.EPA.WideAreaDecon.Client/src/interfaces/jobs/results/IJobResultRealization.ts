import IIndoorResult from './IIndoorResult';
import IOutdoorResult from './IOutdoorResult';
import IUndergroundResult from './IUndergroundResult';

export default interface IJobResultRealization {
  Indoor: IIndoorResult;
  Outdoor: IOutdoorResult;
  Underground: IUndergroundResult;
}
