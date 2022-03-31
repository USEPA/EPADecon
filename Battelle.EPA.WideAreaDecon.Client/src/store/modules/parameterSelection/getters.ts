import { GetterTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import { ParameterSelectionStoreGetters } from '@/constants/store/ParameterSelection';

const getters: GetterTree<IParameterSelection, IRootState> = {
  [ParameterSelectionStoreGetters.PARAMETERS_HAVE_CHANGED]: (state: IParameterSelection) => {
    return state.scenarioDefinition.anyParametersChanged() || state.scenarioParameters.anyParametersChanged();
  },
  [ParameterSelectionStoreGetters.CAN_RUN]: (state: IParameterSelection) => {
    return state.scenarioDefinition.allParametersValid() && state.scenarioParameters.allParametersValid();
  },
};

export default getters;
