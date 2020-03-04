import ParameterList from '@/implementations/parameter/ParameterList';
import IDefineScenarioParameters from '@/interfaces/store/defineScenarioParameters/IDefineScenarioParameters';
import deepCopy from '@/utilities/deepCopy';
import NullParameter from '@/implementations/parameter/NullParameter';

export default class DefineScenarioParameters implements IDefineScenarioParameters {
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
