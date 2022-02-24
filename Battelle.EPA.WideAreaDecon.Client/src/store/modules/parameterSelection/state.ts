import NullParameter from '@/implementations/parameter/NullParameter';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';

const state: IParameterSelection = {
  scenarioParameters: new ParameterWrapperList(),

  scenarioDefinition: new ParameterWrapperList(),

  scenarioDefinitionMode: null,

  currentSelectedParameter: new ParameterWrapper(null, new NullParameter()),
};

export default state;
