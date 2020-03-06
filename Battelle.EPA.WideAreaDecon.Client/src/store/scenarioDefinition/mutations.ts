import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import IParameter from '@/interfaces/parameter/IParameter';

const defineScenarioDefinitionMutations: MutationTree<IRootState> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeSelectedScenarioDefinitionParameter(state: IRootState, newParameter: IParameter) {
    state.selectedScenarioDefinitionParameter = newParameter;
  },
};

export default defineScenarioDefinitionMutations;
