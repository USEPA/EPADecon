import { MutationTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import IParameter from '@/interfaces/parameter/IParameter';

const parameterSelectionMutations: MutationTree<IRootState> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeCurrentSelectedParameter(state: IRootState, newParameter: ParameterWrapper) {
    state.currentSelectedParameter = newParameter;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resetCurrentSelectedParameter(state: IRootState) {
    state.currentSelectedParameter.reset();
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeCurrentParameterType(state: IRootState, updatedParameter: IParameter) {
    state.currentSelectedParameter.current = updatedParameter;
  },
};

export default parameterSelectionMutations;
