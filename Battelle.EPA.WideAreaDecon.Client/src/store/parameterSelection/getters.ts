import { GetterTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';

const parameterSelectionGetters: GetterTree<IRootState, IRootState> = {
  parametersHaveChanged: (state) => {
    return state.scenarioDefinition.anyParametersChanged() || state.scenarioParameters.anyParametersChanged();
  },
};

export default parameterSelectionGetters;
