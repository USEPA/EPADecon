import ParameterList from '@/implementations/parameter/ParameterList';
import IParameter from '@/interfaces/parameter/IParameter';

export default interface IScenarioDefinition {
  baselineScenarioDefinition: ParameterList;

  currentScenarioDefinition: ParameterList;

  selectedScenarioDefinitionParameter: IParameter;
}
