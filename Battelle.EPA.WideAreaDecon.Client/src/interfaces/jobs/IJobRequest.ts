import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import JobStatus from '@/enums/jobs/jobStatus';

export default interface IJobRequest {
  id: number;
  status: JobStatus;
  defineScenario: ParameterWrapperList;
  modifyParameter: ParameterWrapperList;
  numberRealizations: number;
  seed1: number;
  seed2: number;
  results?: any; // TODO update type
}
