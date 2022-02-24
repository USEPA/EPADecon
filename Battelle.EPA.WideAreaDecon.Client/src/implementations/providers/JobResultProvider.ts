import { injectable } from 'inversify';
import XLSX from 'xlsx';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import Result from '@/enums/jobs/results/result';
import IElementResult from '@/interfaces/jobs/results/element/IElementResult';
import IElementBreakdown from '@/interfaces/jobs/results/IElementBreakdown';
import JobRequest from '../jobs/JobRequest';

@injectable()
export default class JobResultProvider implements IJobResultProvider {
  private savedResults: { [key: string]: number[] } = {};

  private savedDetails: { [key: string]: IResultDetails } = {};

  /** List of results that have a total value listed in event results */
  private readonly totalInEventResults = [
    Result.AreaContaminated,
    Result.AqueousWasteProduced,
    Result.OnSiteDays,
    Result.SolidWasteProduced,
    Result.TotalCost,
  ];

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

    // Get headers for each element
    const elementHeaders: string[] = Object.entries(existingLocation).flatMap(([p, rs]) => {
      const element = [this.convertCamelToTitleCase(p.replace(/Results$/, ''))];
      [...Array(Object.keys(rs).length - 1)].forEach(() => element.push(''));
      return element;
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
        this.excelBuildLocationResults(results, b, elementHeaders, resultHeaders, averageHeaders, true),
      );

      // Get sum of all buildings (this is likely only temporary)
      const indoorSum = this.excelBuildLocationResults(
        results,
        buildings[0],
        elementHeaders,
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
      const outdoor = this.excelBuildLocationResults(results, 'Outdoor', elementHeaders, resultHeaders, averageHeaders);
      this.excelAddToWorkbook(outdoor, wb, 'Outdoor');
    }

    // UNDERGROUND
    if (results[0].scenarioResults.undergroundResults) {
      const underground = this.excelBuildLocationResults(
        results,
        'Underground',
        elementHeaders,
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
    const numSigFigs = 3;
    const rounded = number.toPrecision(numSigFigs);
    return parseFloat(rounded).toLocaleString('en-US');
  }

  convertCamelToTitleCase(name: string): string {
    const regex = /([A-Z](?=[A-Z][a-z])|[^A-Z](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z]))/g;
    return `${name.charAt(0).toUpperCase()}${name.slice(1).replace(regex, '$1 ')}`;
  }

  getRealizationResults(allResults: IJobResultRealization[], realizationNumber: number): IJobResultRealization {
    const realizationIndex = realizationNumber - 1;
    return allResults[realizationIndex];
  }

  getResultElementBreakdown(realization: IJobResultRealization, result: Result): IElementBreakdown[] {
    const elementNames = this.getElementNames(realization);
    const breakdown: { element: string; value: number }[] = [];

    this.findResultValues(realization, result, (value: number | undefined, index: number) => {
      const res = value ?? 0;

      if (breakdown[index] !== undefined) {
        breakdown[index].value += res;
      } else {
        breakdown.push({
          element: elementNames[index].replace(/Results$/, ''),
          value: res,
        });
      }
    });

    return breakdown.filter((v) => v.value > 0);
  }

  getResultDetails(allResults: IJobResultRealization[], result: Result): IResultDetails | undefined {
    if (this.savedDetails[result]) {
      return this.savedDetails[result];
    }

    const instances: number[] = JSON.parse(JSON.stringify(this.savedResults[result] ?? []));

    if (!instances.length) {
      // get all instances of the result
      for (let i = 0, l = allResults.length; i < l; i += 1) {
        instances.push(...this.getResultValues(allResults[i], result));
      }

      if (!instances.length) {
        return undefined;
      }

      this.savedResults[result] = [...instances];
    }
    const indoorLocations = Object.values(allResults[0].scenarioResults.indoorResults ?? {}).filter(
      (resultSet) => resultSet,
    ).length;
    let otherLocations = Object.values(allResults[0].scenarioResults).filter((resultSet) => resultSet).length;
    if (indoorLocations) {
      // subtract indoor since it was included twice
      otherLocations -= 1;
    }
    const numLocations = indoorLocations + otherLocations;
    const numOccurrencesPerLocation = instances.length / (allResults.length * numLocations);
    const oneOccurrenceAtLocation = numOccurrencesPerLocation === 1;
    const step = numLocations * numOccurrencesPerLocation;
    const sums: number[] = [];

    if (this.totalExistsInEventResults(result)) {
      // get value from event results rather than summing up instances
      for (let i = 0; i < allResults.length; i += 1) {
        const sum = this.findEventResult(allResults[i], result);
        if (sum !== undefined) {
          sums.push(sum);
        }
      }
    } else {
      for (let i = 0, l1 = instances.length; i < l1; i += step) {
        const next: number[] = [];
        if (oneOccurrenceAtLocation) {
          next.push(...instances.splice(0, numLocations));
        } else {
          // get sum of instances for each location
          for (let j = 0; j < numLocations; j += 1) {
            const locationVals = instances.splice(0, numOccurrencesPerLocation);
            let sum = 0;
            for (let k = 0; k < numOccurrencesPerLocation; k += 1) {
              sum += locationVals[k];
            }
            next.push(sum);
          }
        }

        // sum the locations
        let sum = 0;
        for (let j = 0, l2 = next.length; j < l2; j += 1) {
          sum += next[j];
        }
        sums.push(sum);
      }
    }

    // credit to Foxcode's answer: https://stackoverflow.com/a/53577159
    const { length } = sums;
    const mean = sums.reduce((acc, cur) => acc + cur, 0) / length ?? undefined;
    let stdDev = Math.sqrt(sums.map((x) => (x - mean) ** 2).reduce((a, b) => a + b, 0) / (length - 1)) ?? undefined;
    if (Number.isNaN(stdDev)) {
      stdDev = 0;
    }
    const { minimum, maximum } = this.getMinandMax(sums);

    const details: IResultDetails = {
      values: sums,
      mean,
      maximum,
      minimum,
      stdDev,
    };
    this.savedDetails[result] = { ...details };

    return details;
  }

  getResultValues(realization: IJobResultRealization, result: Result): number[] {
    const values: number[] = [];
    this.findResultValues(realization, result, (value) => {
      if (value !== undefined) {
        values.push(value);
      }
    });
    return values;
  }

  getUnits(result: Result): string | undefined {
    switch (result) {
      case Result.AreaContaminated:
        return 'm^2';
      case Result.TotalCost:
      case Result.ElementCost:
        return '$';
      default:
        return undefined;
    }
  }

  reset(): void {
    this.savedDetails = {};
    this.savedResults = {};
  }

  private totalExistsInEventResults(result: Result): boolean {
    return this.totalInEventResults.includes(result);
  }

  private findResultValues(
    realization: IJobResultRealization,
    result: Result,
    callback: (value: number | undefined, index: number) => void,
  ): void {
    const elementNames = this.getElementNames(realization);
    const entries = Object.entries(realization.scenarioResults);
    const l1 = elementNames.length;

    // loop through locations
    for (let i = 0, l3 = entries.length; i < l3; i += 1) {
      const [location, resultSet] = entries[i];
      if (!resultSet) {
        // eslint-disable-next-line no-continue
        continue;
      }

      const resultSets = this.isIndoor(location) ? Object.values(resultSet) : [resultSet];

      // loop through result set
      for (let j = 0, l2 = resultSets.length; j < l2; j += 1) {
        // loop through each element and look for result
        for (let k = 0; k < l1; k += 1) {
          callback(resultSets[j][elementNames[k]][result], k);
        }
      }
    }
  }

  private findEventResult(realization: IJobResultRealization, result: Result): number | undefined {
    const { eventResults } = realization;
    let eventResult = '';
    switch (result) {
      case Result.OnSiteDays:
        eventResult = 'totalEventDuration';
        break;
      case Result.AreaContaminated:
        eventResult = 'totalContaminationArea';
        break;
      case Result.TotalCost:
        eventResult = 'totalEventCost';
        break;
      default:
        eventResult = `total${result.slice(0, 1).toUpperCase() + result.slice(1)}`;
    }

    return typeof eventResults[eventResult] === 'number'
      ? (eventResults[eventResult] as number)
      : eventResults.otherResults[result];
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
      ).flatMap((p: IElementResult) => Object.values(p)),
    ]);
  }

  private excelBuildLocationResults(
    results: IJobResultRealization[],
    location: string,
    elementHeaders: string[],
    resultHeaders: string[],
    averageHeaders: string[],
    isIndoor = false,
  ): (string | number | undefined)[][] {
    return [
      [`${isIndoor ? `${location} Building` : location} Results`],
      [''], // empty row
      ['', ...elementHeaders],
      ['', ...averageHeaders],
      ['', ...this.excelCalculateAverages(results, location, isIndoor)],
      [''],
      [''],
      ['Realization Results'],
      [''],
      ['', ...elementHeaders],
      ['Realization', ...resultHeaders],
      ...this.excelParseLocationRealizationResults(results, location, isIndoor),
    ];
  }

  private excelBuildEventResults(results: IJobResultRealization[]): (string | number | undefined)[][] {
    const sectionHeaders = ['Travel Costs', '', '', '', '', 'Event Costs'];

    const resultHeaders = Object.entries(results[0].eventResults).flatMap(
      ([k, v]: [string, number | IElementResult]) => {
        const header = typeof v === 'number' ? [k] : Object.keys(v);
        return header.map((h) => this.convertCamelToTitleCase(h));
      },
    );

    const averageHeaders = resultHeaders.map((h) => `Average ${h}`);

    const realizationResults = results.map((r, i) => [
      i + 1,
      ...Object.values(r.eventResults).flatMap((p: IElementResult | number) =>
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

  private getElementNames(realization: IJobResultRealization): string[] {
    const { scenarioResults } = realization;
    const existingLocation =
      scenarioResults.outdoorResults ??
      scenarioResults.undergroundResults ??
      Object.values(scenarioResults.indoorResults)[0];

    return Object.keys(existingLocation);
  }
}
