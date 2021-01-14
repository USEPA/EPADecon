import JobStatus from '@/enums/jobs/jobStatus';
import IJobRequest from '@/interfaces/jobs/IJobRequest';
import { JsonProperty, Serializable } from 'typescript-json-serializer';
import ParameterList from '@/implementations/parameter/ParameterList';

@Serializable()
export default class JobRequest implements IJobRequest {
  @JsonProperty()
  id: number;

  status: JobStatus;

  @JsonProperty()
  scenarioDefinition: ParameterList;

  @JsonProperty()
  scenarioParameters: ParameterList;

  results?: any;

  constructor(
    id: number,
    status: JobStatus = JobStatus.new,
    scenarioDefinition: ParameterList,
    scenarioParameters: ParameterList,
    results?: any,
  ) {
    this.id = id;
    this.status = status;
    this.scenarioDefinition = scenarioDefinition;
    this.scenarioParameters = scenarioParameters;
    this.results = results;
  }
}
