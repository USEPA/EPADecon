import ParameterList from '@/implementations/parameter/ParameterList';
import IScenarioDefinition from '@/interfaces/store/defineScenarioParameters/IScenarioDefinition';
import deepCopy from '@/utilities/deepCopy';
import NullParameter from '@/implementations/parameter/NullParameter';

export default class ScenarioDefinition implements IScenarioDefinition {
  baselineScenarioDefinition: ParameterList = new ParameterList(-1, []);

  currentScenarioDefinition: ParameterList = new ParameterList(-1, []);

  selectedScenarioDefinitionParameter = new NullParameter();

  constructor(scenarioParameters?: ParameterList) {
    this.baselineScenarioDefinition = new ParameterList(-1, []);
    this.currentScenarioDefinition = new ParameterList(-1, []);
    if (scenarioParameters) {
      this.baselineScenarioDefinition = deepCopy(scenarioParameters);
      this.currentScenarioDefinition = deepCopy(scenarioParameters);
    }
  }
}
