import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import Parameter from '@/implementations/parameter/Parameter';

const defineScenarioParametersMutations: MutationTree<IRootState> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeSelectedScenarioParameter(state: IRootState, newParameter: Parameter) {
    state.selectedScenarioParameter = newParameter;
  },
};

export default defineScenarioParametersMutations;
