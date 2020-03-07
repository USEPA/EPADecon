import ParameterList from '@/implementations/parameter/ParameterList';

export default interface IScenarioParameterSelection {
  baselineScenarioParameters: ParameterList;

  currentScenarioParameters: ParameterList;
}
