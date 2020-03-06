import ParameterList from '@/implementations/parameter/ParameterList';
import deepCopy from '@/utilities/deepCopy';
import NullParameter from '@/implementations/parameter/NullParameter';
import IScenarioParameters from '@/interfaces/store/defineScenarioParameters/IScenarioParameters';

export default class ScenarioParameters implements IScenarioParameters {
  baselineScenarioParameters: ParameterList = new ParameterList(-1, []);

  currentScenarioParameters: ParameterList = new ParameterList(-1, []);

  selectedScenarioParameter = new NullParameter();

  constructor(scenarioParameters?: ParameterList) {
    this.baselineScenarioParameters = new ParameterList(-1, []);
    this.currentScenarioParameters = new ParameterList(-1, []);
    if (scenarioParameters) {
      this.baselineScenarioParameters = deepCopy(scenarioParameters);
      this.currentScenarioParameters = deepCopy(scenarioParameters);
    }
  }
}
