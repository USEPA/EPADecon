import { ActionContext, ActionTree } from 'vuex';
import IRootState from '@/interfaces/store/IRootState';
import ICreateJobRequestPayload from '@/interfaces/store/jobs/ICreateJobRequestPayload';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import JobStatus from '@/enums/jobs/jobStatus';
import JobRequest from '@/implementations/jobs/JobRequest';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import IGetJobResultsPayload from '@/interfaces/store/jobs/IGetJobResultsPayload';
import ICurrentJob from '@/interfaces/store/jobs/ICurrentJob';
import { JobsStoreActions, JobsStoreMutations } from '@/constants/store/Jobs';
import ContaminationDefinition from '@/implementations/parameter/list/ContaminationDefinition';

const actions: ActionTree<ICurrentJob, IRootState> = {
  [JobsStoreActions.CREATE_JOB_REQUEST]: (
    store: ActionContext<ICurrentJob, IRootState>,
    { jobProvider, numberRealizations, seed1, seed2 }: ICreateJobRequestPayload,
  ) => {
    const job = jobProvider.createJobRequest(
      store.rootState.PARAMETER_SELECTION.scenarioDefinition,
      store.rootState.PARAMETER_SELECTION.scenarioParameters,
      numberRealizations,
      seed1,
      seed2,
      store.rootState.PARAMETER_SELECTION.scenarioDefinitionMode,
    );
    store.commit(JobsStoreMutations.SET_CURRENT_JOB, job);
  },

  [JobsStoreActions.POST_CURRENT_JOB_REQUEST]: async (
    store: ActionContext<ICurrentJob, IRootState>,
    jobProvider: IJobProvider,
  ) => {
    const id = await jobProvider.postJobRequest(store.state.currentJob);
    if (id.length) {
      store.commit(JobsStoreMutations.UPDATE_JOB_ID, id);
    }
  },

  [JobsStoreActions.GET_CURRENT_JOB_RESULTS]: async (
    store: ActionContext<ICurrentJob, IRootState>,
    { jobProvider, resultProvider }: IGetJobResultsPayload,
  ) => {
    const job = await jobProvider.getJobRequest(store.state.currentJob.id);
    if (job) {
      resultProvider.reset();

      // TODO - store map source and location as part of job request
      const prevContamDef = store.state.currentJob.defineScenario.filters[0].parameters[0]
        .current as ContaminationDefinition;
      job.defineScenario.filters[0].parameters[0].current = prevContamDef;

      store.commit(JobsStoreMutations.SET_CURRENT_JOB, job);
    }
  },

  [JobsStoreActions.CANCEL_CURRENT_JOB_REQUEST]: async (
    store: ActionContext<ICurrentJob, IRootState>,
    JobProvider: IJobProvider,
  ) => {
    await JobProvider.cancelJobRequest();
  },

  [JobsStoreActions.RESET_CURRENT_JOB_REQUEST]: (store: ActionContext<ICurrentJob, IRootState>) => {
    const job = new JobRequest(
      JobStatus.unknown,
      new ParameterWrapperList(),
      new ParameterWrapperList(),
      0,
      0,
      0,
      null,
    );
    store.commit(JobsStoreMutations.SET_CURRENT_JOB, job);
  },

  [JobsStoreActions.UPDATE_JOB_STATUS]: (store: ActionContext<ICurrentJob, IRootState>, newStatus: JobStatus) => {
    store.commit(JobsStoreMutations.UPDATE_JOB_STATUS, newStatus);
  },

  [JobsStoreActions.UPDATE_JOB_PROGRESS]: (store: ActionContext<ICurrentJob, IRootState>, newProgress: number) => {
    store.commit(JobsStoreMutations.UPDATE_JOB_PROGRESS, newProgress);
  },
};

export default actions;
