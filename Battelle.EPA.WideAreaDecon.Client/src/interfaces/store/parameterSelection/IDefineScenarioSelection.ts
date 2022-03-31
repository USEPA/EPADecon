import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import { ScenarioDefinitionMode } from '@/types';

export default interface IDefineScenarioSelection {
  scenarioDefinition: ParameterWrapperList;
  scenarioDefinitionMode: ScenarioDefinitionMode | null;
}
