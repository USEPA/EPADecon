import IIndoorResult from './IIndoorResult';
import IPhaseResultSet from './IPhaseResultSet';

export default interface IScenarioResults {
  indoorResults: IIndoorResult;
  outdoorResults: IPhaseResultSet;
  undergroundResults: IPhaseResultSet;
  [key: string]: IPhaseResultSet | IIndoorResult;
}
