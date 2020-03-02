import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';

const clientConfigurationMutations: MutationTree<IRootState> = {
  exampleClientConfiguration(state) {
    console.log(state);
  },
};

export default clientConfigurationMutations;
