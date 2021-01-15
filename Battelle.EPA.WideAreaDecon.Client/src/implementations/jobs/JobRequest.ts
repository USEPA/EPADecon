import JobStatus from '@/enums/jobs/jobStatus';
import IJobRequest from '@/interfaces/jobs/IJobRequest';
import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';

@Serializable()
export default class JobRequest implements IJobRequest {
  // @JsonProperty()
  id: number;

  status: JobStatus;

  @JsonProperty()
  defineScenario: ParameterWrapperList;

  @JsonProperty()
  modifyParameter: ParameterWrapperList;

  results?: any;

  constructor(
    id: number,
    status: JobStatus = JobStatus.new,
    defineScenario: ParameterWrapperList,
    modifyParameter: ParameterWrapperList,
    results?: any,
  ) {
    this.id = id;
    this.status = status;
    this.defineScenario = defineScenario;
    this.modifyParameter = modifyParameter;
    this.results = results;
  }
}
