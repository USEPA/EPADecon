import { MutationTree } from 'vuex';
import ICurrentJob from '@/interfaces/store/jobs/ICurrentJob';
import JobRequest from '@/implementations/jobs/JobRequest';
import JobStatus from '@/enums/jobs/jobStatus';
import { JobsStoreMutations } from '@/constants/store/Jobs';

const mutations: MutationTree<ICurrentJob> = {
  [JobsStoreMutations.SET_CURRENT_JOB]: (state: ICurrentJob, newJob: JobRequest): void => {
    state.currentJob = newJob;
  },

  [JobsStoreMutations.UPDATE_JOB_ID]: (state: ICurrentJob, id: string): void => {
    state.currentJob.id = id;
  },

  [JobsStoreMutations.UPDATE_JOB_STATUS]: (state: ICurrentJob, status: JobStatus): void => {
    state.currentJob.status = status;
  },

  [JobsStoreMutations.UPDATE_JOB_PROGRESS]: (state: ICurrentJob, progress: number): void => {
    state.currentJob.progress = progress;
  },
};

export default mutations;
