import IIndoorResult from './IIndoorResult';
import IElementResultSet from './IElementResultSet';

export default interface IScenarioResults {
  indoorResults: IIndoorResult;
  outdoorResults: IElementResultSet;
  undergroundResults: IElementResultSet;
  [key: string]: IElementResultSet | IIndoorResult;
}
