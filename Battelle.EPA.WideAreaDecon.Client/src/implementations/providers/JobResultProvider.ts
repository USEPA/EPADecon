import { injectable } from 'inversify';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import IPhaseResultSet from '@/interfaces/jobs/results/IPhaseResultSet';
import PhaseResult from '@/enums/jobs/results/phaseResult';

@injectable()
export default class JobResultProvider implements IJobResultProvider {
  /* eslint-disable class-methods-use-this */
  exportJobResults(results: IJobResultRealization[]): void {
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

  formatNumber(number: number): string {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  formatResultPhaseName(name: string): string {
    const regex = /([A-Z](?=[A-Z][a-z])|[^A-Z](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z]))/g;
    return `${name.charAt(0).toUpperCase()}${name.slice(1).replace(regex, '$1 ')}`;
  }

  getRealizationResults(allResults: IJobResultRealization[], realizationNumber: number): IJobResultRealization {
    const realizationIndex = realizationNumber - 1;
    return allResults[realizationIndex];
  }

  getResultPhaseBreakdown(realization: IJobResultRealization, result: PhaseResult): { phase: string; value: number }[] {
    const phaseNames = Object.keys(realization.Outdoor);
    const breakdown: number[] = [];

    this.findResultValues(realization, result, (value: number | undefined, index: number) => {
      const res = value ?? 0;

      if (breakdown[index] !== undefined) {
        breakdown[index] += res;
      } else {
        breakdown.push(res);
      }
    });

    return breakdown
      .filter((v) => v > 0)
      .map((v, i) => {
        return {
          phase: phaseNames[i].replace(/Results$/, ''),
          value: v,
        };
      });
  }

  getResultDetails(allResults: IJobResultRealization[], result: PhaseResult): IResultDetails {
    const instances: number[] = [];

    allResults.forEach((r) => {
      this.findResultValues(r, result, (value: number | undefined) => {
        if (value !== undefined) {
          instances.push(value);
        }
      });
    });

    const { minimum, maximum } = this.getMinandMax(instances);
    const mean = instances.reduce((acc, cur) => acc + cur, 0) / instances.length;
    const stdDev = Math.sqrt(instances.map((x) => (x - mean) ** 2).reduce((a, b) => a + b) / instances.length);

    return {
      mean,
      maximum,
      minimum,
      stdDev,
    };
  }

  private findResultValues(
    realization: IJobResultRealization,
    result: PhaseResult,
    callback: (value: number | undefined, index: number) => void,
  ): void {
    const phaseNames = Object.keys(realization.Outdoor);

    Object.entries(realization).forEach(([location, resultSet]) => {
      const phaseResultSets: IPhaseResultSet[] = this.isIndoor(location) ? Object.values(resultSet) : [resultSet];

      phaseResultSets.forEach((rs) => {
        phaseNames.forEach((p, i) => {
          callback(rs[p][result], i);
        });
      });
    });
  }

  private isIndoor(location: string): boolean {
    return location === 'Indoor';
  }

  // credit to Lior Elrom's answer https://stackoverflow.com/a/52613528
  private getMinandMax(arr: number[]): { minimum: number; maximum: number } {
    let minimum = arr[0];
    let maximum = arr[1];
    let i = arr.length;

    while (i) {
      minimum = arr[i] < minimum ? arr[i] : minimum;
      maximum = arr[i] > maximum ? arr[i] : maximum;
      i -= 1;
    }

    return { minimum, maximum };
  }
}
