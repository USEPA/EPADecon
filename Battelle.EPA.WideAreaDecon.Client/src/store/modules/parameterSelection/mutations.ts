import { MutationTree } from 'vuex';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import IParameter from '@/interfaces/parameter/IParameter';
import { ScenarioDefinitionMode } from '@/types';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import { ParameterSelectionStoreMutations } from '@/constants/store/ParameterSelection';

const mutations: MutationTree<IParameterSelection> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [ParameterSelectionStoreMutations.CHANGE_CURRENT_SELECTED_PARAMETER]: (
    state: IParameterSelection,
    newParameter: ParameterWrapper,
  ) => {
    state.currentSelectedParameter = newParameter;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [ParameterSelectionStoreMutations.RESET_CURRENT_SELECTED_PARAMETER]: (state: IParameterSelection) => {
    state.currentSelectedParameter.reset();
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [ParameterSelectionStoreMutations.CHANGE_CURRENT_PARAMETER_TYPE]: (
    state: IParameterSelection,
    updatedParameter: IParameter,
  ) => {
    state.currentSelectedParameter.current = updatedParameter;
  },
  [ParameterSelectionStoreMutations.SET_SCENARIO_DEFINITION]: (
    state: IParameterSelection,
    newDefinition: ParameterWrapperList,
  ) => {
    state.scenarioDefinition = newDefinition;
  },
  [ParameterSelectionStoreMutations.SET_SCENARIO_PARAMETERS]: (
    state: IParameterSelection,
    newParameters: ParameterWrapperList,
  ) => {
    state.scenarioParameters = newParameters;
  },
  [ParameterSelectionStoreMutations.SET_SCENARIO_DEFINITION_MODE]: (
    state: IParameterSelection,
    newMode: ScenarioDefinitionMode | null,
  ) => {
    state.scenarioDefinitionMode = newMode;
  },
};

export default mutations;
