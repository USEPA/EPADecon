import JobRequest from '@/implementations/jobs/JobRequest';
import ParameterList from '@/implementations/parameter/ParameterList';

export default interface IJobProvider {
  createJobRequest(scenarioDefinition: ParameterList, scenarioParameters: ParameterList): JobRequest;
  postJobRequest(job: JobRequest): Promise<boolean>;
}
