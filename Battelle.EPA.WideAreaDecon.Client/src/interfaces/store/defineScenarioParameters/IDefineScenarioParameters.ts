import ParameterList from '@/implementations/parameter/ParameterList';

export default interface IDefineScenarioParameters {
  baselineScenarioParameters?: ParameterList;

  currentScenarioParameters?: ParameterList;
}
