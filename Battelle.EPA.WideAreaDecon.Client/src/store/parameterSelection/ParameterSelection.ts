import deepCopy from '@/utilities/deepCopy';
import NullParameter from '@/implementations/parameter/NullParameter';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import { ScenarioDefinitionMode } from '@/types';

export default class ParameterSelection implements IParameterSelection {
  scenarioParameters: ParameterWrapperList;

  scenarioDefinition: ParameterWrapperList;

  scenarioDefinitionMode: ScenarioDefinitionMode | null;

  currentSelectedParameter: ParameterWrapper;

  constructor(scenarioDefinition?: ParameterWrapperList, scenarioParameters?: ParameterWrapperList) {
    this.scenarioDefinition = new ParameterWrapperList(-1, []);
    this.scenarioParameters = new ParameterWrapperList(-1, []);
    this.currentSelectedParameter = new ParameterWrapper(null, new NullParameter());
    this.scenarioDefinitionMode = null;

    if (scenarioDefinition) {
      this.scenarioDefinition = deepCopy(scenarioDefinition);
    }

    if (scenarioParameters) {
      this.scenarioParameters = deepCopy(scenarioParameters);
    }
  }
}
