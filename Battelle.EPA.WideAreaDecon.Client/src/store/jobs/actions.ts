import { ActionTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import IRunScenarioPayload from '@/interfaces/store/jobs/IRunScenarioPayload';

const jobActions: ActionTree<IRootState, IRootState> = {
  runScenario: ({ state }, { jobProvider, numberRealizations, seed1, seed2 }: IRunScenarioPayload) => {
    const job = jobProvider.createJobRequest(
      state.scenarioDefinition,
      state.scenarioParameters,
      numberRealizations,
      seed1,
      seed2,
    );
    jobProvider.postJobRequest(job);
  },
};

export default jobActions;
