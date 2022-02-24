import { MutationTree } from 'vuex';
import { RunSettingsStoreMutations } from '@/constants/store/RunSettings';
import IRunSettings from '@/interfaces/store/runSettings/IRunSettings';

const runSettingsMutations: MutationTree<IRunSettings> = {
  [RunSettingsStoreMutations.UPDATE_RUN_STATE](state, newState: boolean): void {
    state.canRun = newState;
  },

  [RunSettingsStoreMutations.UPDATE_HAS_RESULTS](state, newState: boolean): void {
    state.hasResults = newState;
  },
};

export default runSettingsMutations;
