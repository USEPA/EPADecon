import ParameterList from '@/implementations/parameter/ParameterList';
import deepCopy from '@/utilities/deepCopy';
import NullParameter from '@/implementations/parameter/NullParameter';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import IParameter from '@/interfaces/parameter/IParameter';

export default class ParameterSelection implements IParameterSelection {
  baselineScenarioParameters: ParameterList;

  currentScenarioParameters: ParameterList;

  currentSelectedParameter: IParameter;

  baselineScenarioDefinition: ParameterList;

  currentScenarioDefinition: ParameterList;

  constructor(scenarioDefinition?: ParameterList, scenarioParameters?: ParameterList) {
    this.baselineScenarioDefinition = new ParameterList(-1, []);
    this.currentScenarioDefinition = new ParameterList(-1, []);
    this.baselineScenarioParameters = new ParameterList(-1, []);
    this.currentScenarioParameters = new ParameterList(-1, []);
    this.currentSelectedParameter = new NullParameter();

    if (scenarioParameters) {
      this.baselineScenarioParameters = deepCopy(scenarioParameters);
      this.currentScenarioParameters = deepCopy(scenarioParameters);
    }

    if (scenarioDefinition) {
      this.baselineScenarioDefinition = deepCopy(scenarioDefinition);
      this.currentScenarioDefinition = deepCopy(scenarioDefinition);
    }
  }
}
