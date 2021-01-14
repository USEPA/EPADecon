import { ActionTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import container from '@/dependencyInjection/config';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import TYPES from '@/dependencyInjection/types';

const jobActions: ActionTree<IRootState, IRootState> = {
  runScenario: ({ state }) => {
    const jobProvider = container.get<IJobProvider>(TYPES.JobProvider);
    const job = jobProvider.createJobRequest(state.scenarioDefinition, state.scenarioParameters);
    jobProvider.postJobRequest(job);
  },
};

export default jobActions;
