import { ActionTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import IJobProvider from '@/interfaces/providers/IJobProvider';

const jobActions: ActionTree<IRootState, IRootState> = {
  runScenario: ({ state }, jobProvider: IJobProvider) => {
    const job = jobProvider.createJobRequest(state.scenarioDefinition, state.scenarioParameters);
    jobProvider.postJobRequest(job);
  },
};

export default jobActions;
