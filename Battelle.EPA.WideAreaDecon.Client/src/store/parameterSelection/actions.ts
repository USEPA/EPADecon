import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import IRootState from '@/interfaces/store/IRootState';
import { ScenarioDefinitionMode } from '@/types';
import { ActionTree } from 'vuex';

const parameterSelectionActions: ActionTree<IRootState, IRootState> = {
  setScenarioDefinition({ commit }, newDefinition: ParameterWrapperList): void {
    commit('setScenarioDefinition', newDefinition);
  },
  setScenarioParameters({ commit }, newParameters: ParameterWrapperList): void {
    commit('setScenarioParameters', newParameters);
  },
  setScenarioDefinitionMode({ commit }, newMode: ScenarioDefinitionMode | null): void {
    commit('setScenarioDefinitionMode', newMode);
  },
};

export default parameterSelectionActions;
