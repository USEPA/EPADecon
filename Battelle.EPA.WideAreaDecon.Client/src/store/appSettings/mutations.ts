import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';

const appSettingsMutations: MutationTree<IRootState> = {
  exampleAppSettingsMutations(state) {
    console.log(state);
  },
};

export default appSettingsMutations;
