import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import IParameter from '@/interfaces/parameter/IParameter';

const defineScenarioParametersMutations: MutationTree<IRootState> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeSelectedScenarioParameter(state: IRootState, newParameter: IParameter) {
    state.selectedScenarioParameter = newParameter;
  },
};

export default defineScenarioParametersMutations;
