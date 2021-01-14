import ParameterList from '@/implementations/parameter/ParameterList';
import JobStatus from '@/enums/jobs/jobStatus';

export default interface IJobRequest {
  id: number;
  status: JobStatus;
  scenarioDefinition: ParameterList;
  scenarioParameters: ParameterList;
  results?: any; // TODO update type
}
