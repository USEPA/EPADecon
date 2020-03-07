import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import IParameter from '@/interfaces/parameter/IParameter';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';

const parameterSelectionMutations: MutationTree<IRootState> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeCurrentSelectedParameter(state: IRootState, newParameter: ParameterWrapper) {
    state.currentSelectedParameter = newParameter;
  },
};

export default parameterSelectionMutations;
