import { injectable } from 'inversify';
import XLSX from 'xlsx';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import IPhaseResultSet from '@/interfaces/jobs/results/IPhaseResultSet';
import PhaseResult from '@/enums/jobs/results/phaseResult';
import IPhaseResult from '@/interfaces/jobs/results/phase/IPhaseResult';

@injectable()
export default class JobResultProvider implements IJobResultProvider {
  /* eslint-disable class-methods-use-this */
  exportJobResults(results: IJobResultRealization[]): void {
    const wb = XLSX.utils.book_new();

    // Headers for each phase
    const phaseHeaders = [
      'Pre Decon Characterization Sampling',
      '',
      '',
      'Post Decon Characterization Sampling',
      '',
      '',
      'Total Characterization Sampling',
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
      // 'Other',
      'General',
    ];

    // Get headers for each result
    const resultHeaders = Object.values(results[0].scenarioResults.outdoorResults).flatMap((pr) =>
      Object.keys(pr).map((p) => this.convertCamelToTitleCase(p)),
    );

    // Headers for average results
    const averageHeaders = resultHeaders.map((h) => `Average ${h}`);

    // Build arrays for each location
    const buildings = Object.keys(results[0].scenarioResults.indoorResults);
    const indoor = buildings.map((b) =>
      this.excelBuildLocationResults(results, b, phaseHeaders, resultHeaders, averageHeaders, true),
    );

    // Get sum of all buildings (this is likely only temporary)
    const indoorSum = this.excelBuildLocationResults(results, 'Outdoor', phaseHeaders, resultHeaders, averageHeaders);
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

    const outdoor = this.excelBuildLocationResults(results, 'Outdoor', phaseHeaders, resultHeaders, averageHeaders);
    const underground = this.excelBuildLocationResults(
      results,
      'Underground',
      phaseHeaders,
      resultHeaders,
      averageHeaders,
    );

    const event = this.excelBuildEventResults(results);

    const runData = [
      ['Data exported on: ', new Date(Date.now()).toLocaleString()],
      ['Number of realizations: ', results.length],
    ];

    // Create worksheets from arrays
    const dataWS = XLSX.utils.aoa_to_sheet(runData);
    const indWS = indoor.map((aoa) => XLSX.utils.aoa_to_sheet(aoa));
    const indSumWS = XLSX.utils.aoa_to_sheet(indoorSum);
    const outWS = XLSX.utils.aoa_to_sheet(outdoor);
    const undWS = XLSX.utils.aoa_to_sheet(underground);
    const eventWS = XLSX.utils.aoa_to_sheet(event);

    // Add worksheets to workbook
    XLSX.utils.book_append_sheet(wb, dataWS, 'Data');
    indWS.forEach((WS, i) => XLSX.utils.book_append_sheet(wb, WS, `${buildings[i]} Building`));
    XLSX.utils.book_append_sheet(wb, indSumWS, 'Indoor');
    XLSX.utils.book_append_sheet(wb, outWS, 'Outdoor');
    XLSX.utils.book_append_sheet(wb, undWS, 'Underground');
    XLSX.utils.book_append_sheet(wb, eventWS, 'Event');

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
    // remove total cs results for now
    const phaseNames = Object.keys(realization.scenarioResults.outdoorResults).filter(
      (p) => !p.toLowerCase().includes('total'),
    );
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

    const numLocations =
      Object.keys(allResults[0].scenarioResults).length -
      1 +
      Object.keys(allResults[0].scenarioResults.indoorResults).length;
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
    // remove total characterization sampling results for now
    const phaseNames = Object.keys(realization.scenarioResults.outdoorResults).filter(
      (p) => !p.toLowerCase().includes('total'),
    );

    Object.entries(realization.scenarioResults).forEach(([location, resultSet]) => {
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
}
