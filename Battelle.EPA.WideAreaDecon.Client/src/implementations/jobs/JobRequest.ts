import JobStatus from '@/enums/jobs/jobStatus';
import IJobRequest from '@/interfaces/jobs/IJobRequest';
import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';

@Serializable()
export default class JobRequest implements IJobRequest {
  @JsonProperty()
  id: number;

  status: JobStatus;

  @JsonProperty()
  scenarioDefinition: ParameterWrapperList;

  @JsonProperty()
  scenarioParameters: ParameterWrapperList;

  results?: any;

  constructor(
    id: number,
    status: JobStatus = JobStatus.new,
    scenarioDefinition: ParameterWrapperList,
    scenarioParameters: ParameterWrapperList,
    results?: any,
  ) {
    this.id = id;
    this.status = status;
    this.scenarioDefinition = scenarioDefinition;
    this.scenarioParameters = scenarioParameters;
    this.results = results;
  }
}
