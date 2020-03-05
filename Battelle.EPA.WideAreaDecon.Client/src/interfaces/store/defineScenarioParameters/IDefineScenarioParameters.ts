import ParameterList from '@/implementations/parameter/ParameterList';
import IParameter from '@/interfaces/parameter/IParameter';

export default interface IDefineScenarioParameters {
  baselineScenarioParameters: ParameterList;

  currentScenarioParameters: ParameterList;

  selectedScenarioParameter: IParameter;
}
