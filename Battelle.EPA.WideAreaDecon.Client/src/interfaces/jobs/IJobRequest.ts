import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import JobStatus from '@/enums/jobs/jobStatus';

export default interface IJobRequest {
  id: number;
  status: JobStatus;
  defineScenario: ParameterWrapperList;
  modifyParameter: ParameterWrapperList;
  results?: any; // TODO update type
}
