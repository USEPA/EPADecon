import { injectable } from 'inversify';
import JobStatus from '@/enums/jobs/jobStatus';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import Axios from 'axios';
import { serialize } from 'typescript-json-serializer';
import JobRequest from '../jobs/JobRequest';
import ParameterWrapperList from '../parameter/ParameterWrapperList';

@injectable()
export default class JobProvider implements IJobProvider {
  // eslint-disable-next-line class-methods-use-this
  createJobRequest(
    scenarioDefinition: ParameterWrapperList,
    scenarioParameters: ParameterWrapperList,
    numberRealizations: number,
    seed1: number,
    seed2: number,
  ): JobRequest {
    const job = new JobRequest(JobStatus.new, scenarioDefinition, scenarioParameters, numberRealizations, seed1, seed2);
    return job;
  }

  // eslint-disable-next-line class-methods-use-this
  async postJobRequest(job: JobRequest): Promise<string> {
    const serializedJob = serialize(job);
    return Axios.post<JobRequest>('/api/JobRequest', serializedJob)
      .then((response) => `${response.data}`)
      .catch(() => '');
  }

  // eslint-disable-next-line class-methods-use-this
  async getJob(id: string): Promise<JobRequest> {
    return Axios.get<JobRequest>(`/api/JobRequest`, { params: { id } }).then((response) => response.data);
  }

  // eslint-disable-next-line class-methods-use-this
  exportJobResults(job: JobRequest): void {
    const { results } = job;
    if (!results) {
      return;
    }

    const categoryHeaders = [
      '',
      '',
      'Characterization Sampling',
      '',
      '',
      'Source Reduction',
      '',
      '',
      'Decontamination',
      '',
      '',
      'Incident Command',
      '',
      'Other',
      'General',
      '',
    ];

    const colHeaders = ['', '', ...results.flatMap((r) => Object.values(r.Outdoor).flatMap((ps) => Object.keys(ps)))];

    const indoorResults = results.map((r) =>
      Object.entries(r.Indoor)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map(([b, res]) => ['', b, ...Object.values(res).flatMap((ps: any) => Object.values(ps))])
        .join('\n'),
    );
    const outdoorResults = [
      '',
      '',
      ...results.flatMap((r) => Object.values(r.Outdoor).flatMap((ps) => Object.values(ps))),
    ];
    const underGroundResults = [
      '',
      '',
      ...results.flatMap((r) => Object.values(r.Underground).flatMap((ps) => Object.values(ps))),
    ];

    const rows = [
      categoryHeaders,
      ['Indoor'],
      ['', 'Building', ...colHeaders.filter((_, i) => i !== 0 && i !== 1)],
      indoorResults,
      [''], // Empty row
      ['Outdoor'],
      colHeaders,
      outdoorResults,
      [''], // Empty row
      ['Underground'],
      colHeaders,
      underGroundResults,
    ];

    const csvContent = `data:text/csv;charset=utf-8,${rows.map((e) => e.join(',')).join('\n')}`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'job_results.csv');
    document.body.appendChild(link); // Required for FF

    link.click(); // download file
  }
}
