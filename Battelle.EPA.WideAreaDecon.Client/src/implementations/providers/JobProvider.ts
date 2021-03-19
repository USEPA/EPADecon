import { injectable } from 'inversify';
import JobStatus from '@/enums/jobs/jobStatus';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import Axios from 'axios';
import XLSX from 'xlsx';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IPhaseResult from '@/interfaces/jobs/results/IPhaseResult';
import { serialize } from 'typescript-json-serializer';
import JobRequest from '../jobs/JobRequest';
import ParameterWrapperList from '../parameter/ParameterWrapperList';

@injectable()
export default class JobProvider implements IJobProvider {
  /* eslint-disable class-methods-use-this */
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

  async postJobRequest(job: JobRequest): Promise<string> {
    const serializedJob = serialize(job);
    return Axios.post<string>('/api/JobRequest', serializedJob).then((response) => response.data);
  }

  async getJob(id: string): Promise<JobRequest> {
    return Axios.get<JobRequest>(`/api/JobRequest`, { params: { id } }).then((response) => response.data);
  }

  exportJobResults(job: JobRequest): void {
    const { results } = job;
    if (!results) {
      return;
    }

    const wb = XLSX.utils.book_new();

    // Headers for each phase
    const phaseHeaders = [
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
    ];

    // Get headers for each result
    const resultHeaders = Object.values(results[0].Outdoor).flatMap((pr) =>
      Object.keys(pr).map((p) => this.formatHeader(p)),
    );

    // Headers for average results
    const averageHeaders = resultHeaders.map((h) => `Average ${h}`);

    // Build arrays for each location
    const buildings = Object.keys(results[0].Indoor);
    const indoor = buildings.map((b) =>
      this.buildLocationResults(results, b, phaseHeaders, resultHeaders, averageHeaders, true),
    );
    const outdoor = this.buildLocationResults(results, 'Outdoor', phaseHeaders, resultHeaders, averageHeaders);
    const underground = this.buildLocationResults(results, 'Underground', phaseHeaders, resultHeaders, averageHeaders);

    const runData = [
      ['Data exported on: ', new Date(Date.now()).toLocaleString()],
      ['Number of realizations: ', job.numberRealizations],
    ];

    // Create worksheets from arrays
    const dataWS = XLSX.utils.aoa_to_sheet(runData);
    const indWS = indoor.map((aoa) => XLSX.utils.aoa_to_sheet(aoa));
    const outWS = XLSX.utils.aoa_to_sheet(outdoor);
    const undWS = XLSX.utils.aoa_to_sheet(underground);

    // Add worksheets to workbook
    XLSX.utils.book_append_sheet(wb, dataWS, 'Data');
    indWS.forEach((WS, i) => XLSX.utils.book_append_sheet(wb, WS, `${buildings[i]} Building`));
    XLSX.utils.book_append_sheet(wb, outWS, 'Outdoor');
    XLSX.utils.book_append_sheet(wb, undWS, 'Underground');

    // Download workbook
    XLSX.writeFile(wb, 'Results.xlsx');
  }

  private parseLocationRealizationResults(
    results: IJobResultRealization[],
    location: string,
    isIndoor: boolean,
  ): (number | undefined)[][] {
    return results.map((r, i) => [
      i + 1,
      ...Object.values(isIndoor ? r.Indoor[location] : r[location]).flatMap((p: IPhaseResult) => Object.values(p)),
    ]);
  }

  private formatHeader(header: string): string {
    const withSpaces = header.split(/(?=[A-Z])/).join(' ');
    return `${withSpaces.substring(0, 1).toUpperCase()}${withSpaces.substring(1, withSpaces.length)}`;
  }

  private buildLocationResults(
    results: IJobResultRealization[],
    location: string,
    phaseHeaders: string[],
    resultHeaders: string[],
    averageHeaders: string[],
    isIndoor = false,
  ): (string | number | undefined)[][] {
    return [
      [`${isIndoor ? `${location} Building` : location} Results`],
      [''], // empty row
      ['', ...phaseHeaders],
      ['', ...averageHeaders],
      ['', ...this.calculateAverages(results, location, isIndoor)],
      [''],
      [''],
      ['Realization Results'],
      [''],
      ['', ...phaseHeaders],
      ['Realization', ...resultHeaders],
      ...this.parseLocationRealizationResults(results, location, isIndoor),
    ];
  }

  private calculateAverages(results: IJobResultRealization[], location: string, isIndoor: boolean): number[] {
    const { length } = results;
    const vals = this.parseLocationRealizationResults(results, location, isIndoor).map((v) => v.slice(1));

    return vals
      .reduce((acc, cur) => {
        return cur.map((x, i) => (acc[i] ?? 0) + (x ?? 0));
      }, [])
      .map((v) => (v ?? 0) / length);
  }
}
