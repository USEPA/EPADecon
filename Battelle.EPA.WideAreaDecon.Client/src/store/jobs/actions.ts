import { ActionTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import ICreateJobRequestPayload from '@/interfaces/store/jobs/ICreateJobRequestPayload';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import JobStatus from '@/enums/jobs/jobStatus';

const jobRequestActions: ActionTree<IRootState, IRootState> = {
  createJobRequest: (
    { commit, state },
    { jobProvider, numberRealizations, seed1, seed2 }: ICreateJobRequestPayload,
  ) => {
    const job = jobProvider.createJobRequest(
      state.scenarioDefinition,
      state.scenarioParameters,
      numberRealizations,
      seed1,
      seed2,
    );
    commit('setCurrentJob', job);
  },

  postCurrentJobRequest: async ({ commit, state }, jobProvider: IJobProvider) => {
    const id = await jobProvider.postJobRequest(state.currentJob);
    if (id.length) {
      commit('updateJobId', id);
    }
  },

  getCurrentJobResults: async ({ commit, state }, jobProvider: IJobProvider) => {
    const job = await jobProvider.getJob(state.currentJob.id);
    if (job) {
      commit('setCurrentJob', job);
    }
  },

  UpdateJobStatus: ({ commit }, newStatus: JobStatus) => {
    commit('updateJobStatus', newStatus);
  },

  UpdateJobProgress: ({ commit }, newProgress: number) => {
    commit('updateJobProgress', newProgress);
  },
};

export default jobRequestActions;
