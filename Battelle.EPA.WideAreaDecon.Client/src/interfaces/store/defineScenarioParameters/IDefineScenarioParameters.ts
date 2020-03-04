import ParameterList from '@/implementations/parameter/ParameterList';
import Parameter from '@/implementations/parameter/Parameter';

export default interface IDefineScenarioParameters {
  baselineScenarioParameters: ParameterList;

  currentScenarioParameters: ParameterList;

  selectedScenarioParameter: Parameter;
}
