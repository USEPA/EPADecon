import { GetterTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';

const runSettingsGetters: GetterTree<IRootState, IRootState> = {
  canRun: (state) => {
    return state.scenarioDefinition.allParametersValid() && state.scenarioParameters.allParametersValid();
  },
};

export default runSettingsGetters;
