import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import JobStatus from '@/enums/jobs/jobStatus';

export default interface IJobRequest {
  id: number;
  status: JobStatus;
  scenarioDefinition: ParameterWrapperList;
  scenarioParameters: ParameterWrapperList;
  results?: any; // TODO update type
}
