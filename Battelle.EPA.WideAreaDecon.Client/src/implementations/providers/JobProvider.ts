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
  createJobRequest(scenarioDefinition: ParameterWrapperList, scenarioParameters: ParameterWrapperList): JobRequest {
    const job = new JobRequest(1, JobStatus.new, scenarioDefinition, scenarioParameters);
    return job;
  }

  // eslint-disable-next-line class-methods-use-this
  async postJobRequest(job: JobRequest): Promise<boolean> {
    const serializedJob = serialize(job);
    return Axios.post<JobRequest>('/api/JobRequest', serializedJob)
      .then((response) => true) // TODO implement response handling
      .catch((error) => false);
  }
}
