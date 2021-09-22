import Result from '@/enums/jobs/results/result';
import JobRequest from '@/implementations/jobs/JobRequest';
import IElementBreakdown from '../jobs/results/IElementBreakdown';
import IJobResultRealization from '../jobs/results/IJobResultRealization';
import IResultDetails from '../jobs/results/IResultDetails';

export default interface IJobResultProvider {
  /** Converts camel case string to title case.
   * @param {string} name - The camel case string to be converted.
   * @returns The string in title case.
   */
  convertCamelToTitleCase(name: string): string;

  /** Exports job results to a Microsoft Excel file.
   * @param {JobRequest} job - The job with results to export.
   */
  exportJobResults(job: JobRequest): void;

  /** Finds all values of a given result.
   * @param {IJobResultRealization} realization - The job result realization to parse.
   * @param {Result} result - The result to look for.
   * @returns An array holding all the found values.
   */
  getResultValues(realization: IJobResultRealization, result: Result): number[];

  /** Rounds number to 3 sig figs and adds commas where necessary.
   * @param {number} number - The number to be converted.
   * @returns A number in a more readable format.
   */
  formatNumber(number: number): string;

  /** Retrieves the results for a specific realization.
   * @param {IJobResultRealization[]} allResults - The array of realization results.
   * @param {number} realizationNumber - The number of the realization.
   * @returns The results for the realization.
   */
  getRealizationResults(allResults: IJobResultRealization[], realizationNumber: number): IJobResultRealization;

  /** Retrieves the mean, max, min, and standard deviation of a result
   * across all realizations. Also retrieves all values of the result.
   * @param {IJobResultRealization[]} allResults - The array of realization results.
   * @param {Result} result - The result to get details for.
   * @returns The mean, max, min, standard deviation, and all values of the result if it can be found.
   * Otherwise returns undefined.
   */
  getResultDetails(allResults: IJobResultRealization[], result: Result): IResultDetails | undefined;

  /** Retrieves the breakdown by each element of a specific result.
   * @param {IJobResultRealization} realization - The job result realization.
   * @param {Result} result - The result to get the breakdown for.
   * @returns An array of objects holding the element's name and value for the
   * inputted result if it exists
   */
  getResultElementBreakdown(realization: IJobResultRealization, result: Result): IElementBreakdown[];

  /** Retrieves the units for a given result (if they exist)
   * @param {Result} result - The result to get units for.
   * @returns The units for the given result (or undefined if they don't exist).
   */
  getUnits(result: Result): string | undefined;

  /** Resets stored results and details */
  reset(): void;
}
