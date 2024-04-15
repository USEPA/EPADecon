import JobRequest from '@/implementations/jobs/JobRequest';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import { ScenarioDefinitionMode } from '@/types';

export default interface IJobProvider {
  createJobRequest(
    scenarioDefinition: ParameterWrapperList,
    scenarioParameters: ParameterWrapperList,
    numberRealizations: number,
    seed1: number,
    seed2: number,
    definitionMode: ScenarioDefinitionMode | null,
  ): JobRequest;
  postJobRequest(job: JobRequest): Promise<string>;
  getJobRequest(id: string): Promise<JobRequest>;
  cancelJobRequest(): void;
}
