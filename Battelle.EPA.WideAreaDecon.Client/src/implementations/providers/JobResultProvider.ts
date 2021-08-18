import { injectable } from 'inversify';
import XLSX from 'xlsx';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import IPhaseResultSet from '@/interfaces/jobs/results/IPhaseResultSet';
import PhaseResult from '@/enums/jobs/results/phaseResult';
import IPhaseResult from '@/interfaces/jobs/results/phase/IPhaseResult';
import JobRequest from '../jobs/JobRequest';

@injectable()
export default class JobResultProvider implements IJobResultProvider {
  /* eslint-disable class-methods-use-this */
  exportJobResults(job: JobRequest): void {
    const { results } = job;
    if (!results || !results.length) {
      return;
    }

    const wb = XLSX.utils.book_new();

    const runData = [
      ['Data exported on: ', new Date(Date.now()).toLocaleString()],
      ['Number of realizations: ', results.length],
      ['Seed 1:', job.seed1.toString()],
      ['Seed 2:', job.seed2.toString()],
    ];
    this.excelAddToWorkbook(runData, wb, 'Data');

    const { scenarioResults } = results[0];
    const existingLocation =
      scenarioResults.outdoorResults ??
      scenarioResults.undergroundResults ??
      Object.values(scenarioResults.indoorResults)[0];

    // Get headers for each phase
    const phaseHeaders: string[] = Object.entries(existingLocation).flatMap(([p, rs]) => {
      const phase = [this.convertCamelToTitleCase(p.replace(/Results$/, ''))];
      [...Array(Object.keys(rs).length - 1)].forEach(() => phase.push(''));
      return phase;
    });

    // Get headers for each result
    const resultHeaders = Object.values(existingLocation).flatMap((pr) =>
      Object.keys(pr).map((p) => this.convertCamelToTitleCase(p)),
    );

    // Headers for average results
    const averageHeaders = resultHeaders.map((h) => `Average ${h}`);

    // INDOOR
    if (results[0].scenarioResults.indoorResults) {
      // Build arrays for each location
      const buildings = Object.keys(results[0].scenarioResults.indoorResults);
      const indoor = buildings.map((b) =>
        this.excelBuildLocationResults(results, b, phaseHeaders, resultHeaders, averageHeaders, true),
      );

      // Get sum of all buildings (this is likely only temporary)
      const indoorSum = this.excelBuildLocationResults(
        results,
        buildings[0],
        phaseHeaders,
        resultHeaders,
        averageHeaders,
        true,
      );
      indoorSum.splice(0, 1, ['Sum of Indoor Results']);
      const avgSum = [
        '',
        ...buildings
          .map((b) => this.excelCalculateAverages(results, b, true))
          .reduce((acc, cur) => {
            return cur.map((v, i) => acc[i] + v);
          }),
      ];
      indoorSum.splice(4, indoorSum.length - 1, avgSum);

      // Add sheets to workbook
      indoor.forEach((ws, i) => this.excelAddToWorkbook(ws, wb, `${buildings[i]} Building`));
      this.excelAddToWorkbook(indoorSum, wb, 'Indoor');
    }

    // OUTDOOR
    if (results[0].scenarioResults.outdoorResults) {
      const outdoor = this.excelBuildLocationResults(results, 'Outdoor', phaseHeaders, resultHeaders, averageHeaders);
      this.excelAddToWorkbook(outdoor, wb, 'Outdoor');
    }

    // UNDERGROUND
    if (results[0].scenarioResults.undergroundResults) {
      const underground = this.excelBuildLocationResults(
        results,
        'Underground',
        phaseHeaders,
        resultHeaders,
        averageHeaders,
      );
      this.excelAddToWorkbook(underground, wb, 'Underground');
    }

    const event = this.excelBuildEventResults(results);
    this.excelAddToWorkbook(event, wb, 'Event');

    // Download workbook
    XLSX.writeFile(wb, 'Results.xlsx');
  }

  formatNumber(number: number): string {
    return number.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  convertCamelToTitleCase(name: string): string {
    const regex = /([A-Z](?=[A-Z][a-z])|[^A-Z](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z]))/g;
    return `${name.charAt(0).toUpperCase()}${name.slice(1).replace(regex, '$1 ')}`;
  }

  getRealizationResults(allResults: IJobResultRealization[], realizationNumber: number): IJobResultRealization {
    const realizationIndex = realizationNumber - 1;
    return allResults[realizationIndex];
  }

  getResultPhaseBreakdown(realization: IJobResultRealization, result: PhaseResult): { phase: string; value: number }[] {
    const phaseNames = this.getPhaseNames(realization);
    const breakdown: { phase: string; value: number }[] = [];

    this.findResultValues(realization, result, (value: number | undefined, index: number) => {
      const res = value ?? 0;

      if (breakdown[index] !== undefined) {
        breakdown[index].value += res;
      } else {
        breakdown.push({
          phase: phaseNames[index].replace(/Results$/, ''),
          value: res,
        });
      }
    });

    return breakdown.filter((v) => v.value > 0);
  }

  getResultDetails(allResults: IJobResultRealization[], result: PhaseResult): IResultDetails | undefined {
    const instances: number[] = [];

    // get all instances of the result
    allResults.forEach((r) => {
      this.findResultValues(r, result, (value: number | undefined) => {
        if (value !== undefined) {
          instances.push(value);
        }
      });
    });

    if (!instances.length) {
      return undefined;
    }

    const indoorLocations = Object.values(allResults[0].scenarioResults.indoorResults).filter((resultSet) => resultSet)
      .length;
    const otherLocations = Object.values(allResults[0].scenarioResults).filter((resultSet) => resultSet).length - 1;
    const numLocations = indoorLocations + otherLocations;
    const numOccurencesPerLocation = instances.length / (allResults.length * numLocations);
    const sums: number[] = [];

    while (instances.length > 0) {
      const next: number[] =
        numOccurencesPerLocation === 1
          ? instances.splice(0, numLocations)
          : [...Array(numLocations)].map(() => {
              return instances.splice(0, numOccurencesPerLocation).reduce((acc, cur) => acc + cur, 0);
            });

      const sum = next.reduce((acc, cur) => acc + cur, 0);
      sums.push(sum);
    }

    const { minimum, maximum } = this.getMinandMax(sums);

    // credit to Foxcode's answer: https://stackoverflow.com/a/53577159
    const { length } = sums;
    const mean = sums.reduce((acc, cur) => acc + cur, 0) / length ?? undefined;
    let stdDev = Math.sqrt(sums.map((x) => (x - mean) ** 2).reduce((a, b) => a + b, 0) / (length - 1)) ?? undefined;
    if (Number.isNaN(stdDev)) {
      stdDev = 0;
    }

    return {
      values: sums,
      mean,
      maximum,
      minimum,
      stdDev,
    };
  }

  getResultValues(realization: IJobResultRealization, result: PhaseResult): number[] {
    const values: number[] = [];
    this.findResultValues(realization, result, (value) => {
      if (value) {
        values.push(value);
      }
    });
    return values;
  }

  getUnits(result: PhaseResult): string | undefined {
    switch (result) {
      case PhaseResult.AreaContaminated:
        return 'm^2';
      case PhaseResult.TotalCost:
      case PhaseResult.PhaseCost:
        return '$';
      default:
        return undefined;
    }
  }

  private findResultValues(
    realization: IJobResultRealization,
    result: PhaseResult,
    callback: (value: number | undefined, index: number) => void,
  ): void {
    const phaseNames = this.getPhaseNames(realization);

    Object.entries(realization.scenarioResults).forEach(([location, resultSet]) => {
      if (!resultSet) {
        return;
      }

      const phaseResultSets: IPhaseResultSet[] = this.isIndoor(location) ? Object.values(resultSet) : [resultSet];

      phaseResultSets.forEach((rs) => {
        phaseNames.forEach((p, i) => {
          callback(rs[p][result], i);
        });
      });
    });
  }

  private isIndoor(location: string): boolean {
    return location.toLowerCase().includes('indoor');
  }

  // credit to Lior Elrom's answer https://stackoverflow.com/a/52613528
  private getMinandMax(arr: number[]): { minimum: number; maximum: number } {
    let minimum = arr[0];
    let maximum = arr[0];
    let i = arr.length;

    while (i) {
      minimum = arr[i] < minimum ? arr[i] : minimum;
      maximum = arr[i] > maximum ? arr[i] : maximum;
      i -= 1;
    }

    return { minimum, maximum };
  }

  private excelParseLocationRealizationResults(
    results: IJobResultRealization[],
    location: string,
    isIndoor: boolean,
  ): (number | undefined)[][] {
    return results.map((r, i) => [
      i + 1,
      ...Object.values(
        isIndoor
          ? r.scenarioResults.indoorResults[location]
          : r.scenarioResults[location[0].toLowerCase() + `${location}Results`.substring(1)],
      ).flatMap((p: IPhaseResult) => Object.values(p)),
    ]);
  }

  private excelBuildLocationResults(
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
      ['', ...this.excelCalculateAverages(results, location, isIndoor)],
      [''],
      [''],
      ['Realization Results'],
      [''],
      ['', ...phaseHeaders],
      ['Realization', ...resultHeaders],
      ...this.excelParseLocationRealizationResults(results, location, isIndoor),
    ];
  }

  private excelBuildEventResults(results: IJobResultRealization[]): (string | number | undefined)[][] {
    const sectionHeaders = ['Travel Costs', '', '', '', '', 'Event Costs'];

    const resultHeaders = Object.entries(results[0].eventResults).flatMap(([k, v]: [string, number | IPhaseResult]) => {
      const header = typeof v === 'number' ? [k] : Object.keys(v);
      return header.map((h) => this.convertCamelToTitleCase(h));
    });

    const averageHeaders = resultHeaders.map((h) => `Average ${h}`);

    const realizationResults = results.map((r, i) => [
      i + 1,
      ...Object.values(r.eventResults).flatMap((p: IPhaseResult | number) =>
        typeof p === 'number' ? p : Object.values(p),
      ),
    ]);

    const { length } = results;
    const averageResults = realizationResults
      .reduce((acc, cur) => {
        return cur.slice(1).map((x, i) => (acc[i] ?? 0) + (x ?? 0));
      }, [])
      .map((v) => (v ?? 0) / length);

    return [
      ['Event Results'],
      [''], // empty row
      ['', ...sectionHeaders],
      ['', ...averageHeaders],
      ['', ...averageResults],
      [''],
      [''],
      ['Realization Results'],
      [''],
      ['', ...sectionHeaders],
      ['Realization', ...resultHeaders],
      ...realizationResults,
    ];
  }

  private excelCalculateAverages(results: IJobResultRealization[], location: string, isIndoor: boolean): number[] {
    const { length } = results;
    const vals = this.excelParseLocationRealizationResults(results, location, isIndoor).map((v) => v.slice(1));

    return vals
      .reduce((acc, cur) => {
        return cur.map((x, i) => (acc[i] ?? 0) + (x ?? 0));
      }, [])
      .map((v) => (v ?? 0) / length);
  }

  /** Create a worksheet from array and add it to the workbook with the given name */
  private excelAddToWorkbook(aoa: (number | string | undefined)[][], wb: XLSX.WorkBook, name: string): void {
    const ws = XLSX.utils.aoa_to_sheet(aoa);
    XLSX.utils.book_append_sheet(wb, ws, name);
  }

  private getPhaseNames(realization: IJobResultRealization): string[] {
    const { scenarioResults } = realization;
    const existingLocation =
      scenarioResults.outdoorResults ??
      scenarioResults.undergroundResults ??
      Object.values(scenarioResults.indoorResults)[0];

    return Object.keys(existingLocation);
  }
}
