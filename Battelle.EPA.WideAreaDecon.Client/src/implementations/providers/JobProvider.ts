import { injectable } from 'inversify';
import JobStatus from '@/enums/jobs/jobStatus';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import Axios from 'axios';
import { serialize } from 'typescript-json-serializer';
import JobRequest from '../jobs/JobRequest';
import ParameterWrapperList from '../parameter/ParameterWrapperList';

@injectable()
export default class JobProvider implements IJobProvider {
  // eslint-disable-next-line class-methods-use-this
  createJobRequest(
    scenarioDefinition: ParameterWrapperList,
    scenarioParameters: ParameterWrapperList,
    numberRealizations: number,
    seed1: number,
    seed2: number,
  ): JobRequest {
    const job = new JobRequest(JobStatus.new, scenarioDefinition, scenarioParameters, numberRealizations, seed1, seed2);
    return job;
  }

  // eslint-disable-next-line class-methods-use-this
  async postJobRequest(job: JobRequest): Promise<string> {
    const serializedJob = serialize(job);
    return Axios.post<JobRequest>('/api/JobRequest', serializedJob)
      .then((response) => `${response.data}`)
      .catch(() => '');
  }

  // eslint-disable-next-line class-methods-use-this
  async getJob(id: string): Promise<JobRequest> {
    return Axios.get<JobRequest>(`/api/JobRequest`, { params: { id } }).then((response) => response.data);
  }
}
