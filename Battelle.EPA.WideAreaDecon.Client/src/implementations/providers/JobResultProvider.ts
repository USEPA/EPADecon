import { injectable } from 'inversify';
import XLSX from 'xlsx';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import Result from '@/enums/jobs/results/result';
import IElementResult from '@/interfaces/jobs/results/element/IElementResult';
import IElementBreakdown from '@/interfaces/jobs/results/IElementBreakdown';
import JobRequest from '../jobs/JobRequest';
import ResourceResult from '@/enums/jobs/results/resourceResult';
import IElementResultSet from '@/interfaces/jobs/results/IElementResultSet';
import IResourceResult from '@/interfaces/jobs/results/resource/IResourceResult';
import resultDefinitions from '@/constants/results/resultDefinition';
import IBuildingCategoryResults from '@/interfaces/jobs/results/IBuildingCategoryResults';
import IEventResults from '@/interfaces/jobs/results/IEventResults';
import IOtherResult from '@/interfaces/jobs/results/element/IOtherResult';

@injectable()
export default class JobResultProvider implements IJobResultProvider {
  private readonly numSigFigs = 3;

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

  private readonly costResultNames: string[] = Object.values(Result);

  private readonly resourceResultNames: string[] = Object.values(ResourceResult);

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

    const formatter = this.convertCamelToTitleCase;
    const definitions = [
      ['Element', 'Result', 'Definition'],
      // build definitions from resultDefinitions object
      ...Object.entries(resultDefinitions).flatMap(([element, entries]) =>
        Object.entries(entries).map(([resultName, resultDef], i) => {
          const elementCell = i === 0 ? formatter(element) : '';
          const resultNameCell = resultName.includes(' ') ? resultName : formatter(resultName);

          return [elementCell, resultNameCell, resultDef];
        }),
      ),
    ];
    this.excelAddToWorkbook(definitions, wb, 'Result Definitions');

    const { scenarioResults } = results[0];
    const existingLocation =
      scenarioResults.outdoorResults ??
      scenarioResults.undergroundResults ??
      Object.values(scenarioResults.indoorResults).filter((er) => er?.realizationResults)[0]?.realizationResults;

    // Get headers for elements & results (not including resource results)
    const { elementHeaders, resultHeaders, averageHeaders } = this.excelGetHeaders(
      existingLocation,
      this.costResultNames,
    );
    // Get headers for resource results
    const resourceHeaders = this.excelGetHeaders(existingLocation, this.resourceResultNames);

    const resourceResultsCallback = (elementResult: IElementResult) => {
      const resourceResults: number[] = [];
      this.flattenAndParseResults(elementResult, (_, resultValue) => {
        resourceResults.push(resultValue);
      });
      return resourceResults;
    };

    // INDOOR
    if (results.some((er) => er.scenarioResults.indoorResults)) {
      // Build arrays for each location
      const buildingCategories = Object.keys(results[0].scenarioResults.indoorResults).filter(
        (b) => results[0].scenarioResults.indoorResults[b] !== null,
      );
      const indoor = buildingCategories.map((b) => {
        const costResults = this.excelBuildLocationResults(
          results,
          b,
          elementHeaders,
          resultHeaders,
          averageHeaders,
          true,
        );
        const resourceResults = this.excelBuildLocationResults(
          results,
          b,
          resourceHeaders.elementHeaders,
          resourceHeaders.resultHeaders,
          resourceHeaders.averageHeaders,
          true,
          this.costResultsIncludesResultName.bind(this),
          resourceResultsCallback,
        );
        resourceResults.splice(0, 1, [`${b} Building Resource Results`]);
        resourceResults.splice(2, 1, ['']);

        return { costResults, resourceResults };
      });

      // Get sum of all buildings (this is likely only temporary)
      const indoorSum = this.excelBuildLocationResults(
        results,
        buildingCategories[0],
        elementHeaders,
        resultHeaders,
        averageHeaders,
        true,
      );
      indoorSum.splice(0, 1, ['Sum of Indoor Results']);

      const totalIndoorBuildings = Object.values(results[0].scenarioResults.indoorResults).reduce(
        (acc, cur) => (cur === null ? acc : acc + cur.buildingCount),
        0,
      );
      indoorSum.splice(2, 1, ['Total Number of Buildings', totalIndoorBuildings]);

      const avgSum = [
        '',
        ...buildingCategories
          .map((b) =>
            this.excelCalculateAverages(
              results,
              b,
              true,
              this.resourceResultsIncludesResultName.bind(this),
              Object.values,
            ),
          )
          .reduce((acc, cur) => {
            return cur.map((v, i) => acc[i] + v);
          }),
      ];
      indoorSum.splice(6, indoorSum.length - 1, avgSum);

      // Add sheets to workbook
      indoor.forEach(({ costResults, resourceResults }, i) => {
        this.excelAddToWorkbook(costResults, wb, `${buildingCategories[i]} Building`);
        this.excelAddToWorkbook(resourceResults, wb, `${buildingCategories[i]} Building (Resource)`);
      });
      this.excelAddToWorkbook(indoorSum, wb, 'Indoor');
    }

    // OUTDOOR
    if (results.some((er) => er.scenarioResults.outdoorResults)) {
      const outdoor = this.excelBuildLocationResults(results, 'Outdoor', elementHeaders, resultHeaders, averageHeaders);
      const outdoorResource = this.excelBuildLocationResults(
        results,
        'Outdoor',
        resourceHeaders.elementHeaders,
        resourceHeaders.resultHeaders,
        resourceHeaders.averageHeaders,
        false,
        this.costResultsIncludesResultName.bind(this),
        resourceResultsCallback,
      );
      outdoorResource.splice(0, 1, ['Outdoor Resource Results']);

      this.excelAddToWorkbook(outdoor, wb, 'Outdoor');
      this.excelAddToWorkbook(outdoorResource, wb, 'Outdoor (Resource)');
    }

    // UNDERGROUND
    if (results.some((er) => er.scenarioResults.undergroundResults)) {
      const underground = this.excelBuildLocationResults(
        results,
        'Underground',
        elementHeaders,
        resultHeaders,
        averageHeaders,
      );
      const undergroundResource = this.excelBuildLocationResults(
        results,
        'Underground',
        resourceHeaders.elementHeaders,
        resourceHeaders.resultHeaders,
        resourceHeaders.averageHeaders,
        false,
        this.costResultsIncludesResultName.bind(this),
        resourceResultsCallback,
      );
      undergroundResource.splice(0, 1, ['Underground Resource Results']);

      this.excelAddToWorkbook(underground, wb, 'Underground');
      this.excelAddToWorkbook(undergroundResource, wb, 'Underground (Resource)');
    }

    // EVENT
    const event = this.excelBuildEventResults(results);
    this.excelAddToWorkbook(event, wb, 'Event & Travel');

    const options: XLSX.WritingOptions = {
      cellStyles: true,
    };

    // Download workbook
    XLSX.writeFile(wb, 'Results.xlsx', options);
  }

  formatNumber(number: number): string {
    const rounded = number.toPrecision(this.numSigFigs);
    return parseFloat(rounded).toLocaleString('en-US');
  }

  convertCamelToTitleCase(name: string): string {
    const regex = /([A-Z](?=[A-Z][a-z])|[^A-Z\W](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z\W]))/g;
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

  getUnits(result: Result | ResourceResult): string | undefined {
    switch (result) {
      case Result.AreaContaminated:
        return 'm^2';
      case Result.TotalCost:
      case Result.ElementCost:
        return '$';
      case Result.AqueousWasteProduced:
      case ResourceResult.DeconAgentVolume:
        return 'L';
      case Result.SolidWasteProduced:
        return 'kg';
      default:
        return undefined;
    }
  }

  getUnitsAsHtml(result: Result | ResourceResult): string | undefined {
    const units = this.getUnits(result);
    if (!units) {
      return;
    }

    return units.includes('^') ? units.replace(/(\^)(.)/, '<sup>$2</sup>') : units;
  }

  reset(): void {
    this.savedDetails = {};
    this.savedResults = {};
  }

  resultIsNumber(result: Result | ResourceResult): boolean {
    return typeof result === 'number';
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

      const resultSets: IElementResultSet[] = this.isIndoor(location)
        ? Object.values(resultSet)
            .filter((building: IBuildingCategoryResults | null) => building)
            .map((building: IBuildingCategoryResults) => building.realizationResults)
        : [resultSet as IElementResultSet];

      // loop through result set
      for (let j = 0, l2 = resultSets.length; j < l2; j += 1) {
        // loop through each element and look for result
        for (let k = 0; k < l1; k += 1) {
          callback(resultSets[j][elementNames[k]][result] as number, k);
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

  private resourceResultsIncludesResultName(name: string): boolean {
    return this.resourceResultNames.includes(name);
  }

  /** For results that AREN'T resource results */
  private costResultsIncludesResultName(name: string): boolean {
    return this.costResultNames.includes(name);
  }

  private excelParseLocationRealizationResults(
    results: IJobResultRealization[],
    location: string,
    isIndoor: boolean,
    filter: (name: string) => boolean,
    callback: (value: IElementResult) => (number | undefined)[],
  ): (number | undefined)[][] {
    return results.map((r, i) => [
      i + 1,
      ...Object.values(
        isIndoor
          ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            r.scenarioResults.indoorResults[location]!.realizationResults
          : r.scenarioResults[location[0].toLowerCase() + `${location}Results`.substring(1)],
      ).flatMap((resultNamesAndValues: IElementResult) => {
        const filteredResults: IElementResult = Object.entries(resultNamesAndValues).reduce(
          (acc: IElementResult, [resultName, resultValue]) => {
            if (!filter(resultName)) {
              acc[resultName] = resultValue;
            }

            return acc;
          },
          {},
        );

        return callback(filteredResults);
      }),
    ]);
  }

  private excelBuildLocationResults(
    results: IJobResultRealization[],
    location: string,
    elementHeaders: string[],
    resultHeaders: string[],
    averageHeaders: string[],
    isIndoor = false,
    filter: (name: string) => boolean = this.resourceResultsIncludesResultName.bind(this),
    callback: (value: IElementResult) => (number | undefined)[] = Object.values,
  ): (string | number | undefined)[][] {
    const sheetElementHeaders = elementHeaders.slice();
    const sheetResultHeaders = resultHeaders.slice();
    const sheetAverageHeaders = averageHeaders.slice();
    const averageValues = this.excelCalculateAverages(results, location, isIndoor, filter, callback);
    const resultValues = this.excelParseLocationRealizationResults(results, location, isIndoor, filter, callback);

    const colOffset = 1; // offset col due to realization number being added
    const colsToRemove: number[] = [];
    for (let col = 0; col < averageValues.length; col++) {
      if (averageValues[col] === 0) {
        let hasResults = false;
        // check if any values exist in col, if not remove it
        for (let row = 0; row < results.length; row++) {
          if (resultValues[row][col + colOffset] !== 0) {
            hasResults = true;
          }
        }
        if (!hasResults) {
          colsToRemove.push(col);
        }
      }
    }

    for (let i = 0; i < colsToRemove.length; i++) {
      const col = colsToRemove[i] - i;

      if (sheetElementHeaders[col] && !sheetElementHeaders[col + 1] && col !== sheetElementHeaders.length - 1) {
        sheetElementHeaders[col + 1] = sheetElementHeaders[col];
      }

      sheetElementHeaders.splice(col, 1);
      sheetResultHeaders.splice(col, 1);
      sheetAverageHeaders.splice(col, 1);
      averageValues.splice(col, 1);
      for (let row = 0; row < results.length; row++) {
        resultValues[row].splice(col + colOffset, 1);
      }
    }

    let buildingCount: string[][] = [['']];
    if (isIndoor) {
      buildingCount = [
        [''],
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ['Number of Buildings', `${results[0].scenarioResults.indoorResults[location]!.buildingCount}`],
        [''],
      ];
    }

    return [
      [`${isIndoor ? `${location} Building` : location} Results`],
      ...buildingCount,
      ['', ...sheetElementHeaders],
      ['', ...sheetAverageHeaders],
      ['', ...averageValues],
      [''],
      [''],
      ['Realization Results'],
      [''],
      ['', ...sheetElementHeaders],
      ['Realization', ...sheetResultHeaders],
      ...resultValues,
    ];
  }

  private getEventResultUnits(result: keyof IEventResults | keyof IOtherResult): string | undefined {
    switch (result) {
      case 'characterizationSamplingTravelCost':
      case 'sourceReductionTravelCost':
      case 'decontaminationTravelCost':
      case 'verificationSamplingTravelCost':
      case 'clearanceSamplingTravelCost':
      case 'wasteSamplingTravelCost':
      case 'incidentCommandTravelCost':
      case 'totalTravelCost':
      case 'totalEventCost':
      case 'elementCost':
        return '$';
      case 'totalEventDuration':
        return 'days';
      case 'totalContaminationArea':
        return 'm^2';
      case 'totalSolidWasteProduced':
        return 'kg';
      case 'totalAqueousWasteProduced':
        return 'L';
      default:
        return undefined;
    }
  }

  private excelBuildEventResults(results: IJobResultRealization[]): (string | number | undefined)[][] {
    const sectionHeaders = ['Travel Costs', '', '', '', '', '', '', '', 'Incident Command Costs', '', 'Event Costs'];

    const resultHeaders = Object.entries(results[0].eventResults).flatMap(
      ([k, v]: [string, number | IElementResult]) => {
        const header = typeof v === 'number' ? [k] : Object.keys(v);
        return header.map((h) => {
          const unit = this.getEventResultUnits(h);
          return `${this.convertCamelToTitleCase(h)}${unit ? ` (${unit})` : ''}`;
        });
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

  private excelCalculateAverages(
    results: IJobResultRealization[],
    location: string,
    isIndoor: boolean,
    filter: (name: string) => boolean,
    callback: (value: IElementResult) => (number | undefined)[],
  ): number[] {
    const { length } = results;
    const vals = this.excelParseLocationRealizationResults(results, location, isIndoor, filter, callback).map((v) =>
      v.slice(1),
    );

    return vals
      .reduce((acc, cur) => {
        return cur.map((x, i) => (acc[i] ?? 0) + (x ?? 0));
      }, [])
      .map((v) => (v ?? 0) / length);
  }

  /** Create a worksheet from array and add it to the workbook with the given name */
  private excelAddToWorkbook(aoa: (number | string | undefined)[][], wb: XLSX.WorkBook, name: string): void {
    const ws = XLSX.utils.aoa_to_sheet(aoa);

    const range = XLSX.utils.decode_range(ws['!ref'] ?? '');
    const colOffset = 1; // skip first col numbers
    const rowOffset = aoa.findIndex((r) => r[1] === 'Characterization Sampling'); // skip segment counts
    const numFormat = '0.00';

    // format numbers in cells
    for (let col = colOffset; col <= range.e.c; col++) {
      for (let row = rowOffset; row <= range.e.r; row++) {
        const cell = ws[XLSX.utils.encode_cell({ r: row, c: col })];
        if (!cell || cell.t !== 'n' || (`${cell.v}`.split('.')[1]?.length ?? 0) <= 2) {
          continue;
        }

        cell.z = numFormat;
      }
    }
    XLSX.utils.book_append_sheet(wb, ws, name);
  }

  private excelGetHeaders(
    elementResultSet: IElementResultSet,
    resultNames: string[],
  ): { elementHeaders: string[]; resultHeaders: string[]; averageHeaders: string[] } {
    const flattenedAndFilteredResultNames: string[] = [];

    const elementHeaders = Object.entries(elementResultSet).flatMap(([elementName, elementResult]) => {
      if (!Object.keys(elementResult).some((resultName) => resultNames.includes(resultName))) {
        return [];
      }

      const flattenedNamesForElement: string[] = [];
      this.flattenAndParseResults(elementResult, (resultName) => {
        if (!resultNames.includes(resultName.split(' - ')[0])) {
          return;
        }

        flattenedNamesForElement.push(resultName);
      });
      flattenedAndFilteredResultNames.push(...flattenedNamesForElement);

      const element = [this.convertCamelToTitleCase(elementName.replace(/Results$/, ''))];

      // add space for result headers between element headers
      [...Array(flattenedNamesForElement.length - 1)].forEach(() => element.push(''));
      return element;
    });

    const resultHeaders = flattenedAndFilteredResultNames.map((resultName) => {
      const result = this.convertCamelToTitleCase(resultName);
      const units = this.getUnits(resultName.split(' - ')[0] as Result | ResourceResult);

      return units ? `${result} (${units})` : result;
    });

    const averageHeaders = resultHeaders.map((header) => `Average ${header}`);

    return { elementHeaders, resultHeaders, averageHeaders };
  }

  private flattenAndParseResults(
    elementResult: IElementResult | IResourceResult,
    callback: (resultName: string, resultValue: number) => void,
  ): void {
    const entries = Object.entries(elementResult);
    for (let i = 0; i < entries.length; i++) {
      const [resultName, resultValue]: [string, number | Record<string, number>] = entries[i];
      if (typeof resultValue === 'number') {
        callback(resultName, resultValue);
        continue;
      }

      // value contains nested properties
      const subEntries: [string, number][] = Object.entries(resultValue);
      for (let j = 0; j < subEntries.length; j++) {
        const [subName, subValue] = subEntries[j];
        callback(`${resultName} - ${subName}`, subValue);
      }
    }
  }

  private getElementNames(realization: IJobResultRealization): string[] {
    const { scenarioResults } = realization;
    const existingLocation =
      scenarioResults.outdoorResults ??
      scenarioResults.undergroundResults ??
      Object.values(scenarioResults.indoorResults).filter((er) => er?.realizationResults)[0]?.realizationResults;

    return existingLocation ? Object.keys(existingLocation) : [];
  }
}
