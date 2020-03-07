import IParameter from '@/interfaces/parameter/IParameter';
import IDefineScenarioSelection from './IDefineScenarioSelection';
import IScenarioParameterSelection from './IScenarioParameterSelection';

export default interface IParameterSelection extends IDefineScenarioSelection, IScenarioParameterSelection {
  currentSelectedParameter: IParameter;
}
