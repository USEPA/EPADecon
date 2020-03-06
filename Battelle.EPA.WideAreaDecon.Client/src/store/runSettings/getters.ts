import { GetterTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';

const runSettingsGetters: GetterTree<IRootState, IRootState> = {
  canRun: (state) => {
    return state.currentScenarioDefinition.allParametersValid(); // state.currentScenarioParameters.allParametersValid();
  },
};

export default runSettingsGetters;
