import IIndoorResult from './IIndoorResult';
import IPhaseResultSet from './IPhaseResultSet';

export default interface IJobResultRealization {
  Indoor: IIndoorResult;
  Outdoor: IPhaseResultSet;
  Underground: IPhaseResultSet;
  [key: string]: IPhaseResultSet | IIndoorResult;
}
