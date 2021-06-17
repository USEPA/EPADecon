import IEventResults from './IEventResults';
import IScenarioResults from './IScenarioResults';

export default interface IJobResultRealization {
  scenarioResults: IScenarioResults;
  eventResults: IEventResults;
}
