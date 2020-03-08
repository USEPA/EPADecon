import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';

const parameterSelectionMutations: MutationTree<IRootState> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeCurrentSelectedParameter(state: IRootState, newParameter: ParameterWrapper) {
    state.currentSelectedParameter = newParameter;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resetCurrentSelectedParameter(state: IRootState) {
    state.currentSelectedParameter.reset();
  },
};

export default parameterSelectionMutations;
