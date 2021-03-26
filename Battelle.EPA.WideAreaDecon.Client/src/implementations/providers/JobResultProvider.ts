import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import JobRequest from '@/implementations/jobs/JobRequest';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import BuildingCategory from '@/enums/parameter/buildingCategory';

export default class JobResultProvider implements IJobResultProvider {
  /* eslint-disable class-methods-use-this */
  exportJobResults(job: JobRequest): void {
    const { results } = job;
    if (!results.length) {
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

  getRealizationResults(job: JobRequest, realization: number): IJobResultRealization {
    const realizationIndex = realization - 1;
    return job.results[realizationIndex];
  }
}
