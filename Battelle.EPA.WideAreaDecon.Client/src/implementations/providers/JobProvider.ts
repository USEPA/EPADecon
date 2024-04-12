import { injectable } from 'inversify';
import JobStatus from '@/enums/jobs/jobStatus';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import Axios from 'axios';
import { deserialize, serialize } from 'typescript-json-serializer';
import JobRequest from '../jobs/JobRequest';
import ParameterWrapperList from '../parameter/ParameterWrapperList';
import { ScenarioDefinitionMode } from '@/types';

@injectable()
export default class JobProvider implements IJobProvider {
  readonly url = '/api/JobRequest';

  /* eslint-disable class-methods-use-this */
  createJobRequest(
    scenarioDefinition: ParameterWrapperList,
    scenarioParameters: ParameterWrapperList,
    numberRealizations: number,
    seed1: number,
    seed2: number,
    definitionMode: ScenarioDefinitionMode | null,
  ): JobRequest {
    const job = new JobRequest(
      JobStatus.new,
      scenarioDefinition,
      scenarioParameters,
      numberRealizations,
      seed1,
      seed2,
      definitionMode,
    );
    return job;
  }

  postJobRequest(job: JobRequest): Promise<string> {
    const serializedJob = serialize(job);
    return Axios.post<string>(this.url, serializedJob).then((response) => response.data);
  }

  getJobRequest(id: string): Promise<JobRequest> {
    return Axios.get<JobRequest>(this.url, { params: { id } }).then((response) =>
      deserialize<JobRequest>(response.data, JobRequest),
    );
  }

  cancelJobRequest(): void {
    Axios.delete(this.url);
  }
}
