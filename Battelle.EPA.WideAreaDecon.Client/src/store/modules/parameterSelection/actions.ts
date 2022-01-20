import { ParameterSelectionStoreActions, ParameterSelectionStoreMutations } from '@/constants/store/ParameterSelection';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import IRootState from '@/interfaces/store/IRootState';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import { ScenarioDefinitionMode } from '@/types';
import { ActionContext, ActionTree } from 'vuex';

const actions: ActionTree<IParameterSelection, IRootState> = {
  [ParameterSelectionStoreActions.SET_SCENARIO_DEFINITION]: (
    store: ActionContext<IParameterSelection, IRootState>,
    newDefinition: ParameterWrapperList,
  ): void => {
    store.commit(ParameterSelectionStoreMutations.SET_SCENARIO_DEFINITION, newDefinition);
  },
  [ParameterSelectionStoreActions.SET_SCENARIO_PARAMETERS]: (
    store: ActionContext<IParameterSelection, IRootState>,
    newParameters: ParameterWrapperList,
  ): void => {
    store.commit(ParameterSelectionStoreMutations.SET_SCENARIO_PARAMETERS, newParameters);
  },
  [ParameterSelectionStoreActions.SET_SCENARIO_DEFINITION_MODE]: (
    store: ActionContext<IParameterSelection, IRootState>,
    newMode: ScenarioDefinitionMode | null,
  ): void => {
    store.commit(ParameterSelectionStoreMutations.SET_SCENARIO_DEFINITION_MODE, newMode);
  },
  [ParameterSelectionStoreActions.RESET_CURRENT_SELECTED_PARAMETER]: (
    store: ActionContext<IParameterSelection, IRootState>,
  ): void => {
    store.commit(ParameterSelectionStoreMutations.RESET_CURRENT_SELECTED_PARAMETER);
  },
};

export default actions;
