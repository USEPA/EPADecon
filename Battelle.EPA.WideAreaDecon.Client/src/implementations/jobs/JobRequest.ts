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

  @JsonProperty()
  numberRealizations: number;

  @JsonProperty()
  seed1: number;

  @JsonProperty()
  seed2: number;

  results?: any;

  constructor(
    id: number,
    status: JobStatus = JobStatus.new,
    defineScenario: ParameterWrapperList,
    modifyParameter: ParameterWrapperList,
    numberRealizations: number,
    seed1: number, // default seed values?
    seed2: number,
  ) {
    this.id = id;
    this.status = status;
    this.defineScenario = defineScenario;
    this.modifyParameter = modifyParameter;
    this.numberRealizations = numberRealizations;
    this.seed1 = seed1;
    this.seed2 = seed2;
  }
}
