import JobRequest from '@/implementations/jobs/JobRequest';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';

export default interface IJobProvider {
  createJobRequest(scenarioDefinition: ParameterWrapperList, scenarioParameters: ParameterWrapperList): JobRequest;
  postJobRequest(job: JobRequest): Promise<boolean>;
}
