import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';

const runSettingsMutations: MutationTree<IRootState> = {
  updateRunState(state, newState: boolean): void {
    state.canRun = newState;
  },

  updateHasResults(state, newState: boolean): void {
    state.hasResults = newState;
  },
};

export default runSettingsMutations;
