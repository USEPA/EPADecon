import { GetterTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';

const runSettingsGetters: GetterTree<IRootState, IRootState> = {
  canRun: (state) => {
    return state.currentScenarioParameters.allParametersValid(); // state.currentScenarioParameters.allParametersValid();
  },
};

export default runSettingsGetters;
